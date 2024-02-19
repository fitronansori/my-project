import express from "express";

// user controller
import {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { authenicateUser, restrictTo } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authenicateUser, restrictTo(["admin"]), getAllUsers);
router.get(
  "/:id",
  authenicateUser,
  restrictTo(["patient", "admin"]),
  getSingleUser
);
router.put(
  "/:id",
  authenicateUser,
  restrictTo(["patient", "admin"]),
  updateUser
);
router.delete("/:id", authenicateUser, restrictTo(["patient"]), deleteUser);

export default router;
