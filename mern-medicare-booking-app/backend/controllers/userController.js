import User from "../models/UserSchema.js";

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

export { getAllUsers, getSingleUser, updateUser, deleteUser };
