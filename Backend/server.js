import express from "express";
import 'dotenv/config';
import db from "./util/db.js";
import cors from "cors";
import userRoute from "./routes/user.js";
import adminRoute from "./routes/admin.js";
import paymentRoute from "./routes/payment.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", userRoute);
app.use("/admin", adminRoute);
app.use("/payment", paymentRoute);

db();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("working");
})

app.listen(port, () => {
    console.log(`server is running on port:- http://localhost:${port}`);
})