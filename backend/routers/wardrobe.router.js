import express from "express";

const router = express.Router();

router.post("/save", (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({ error: false, message: "Saved" });
  } catch (error) {
    res
      .status(404)
      .json({ message: "SERVER_ERROR_WARDROBE_SAVE", error: true });
  }
});

export default router;
