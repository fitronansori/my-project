import express from "express";

// user controller
import {
  getAllDoctors,
  getSingleDoctor,
  updateDoctor,
  deleteDoctor,
  queryDoctor,
  getDoctorProfile,
} from "../controllers/doctorController.js";

import { authenicateUser, restrictTo } from "../middleware/authMiddleware.js";

const router = express.Router();

// review routes
import reviewRoutes from "./review.js";

router.use("/:doctorId/reviews", reviewRoutes);

router.get("/", getAllDoctors);
router.get("/search", queryDoctor);
router.get("/:id", getSingleDoctor);
router.put(
  "/:id",
  authenicateUser,
  restrictTo(["doctor", "admin"]),
  updateDoctor
);
router.delete(
  "/:id",
  authenicateUser,
  restrictTo(["doctor", "admin"]),
  deleteDoctor
);

router.get(
  "/profile/me",
  authenicateUser,
  restrictTo(["doctor", "admin"]),
  getDoctorProfile
);

export default router;
