import mongoose from "mongoose";

const wardrobeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    roomWidth: {
      type: Boolean,
    },
    model: {
      type: String,
    },
    material: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Wardrobe = mongoose.model("Wardrobe", wardrobeSchema);
export default Wardrobe;
