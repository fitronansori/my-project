import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwtToken.js";

const register = async (req, res) => {
  try {
    const { name, email, password, role, photo, gender } = req.body;

    let user = null;

    if (role === "patient") {
      user = await User.findOne({ email });
    }

    if (role === "doctor") {
      user = await Doctor.findOne({ email });
    }

    // check if user already exists
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    if (role === "patient") {
      user = new User({
        name,
        email,
        password: hashedPassword,
        role,
        gender,
        photo,
      });
    }

    if (role === "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashedPassword,
        role,
        gender,
        photo,
      });
    }

    await user.save(); // save user to db

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error, Try again" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = null;

    const patient = await User.findOne({ email });
    const doctor = await Doctor.findOne({ email });

    if (patient) {
      user = patient;
    }

    if (doctor) {
      user = doctor;
    }

    // check if user not exist
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // check if password is correct
    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // generate token
    const token = generateToken(user._id);

    // send user info and token
    const { password: userPassword, role, appointments, ...others } = user._doc;

    // set token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      // secure: true,
      sameSite: "none",
    });

    res
      .status(200)
      .json({ message: "Login successful", token, data: { ...others }, role });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error, Try again" });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error, Try again" });
  }
};

export { register, login, logout };
