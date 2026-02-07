import express from "express";
const route = express.Router();
import {botChat} from "../controllers/bot.js";

route.post("/chat", botChat);

export default route;