import express from "express";
const route = express.Router();

import {
  appController,
  webController,
  internController,

  // INTERN admin
  adminUpdateIntern,
  adminGetAllIntern,
  adminDeleteIntern,

  // APP admin
  adminUpdateApp,
  adminGetAllApp,
  adminDeleteApp,

  // WEB admin
  adminUpdateWeb,
  adminGetAllWeb,
  adminDeleteWeb,

  getInternByEmail,
  getAppByEmail,
  getWebByEmail,

} from "../controllers/app-web-intern.js";

import adminAuthMiddleware from "../middlewares/admin.js";
import authMiddleware from "../middlewares/auth.js";

/* ================= USER ROUTES ================= */

route.post("/user/intern", authMiddleware, getInternByEmail);
route.post("/user/app", authMiddleware, getAppByEmail);
route.post("/user/web", authMiddleware, getWebByEmail);


/* ================= ADMIN – INTERN ================= */

route.post("/intern", adminAuthMiddleware, internController);
route.put("/intern/:id", adminAuthMiddleware, adminUpdateIntern);
route.get("/getAllIntern", adminAuthMiddleware, adminGetAllIntern);
route.delete("/intern/delete/:id", adminAuthMiddleware, adminDeleteIntern);

/* ================= ADMIN – APP ================= */

route.post("/app", adminAuthMiddleware, appController);
route.put("/app/:id", adminAuthMiddleware, adminUpdateApp);
route.get("/getAllApp", adminAuthMiddleware, adminGetAllApp);
route.delete("/app/delete/:id", adminAuthMiddleware, adminDeleteApp);

/* ================= ADMIN – WEB ================= */

route.post("/web", adminAuthMiddleware, webController);
route.put("/web/:id", adminAuthMiddleware, adminUpdateWeb);
route.get("/getAllWeb", adminAuthMiddleware, adminGetAllWeb);
route.delete("/web/delete/:id", adminAuthMiddleware, adminDeleteWeb);

export default route;
