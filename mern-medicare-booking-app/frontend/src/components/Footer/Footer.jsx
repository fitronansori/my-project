import { Link } from "react-router-dom";

// file
import Logo from "../../assets/images/logo.png";
import {
  quickLinks01,
  quickLinks02,
  quickLinks03,
} from "../../constants/Links";

import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";

const socialLinks = [
  {
    path: "/",
    Icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "/",
    Icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "/",
    Icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "/",
    Icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-10 pt-10">
      <div className="container">
        <div className="flex flex-col justify-between md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={Logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright &copy; {currentYear} developed by Fitron Ansori all
              right reserved.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.Icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>

            <ul>
              {quickLinks01.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>

            <ul>
              {quickLinks02.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>

            <ul>
              {quickLinks03.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
