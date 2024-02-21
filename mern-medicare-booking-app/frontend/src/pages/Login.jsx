import { useState } from "react";
import Header from "../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import HashLoader from "react-spinners/HashLoader";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  // const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      const result = response.data;

      dispatch(
        login({
          user: result.data,
          role: result.role,
        })
      );

      toast.success("Login successfully!");

      setLoading(false);

      navigate("/home");
    } catch (error) {
      toast(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="px-5 lg:px-0">
        <div className="w-full max-w-[570px] mx-auto rounded-md md:shadow-lg md:p-10">
          <h2 className="text-[20px] leading-9 text-headingColor font-bold mb-10">
            Hello there! <span className="text-primaryColor">Welcome</span>
          </h2>

          <form className="py-4 md:py-0" onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus-within:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                required
              />
            </div>

            <div className="mb-5">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus-within:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                required
              />
            </div>

            <div className="mt-7">
              <button
                disabled={loading && true}
                type="submit"
                className="w-full bg-primaryColor text-white text-[22px] leading-[30px] rounded-lg px-4 py-3"
              >
                {loading ? <HashLoader size={35} color="#ffffff" /> : "Login"}
              </button>
            </div>

            <p className="mt-5 text-textColor text-center">
              Don&apos;t have an account?
              <Link
                to={"/register"}
                className="text-primaryColor font-medium ml-1"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};
export default Login;
