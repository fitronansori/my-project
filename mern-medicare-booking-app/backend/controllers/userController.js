import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({ message: "All users", data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error, Try again" });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select("-password");

    res.status(200).json({ message: "User found", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `User not found with id ${id}` });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    }).select("-password");

    res
      .status(200)
      .json({ message: "Successfully updated", data: updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete" });
  }
};

const getUserProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User profile getting", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error, Try again" });
  }
};

const getMyAppointments = async (req, res) => {
  try {
    // get retrieve appointments from booking
    const bookings = await Booking.find({ user: req.userId });

    // extract doctor ids from bookings
    const doctorIds = bookings.map((booking) => booking.doctor.id);

    // retrieve doctors from doctor ids
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      -"password",
    );

    res.status(200).json({ message: "My appointments", data: doctors });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error, Try again" });
  }
};

export {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  getUserProfile,
  getMyAppointments,
};
