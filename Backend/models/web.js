import mongoose from "mongoose";

const webSchema = new mongoose.Schema(
  {
    webId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    webName: { type: String, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

const webModel = mongoose.model("web", webSchema);
export default webModel;
