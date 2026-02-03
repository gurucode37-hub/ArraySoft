import express from "express";
const route = express.Router();
import {paymentLogic} from "../util/payment.js";
import {verifyPayment, getMyCourses} from "../controllers/userReq.js"
import authMiddleware from "../middlewares/auth.js"

route.post("/create-order",  authMiddleware, paymentLogic);
route.post("/verify", authMiddleware, verifyPayment);
route.get("/my-courses", authMiddleware, getMyCourses);

export default route;