import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // tracking
    lastLogin: Date,
    lastLogout: Date,
    totalTimeSpent: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
