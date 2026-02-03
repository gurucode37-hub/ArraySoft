import userModel from "../models/user.js";
import reqModel from "../models/req.js";
import Course from "../models/course.js";
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

// --------------ALL REQUEST-----------------
export const resShowController = async (req, res) => {
  try {
    const requests = await reqModel.find();

    res.status(200).json({
      success: true,
      requests, 
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// --------------ALL COURSES-----------------
export const courseShowController = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      success: true,
      courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}