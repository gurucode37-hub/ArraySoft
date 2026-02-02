import mongoose from "mongoose";

const reqSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true},
    number: { type: Number, required: true },
    message: {type: String, required: true},
  }
);

const reqModel = mongoose.model("Req", reqSchema);
export default reqModel;
