import Wardrobe from "../models/Wardrobe.model.js"

export const saveToCart = async(req, res) => {
  try {
    console.log(req.body);
    const {cupboardLength, cupboardWidth1, cupboardWidth2, material} = req.body;
    const newCart = await Wardrobe.create({cupboardLength,cupboardWidth1,cupboardWidth2, material})
    newCart.save();
    console.log(newCart)
    res.status(200).json({ error: false, message: "Saved" });
  } catch (error) {
    res
      .status(404)
      .json({ message: "SERVER_ERROR_WARDROBE_SAVE", error: true });
  }
}