import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

// dbConfig
import { connectDB } from "./config/dbConfig.js";

// port
const port = process.env.PORT || 1007;

// routes import
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import doctorRoutes from "./routes/doctor.js";
import reviewRoutes from "./routes/review.js";

const app = express(); // create express app

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};

// middlewares
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());

dotenv.config();

// routes
// auth routes
app.use("/api/v1/auth", authRoutes);

// user routes
app.use("/api/v1/users", userRoutes);

// doctor routes
app.use("/api/v1/doctors", doctorRoutes);

// review routes
app.use("/api/v1/reviews", reviewRoutes);

// listen to the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  connectDB();
});
