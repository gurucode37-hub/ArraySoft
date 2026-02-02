import express from "express";
const route = express.Router();
import {paymentLogic} from "../util/payment.js";

route.post("/create-order", paymentLogic);

export default route;