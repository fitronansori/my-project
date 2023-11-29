import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// Import routes
import userRoutes from "./routes/userRoute.js";

// Import database connection
import connectDB from "./config/dbConfig.js";

// Import environment variables
dotenv.config();

// Set port
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Initialize express server
const app = express();

// Enable express middleware
app.use(express.json()); // Allows us to accept JSON data in the body
app.use(cookieParser()); // Allows us to parse cookie data
app.use(express.urlencoded({ extended: true })); // Allows us to accept form data

// user routes
app.use("/api/users", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
