import mongoose from "mongoose";

const internSchema = new mongoose.Schema(
  {
    internId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    internshipName: { type: String, required: true },
    duration: { type: Number, required: true },
  },
  { timestamps: true }
);

const internModel = mongoose.model("intern", internSchema);
export default internModel;
