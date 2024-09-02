import mongoose from "mongoose";

const wardrobeSchema = new mongoose.Schema(
  {
    cupboardLength: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Wardrobe = mongoose.model("Wardrobe", wardrobeSchema);
export default Wardrobe;
