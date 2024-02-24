/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios";
import uploadImageCloudinary from "../../utils/uploadCloudinary";
import Cookies from "js-cookie";
import { useUpdateUserMutation } from "../../app/services/usersApi";

// File
import { IoCamera } from "react-icons/io5";
import { BASE_URL } from "../../utils/config";

const Profile = ({ UserData }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [updateUser, result] = useUpdateUserMutation();
  console.log(result);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
    gender: "male",
    photo: selectedFile,
    bloodType: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFormData({
      name: updateUser?.name,
      email: updateUser?.email,
      password: updateUser?.password,
      role: updateUser?.role,
      gender: updateUser?.gender,
      photo: updateUser?.photo,
      bloodType: updateUser?.bloodType,
    });
  }, [updateUser]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    const data = await uploadImageCloudinary(file);

    setSelectedFile(data.url);

    setFormData({
      ...formData,
      photo: data.url,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.put(`${BASE_URL}/users/${UserData._id}`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });

      toast.success("Account created successfully!");

      setLoading(false);

      navigate("/dashboard/user/profile/me");
    } catch (error) {
      toast(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="mt-10 p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus-within:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-5">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus-within:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-5">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus-within:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-5">
          <input
            type="text"
            name="Blood Type"
            id="Blood Type"
            placeholder="Blood Type"
            className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus-within:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
            value={formData.bloodType}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-5 flex items-center justify-between">
          <label
            className="text-headingColor font-bold text-[16px]
                   leading-7"
          >
            Gender:
            <select
              name="gender"
              id="idGender"
              className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>

        <div className="mb5 flex items-center gap-3">
          {formData.photo ? (
            <figure className="w-[50px] h-[50px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img
                src={formData.photo}
                alt=""
                className="w-full h-full rounded-full"
              />
            </figure>
          ) : (
            <figure className="w-[50px] h-[50px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <IoCamera className="w-[30px] h-[30px]" />
            </figure>
          )}

          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="csFile"
              accept=".jpg, .png, .jpeg, .webp"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
            />

            <label
              htmlFor="csFile"
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
            >
              Upload Photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            disabled={loading && true}
            type="submit"
            className="w-full bg-primaryColor text-white text-[22px] leading-[30px] rounded-lg px-4 py-3"
          >
            {loading ? (
              <HashLoader size={25} color="#ffffff" />
            ) : (
              "Update Profile"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Profile;
