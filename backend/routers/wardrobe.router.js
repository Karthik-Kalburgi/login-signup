import express from "express";
import {saveToCart} from "../controllers/cart.controller.js"

const router = express.Router();

router.post("/save", saveToCart );

export default router;
