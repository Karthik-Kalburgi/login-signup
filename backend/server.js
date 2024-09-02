import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/user.router.js";
import wardrobeRouter from "./routers/wardrobe.router.js";

import dbConnection from "./db/dbConnection.js";
dotenv.config();

const app = express();
app.use(express.json());

dbConnection();

app.use("/api/user/", userRouter);
app.use("/api/wardrobe", wardrobeRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is Running on PORT:", process.env.PORT);
});
