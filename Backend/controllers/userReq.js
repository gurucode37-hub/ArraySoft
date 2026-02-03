import crypto from "crypto";
import Course from "../models/course.js";
import reqModel from "../models/req.js";

// ---------------USER CONTACT REQUEST---------------
export const reqController = async (req, res) => {
  try {
    const { username, email, number, message } = req.body;

    if (!username || !email || !number || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newReq = new reqModel({
      username,
      email,
      number,
      message,
    });

    await newReq.save();

    res.status(201).json({
      success: true,
      message: "Request sent successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// --------------USER COURSE REQUEST ----------------
import Razorpay from "razorpay";

export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      courseName,
      courseAmount,
    } = req.body;

    // Basic input validation
    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !courseName ||
      !courseAmount
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res
        .status(400)
        .json({ success: false, message: "Payment verification failed" });
    }

    // Prevent double-processing of same order
    const existing = await Course.findOne({ order_id: razorpay_order_id });
    if (existing) {
      return res
        .status(200)
        .json({ success: true, message: "Order already processed" });
    }

    // Verify payment details with Razorpay (amount, order match, captured)
    const rzp = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const payment = await rzp.payments.fetch(razorpay_payment_id);

    if (!payment || payment.order_id !== razorpay_order_id) {
      return res
        .status(400)
        .json({ success: false, message: "Payment does not match order" });
    }

    if (payment.status !== "captured") {
      return res
        .status(400)
        .json({ success: false, message: "Payment not captured" });
    }

    // Razorpay amounts are in paise
    if (payment.amount !== Number(courseAmount) * 100) {
      return res
        .status(400)
        .json({ success: false, message: "Payment amount mismatch" });
    }

    const newCourse = new Course({
      user_id: req.user.userId || req.user._id,
      courseName,
      order_id: razorpay_order_id,
      courseAmount: Number(courseAmount),
      paymentStatus: "success",
    });

    try {
      await newCourse.save();
    } catch (saveErr) {
      // handle duplicate key or other save errors
      if (saveErr && saveErr.code === 11000) {
        return res
          .status(200)
          .json({ success: true, message: "Order already processed" });
      }
      throw saveErr;
    }

    res.status(200).json({
      success: true,
      message: "Payment verified & course added",
      course: newCourse,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// -----------COURSE ---------------
export const getMyCourses = async (req, res) => {
  try {
    const userId = req.user.userId || req.user._id;

    // return latest courses first
    const courses = await Course.find({ user_id: userId }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: courses.length,
      courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
