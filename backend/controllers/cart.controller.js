import Wardrobe from "../models/Wardrobe.model.js";

export const saveToCart = async (req, res) => {
  try {
    console.log(req.body);
    const { userId, roomWidth, model, material } = req.body;

    // Find a Cart
    const checkCartExists = await Wardrobe.findOne({ userId });

    if (!checkCartExists) {
      console.log("Cart Doesnt Exist");
      const newCart = await Wardrobe.create({
        userId,
        roomWidth,
        model,
        material,
      });
      newCart.save();
      return res
        .status(200)
        .json({ error: false, message: "Cart Created Success" });
    }

    // Update Cart if it Exists
    console.log("Cart Updating");
    const updateCard = await Wardrobe.findOneAndUpdate({
      roomWidth,
      model,
      material,
    });

    res
      .status(200)
      .json({ error: false, updateCard, message: "Cart Updated Success" });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ message: "SERVER_ERROR_WARDROBE_SAVE", error: true });
  }
};
