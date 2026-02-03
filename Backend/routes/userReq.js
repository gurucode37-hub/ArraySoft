import express from "express";
const route = express.Router();
import {reqController} from "../controllers/userReq.js";

route.post("/req", reqController);

export default route;