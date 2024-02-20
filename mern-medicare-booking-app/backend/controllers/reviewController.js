import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

// @desc    Get all reviews
// @route   GET /api/v1/reviews
// @access  Public

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();

    res.status(200).json({
      success: true,
      message: "All reviews",
      data: reviews,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "No reviews found",
    });
  }
};

// @desc    Create a review
// @route   POST /api/v1/reviews
// @access  Private

export const createReview = async (req, res) => {
  // check if the doctor exists
  if (!req.body.doctor) {
    req.body.doctor = req.params.doctorId;
  }

  // check if the user exists
  if (!req.body.user) {
    req.body.user = req.userId;
  }

  const newReview = new Review(req.body);

  try {
    const savedReview = await newReview.save();

    // add the review to the doctor's reviews array
    await Doctor.findByIdAndUpdate(req.params.doctorId, {
      $push: { reviews: savedReview._id },
    });

    res.status(200).json({
      success: true,
      message: "Review created successfully",
      data: savedReview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Review not created",
    });
  }
};
