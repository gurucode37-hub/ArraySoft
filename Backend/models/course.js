import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // course ka naam
    courseName: {
      type: String,
      required: true,
      trim: true,
    },

    // Razorpay order id
    order_id: {
      type: String,
      required: true,
      unique: true,
    },

    // course price 
    courseAmount: {
      type: Number,
      required: true,
    },

    // payment status
    paymentStatus: {
      type: String,
      enum: ["success", "failed", "pending"],
      default: "success",
    },
  },
  {
    timestamps: true,
  },
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
