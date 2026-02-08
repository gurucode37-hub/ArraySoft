import mongoose from "mongoose";

const appSchema = new mongoose.Schema(
  {
    appId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    appName: { type: String, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

const appModel = mongoose.model("app", appSchema);
export default appModel;
