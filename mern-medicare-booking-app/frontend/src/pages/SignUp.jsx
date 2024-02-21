import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios";
import uploadImageCloudinary from "../utils/uploadCloudinary";

// File
import signUpImg from "../assets/images/signup.gif";
import { IoCamera } from "react-icons/io5";
import { BASE_URL } from "../utils/config";

const SignUp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
    gender: "male",
    photo: selectedFile,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    const data = await uploadImageCloudinary(file);

    setPreviewURL(data.url);
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
      await axios.post(`${BASE_URL}/auth/register`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Account created successfully!");

      setLoading(false);

      navigate("/login");
    } catch (error) {
      toast(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="px-5 py-5 lg:py-10 xl:px-0">
        <div className="max-w-[1170px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block bg-primaryColor rounded-l-lg">
              <figure className="rounded-l-lg">
                <img src={signUpImg} alt="" className="w-full rounded-l-lg" />
              </figure>
            </div>

            <div className="rounded-l-lg lg:pl-16 lg:pr-4 py-10 lg:shadow-lg">
              <h3 className="text-[20px] leading-9 text-headingColor font-bold mb-10">
                Create an <span className="text-primaryColor">account</span>
              </h3>

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
                    required
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
                    required
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
                    required
                  />
                </div>

                <div className="mb-5 flex items-center justify-between">
                  <label className="text-headingColor font-bold text-[16px] leading-7">
                    Are you a:
                    <select
                      name="role"
                      id="idRole"
                      className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                      value={formData.role}
                      onChange={handleInputChange}
                    >
                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>
                    </select>
                  </label>

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
                  {previewURL ? (
                    <figure className="w-[50px] h-[50px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                      <img
                        src={previewURL}
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
                      <HashLoader size={35} color="#ffffff" />
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </div>

                <p className="mt-5 text-textColor text-center">
                  Already have an account?
                  <Link
                    to={"/login"}
                    className="text-primaryColor font-medium ml-1"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
