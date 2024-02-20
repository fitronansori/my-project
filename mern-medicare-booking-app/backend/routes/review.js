import express from "express";

// review controller
import {
  createReview,
  getAllReviews,
} from "../controllers/reviewController.js";

import { authenicateUser, restrictTo } from "../middleware/authMiddleware.js";

const router = express.Router({
  mergeParams: true, // to access the doctorId from the doctor route
});

router
  .route("/")
  .get(getAllReviews)
  .post(authenicateUser, restrictTo(["patient", "admin"]), createReview);

export default router;
