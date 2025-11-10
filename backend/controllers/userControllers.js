import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

// --- API for User Registration ---
const userRegister = async (req, res) => {
  try {

    const {name, email, password} = req.body;

    if(!name || !email || !password) {
      return res.json({
        success: false,
        message: "All fields are required!"
      });
    }

    if(!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Invalid Email"
      });
    }

    const existUser = await userModel.findOne({email});
    if(existUser) {
      return res.json({
        success: false,
        message: "User already exist with this email"
      });
    }

    if(password.length < 8) {
      return res.json({
        success: false,
        message: "Weak Password"
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPass
    };

    const newUser = await userModel(userData);
    const user = await newUser.save();

    const token = await jwt.sign({id: user._id, name: user.name}, process.env.JWT_SECRET);

    res.json({
      success: true,
      message: "Registration Successful!",
      token
    });
    
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    });
  }
};


// --- API for User Login ---
const userLogin = async (req, res) => {
  try {

    const {email, password} = req.body;

    const user = await userModel.findOne({email});
    if(!user) {
      return res.json({
        success: false,
        message: "User does not exist"
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch) {
      return res.json({
        success: false,
        message: "Incorrect Password"
      });
    }

    const token = await jwt.sign({id: user._id, name: user.name}, process.env.JWT_SECRET);

    res.json({
      success: true,
      message: "Login Successful!",
      token
    });
    
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    });
  }
};

export {userRegister, userLogin};