import { useState } from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Header />

      <section className="px-5 lg:px-0">
        <div className="w-full max-w-[570px] mx-auto rounded-md md:shadow-lg md:p-10">
          <h2 className="text-[20px] leading-9 text-headingColor font-bold mb-10">
            Hello there! <span className="text-primaryColor">Welcome</span>
          </h2>

          <form action="" className="py-4 md:py-0">
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
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-primaryColor text-white text-[22px] leading-[30px] rounded-lg px-4 py-3"
              >
                Login
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
