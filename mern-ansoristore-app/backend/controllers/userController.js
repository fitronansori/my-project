import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/createToken.js";

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).send("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    const createUser = await user.save();
    generateToken(res, createUser._id);

    res.status(201).json({
      _id: createUser._id,
      username: createUser.username,
      email: createUser.email,
      isAdmin: createUser.isAdmin,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect) {
      generateToken(res, user._id);

      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      });

      return; // exit function
    } else {
      res.status(400);
      throw new Error("Invalid email or password");
    }
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    message: "User logged out",
  });
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  res.json(users);
});

export { createUser, loginUser, logoutUser, getAllUsers };
