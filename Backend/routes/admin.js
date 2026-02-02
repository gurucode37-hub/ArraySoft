import express from "express";
const route = express.Router();
import {getAllUsersController, reqController, resShowController} from "../controllers/admin.js"

route.get("/users", getAllUsersController);
route.get("/show-req", resShowController);
route.post("/req", reqController);

export default route;