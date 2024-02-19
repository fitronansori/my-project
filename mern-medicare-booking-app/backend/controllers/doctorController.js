import Doctor from "../models/DoctorSchema.js";

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({ isApproved: "approved" }).select(
      "-password"
    );

    res.status(200).json({ message: "All Doctors", data: doctors });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error, Try again" });
  }
};

const getSingleDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await Doctor.findById(id).select("-password");

    res.status(200).json({ message: "Doctor found", data: doctor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Doctor not found with id ${id}` });
  }
};

const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, {
      new: true,
    }).select("-password");

    if (!updatedDoctor) {
      return res.status(404).json({ message: `User not found with id ${id}` });
    }

    res
      .status(200)
      .json({ message: "Successfully updated", data: updatedDoctor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update" });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    await Doctor.findByIdAndDelete(id);

    res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete" });
  }
};

const queryDoctor = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Query is required" });
    }

    const doctors = await Doctor.find({
      isApproved: "approved",
      $or: [
        { name: { $regex: query, $options: "i" } },
        { specialization: { $regex: query, $options: "i" } },
      ],
    }).select("-password");

    res.status(200).json(doctors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error, Try again" });
  }
};

export {
  getAllDoctors,
  getSingleDoctor,
  updateDoctor,
  deleteDoctor,
  queryDoctor,
};
