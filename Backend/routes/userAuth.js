import express from "express";
const route = express.Router();
import authMiddleware from "../middlewares/auth.js";
import {userController, loginController,logoutController, changeNameController, verifyEmailController, changePasswordController} from "../controllers/userAuth.js"

route.post("/register", userController);
route.post("/logout", logoutController);
route.post("/login", loginController);
route.post("/changename", changeNameController);
route.post("/verify-email", verifyEmailController);
route.post("/changepassword", changePasswordController);

export default route;