import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to DB -", process.env.MONGO_URI.split(`/`)[3]);
    })
    .catch((err) => {
      console.log("DB connected failed ->", err);
    });
};

export default dbConnection;
