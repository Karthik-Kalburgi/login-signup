import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/user.router.js";
import wardrobeRouter from "./routers/wardrobe.router.js";
import cors from "cors";

import dbConnection from "./db/dbConnection.js";
dotenv.config();

const corsOptions = {
  origin: ["http://localhost:5173", "https://login-signup-ebon.vercel.app"], // Add your front-end URLs
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // If you need to allow cookies with requests
};

const app = express();
app.use(express.json({ limit: "50mb" }));

app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(cors(corsOptions));

dbConnection();

app.use("/api/user", userRouter);
app.use("/api/wardrobe", wardrobeRouter);

app.get("/", (req, res) => {
  try {
    res.status(200).json("Welcome to Modulo!");
  } catch (error) {
    res.status(404).json("ROOT_SERVER_ERROR");
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is Running on PORT:", process.env.PORT);
});
