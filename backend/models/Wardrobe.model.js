import mongoose from "mongoose";

const wardrobeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    cupboardLength: {
      type: Boolean,
    },
    cupboardWidth1: {
      type: Number,
    },
    cupboardWidth2: {
      type: Number,
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
