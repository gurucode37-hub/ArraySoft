import express from "express";
const route = express.Router();
import adminAuthMiddleware from "../middlewares/admin.js"
import {getAllUsersController, resShowController, courseShowController} from "../controllers/admin.js";

route.get("/users", adminAuthMiddleware, getAllUsersController);
route.get("/show-req", adminAuthMiddleware, resShowController);
route.get("/show-course", adminAuthMiddleware, courseShowController);
export default route;