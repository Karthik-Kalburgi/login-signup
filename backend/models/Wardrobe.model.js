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
    material: {
      type: String,
    },
    image: {
      type: String,
    },
    height: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Wardrobe = mongoose.model("Wardrobe", wardrobeSchema);
export default Wardrobe;
