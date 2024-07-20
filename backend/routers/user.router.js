import express from "express";
import {
  loginUser,
  registerUser,
  signout,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/signout", signout);

export default router;
