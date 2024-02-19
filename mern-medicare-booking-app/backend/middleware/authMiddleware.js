import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";

export const authenicateUser = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;
    req.role = decoded.role;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

export const restrictTo = (roles) => async (req, res, next) => {
  try {
    const userId = req.userId;

    let user = null;

    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if (patient) {
      user = patient;
    }

    if (doctor) {
      user = doctor;
    }

    if (!roles.includes(user.role)) {
      return res.status(403).json({ message: "You are not allowed" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error, Try again" });
  }
};
