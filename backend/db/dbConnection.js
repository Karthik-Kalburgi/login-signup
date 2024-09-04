import mongoose from "mongoose";

const dbConnection = async() => {
  const DBuri = process.env.MONGO_URI;
  const DBname = process.env.MONGO_URI.split(`/`)[3].split("?")[0]
  await mongoose
    .connect(DBuri)
    .then(() => {
      console.log("Connected to DB -", DBname);
    })
    .catch((err) => {
      console.log("DB connected failed ->", err);
    });
};

export default dbConnection;
