import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Holidays.com</Link>
        </div>
        <div className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Term of Service</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
