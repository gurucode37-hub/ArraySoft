import express from "express";
const route = express.Router();
import {userController, loginController,logoutController, changeNameController, verifyEmailController, changePasswordController} from "../controllers/user.js"

route.post("/register", userController);
route.post("/logout", logoutController);
route.post("/login", loginController);
route.post("/changename", changeNameController);
route.post("/verify-email", verifyEmailController);
route.post("/changepassword", changePasswordController);

export default route;