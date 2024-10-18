import mongoose from "mongoose";

const wardrobeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    roomWidth: {
      type: Number,
    },
    model: {
      type: String,
    },
    modelPrice: {
      type: Number,
    },
    material: {
      type: String,
    },
    materialPrice: {
      type: Number,
    },
    image: {
      type: String,
    },
    height: {
      type: Number,
    },
    heightPrice: {
      type: Number,
    },
    totalPrice: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Wardrobe = mongoose.model("Wardrobe", wardrobeSchema);
export default Wardrobe;
