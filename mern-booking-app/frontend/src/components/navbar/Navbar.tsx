import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <div className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Holidays.com</Link>
        </div>
        <div className="flex space-x-2">
          <Link
            to="/sign-in"
            className="flex items-center bg-white text-blue-600 px-3 hover:bg-gray-200 hover:text-blue-700 rounded-md"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="flex items-center bg-white text-blue-600 px-3 hover:bg-gray-200 hover:text-blue-700 rounded-md"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
