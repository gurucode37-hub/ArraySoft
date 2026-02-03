import userModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { tempUsers } from "../util/tempUsers.js";
import { sendOTPEmail } from "../util/sendMail.js";

/* ================= REGISTER (SEND OTP ONLY) ================= */
export const userController = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    email = email.toLowerCase();

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashPassword = await bcrypt.hash(password, 10);

    tempUsers.set(email, {
      username,
      email,
      password: hashPassword,
      otp,
      otpExpiry: Date.now() + 10 * 60 * 1000,
    });

    await sendOTPEmail(email, otp);

    res.status(200).json({
      success: true,
      message: "OTP sent to email. Please verify.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= VERIFY EMAIL (SAVE TO DB) ================= */
export const verifyEmailController = async (req, res) => {
  try {
    let { email, otp } = req.body;
    email = email.toLowerCase();

    const tempUser = tempUsers.get(email);

    if (!tempUser) {
      return res.status(400).json({
        success: false,
        message: "OTP expired or invalid request",
      });
    }

    const cleanOtp = String(otp).trim();

    if (tempUser.otp !== cleanOtp || tempUser.otpExpiry < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired OTP",
      });
    }

    const user = new userModel({
      username: tempUser.username,
      email: tempUser.email,
      password: tempUser.password,
    });

    await user.save();
    tempUsers.delete(email);

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const { password: _, ...userData } = user._doc;

    res.status(201).json({
      success: true,
      message: "Email verified successfully!",
      token,
      user: userData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= LOGIN ================= */
export const loginController = async (req, res) => {
  try {
    let { email, password } = req.body;
    email = email.toLowerCase();

    // ✅ ADMIN LOGIN
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(
        { role: "admin", email },
        process.env.ADMIN_JWT_SECRET,
        { expiresIn: "1d" },
      );

      return res.status(200).json({
        success: true,
        message: "Admin login successful",
        role: "admin",
        token,
        user: {
          username: "Sneha Rajput",
          email: process.env.ADMIN_EMAIL,
        },
      });
    }

    // ✅ NORMAL USER
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found!",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password!",
      });
    }

    user.lastLogin = new Date();
    await user.save();

    const token = jwt.sign(
      { userId: user._id, role: "user" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    const { password: _, ...userData } = user._doc;

    res.status(200).json({
      success: true,
      message: "Login successfully!",
      role: "user",
      token,
      user: userData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= LOGOUT (TIME TRACKING) ================= */
export const logoutController = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email });
    if (!user || !user.lastLogin) {
      return res.status(400).json({
        success: false,
        message: "Invalid logout",
      });
    }

    const now = new Date();
    const sessionTime = (now.getTime() - user.lastLogin.getTime()) / 1000; // seconds

    user.totalTimeSpent += sessionTime;
    user.lastLogout = now;
    user.lastLogin = null;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= CHANGE NAME ================= */
export const changeNameController = async (req, res) => {
  try {
    const { email, username } = req.body;

    const user = await userModel.findOneAndUpdate(
      { email },
      { username },
      { new: true },
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Username updated successfully!",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= CHANGE PASSWORD ================= */
export const changePasswordController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.findOneAndUpdate(
      { email },
      { password: hashPassword },
      { new: true },
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Password updated successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
