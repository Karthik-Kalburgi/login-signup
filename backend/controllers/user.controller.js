import User from "../models/User.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
   
    const checkUser = await User.findOne({email:email});
    
    if (!checkUser)
      // If User not found
      return res.status(201).json({ error: true, message: "User not found" });

    // Checking password
    const checkPassword = bcryptjs.compareSync(password, checkUser.password);
    if (!checkPassword)
      return res
        .status(404)
        .json({ error: true, message: "Credentials dont match" });

    // Removing Password from the Response
    const { password: removingPassword, ...rest } = checkUser._doc;
    const token = jwt.sign(
      { userId: checkUser._id, user: rest },
      process.env.JWT_SECRET
    );

    return res
      .cookie("auth_token", token, { httpOnly: true })
      .status(200)
      .json({
        error: false,
        message: "Login Success",
        user: rest,
      });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: true, message: "Internal Server Error" });
  }
};

export const registerUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password, mobile } = req.body;
    const alreadyUserRegistered = await User.findOne({
      $or: [{ email }, { name }],
    });

    if (alreadyUserRegistered) {
      return res
        .status(201)
        .json({ error: true, message: "User already registered" });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
      email,
      name,
      mobile,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return res
      .status(200)
      .json({ error: false, message: "Register Success", data: savedUser });
  } catch (error) {
    console.log(error);
    return res
      .status(201)
      .json({ error: true, message: "Internal Server Error" });
  }
};

export const signout = async (req, res) => {
  try {
    res
      .clearCookie("auth_token")
      .status(200)
      .json({ error: false, message: "Signout Success" });
  } catch (error) {
    console.log(error);
    res.status(201).json({ error: true, message: "Signout Success" });
  }
};
