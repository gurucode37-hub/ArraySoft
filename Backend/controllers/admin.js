import userModel from "../models/user.js";
import reqModel from "../models/req.js";

// ----------------ALL USERS ---------------
export const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find().select("-password -__v");

    const formattedUsers = users.map((user) => ({
      _id: user._id,
      username: user.username,
      email: user.email,

      // tracking info
      joinedAt: user.createdAt,      
      lastLogin: user.lastLogin || null,
      lastLogout: user.lastLogout || null,
      totalTimeSpent: user.totalTimeSpent || 0,
    }));

    res.status(200).json({
      success: true,
      totalUsers: formattedUsers.length,
      users: formattedUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ---------------USERS REQUEST---------------
export const reqController = async (req, res) => {
  try {
    const { username, email, number, message } = req.body;

    // 🔴 all fields required
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

// --------------ALL REQUEST-----------------
export const resShowController = async (req, res) => {
  try {
    const requests = await reqModel.find();

    res.status(200).json({
      success: true,
      requests, // 👈 clear & meaningful
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
