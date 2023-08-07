import { FaInstagram, FaGithub } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const Header = () => {
  return (
    <div className="header">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <div className="logo">
            <h1
              className="
                text-2xl
                font-bold
                text-gray-100
                hover:text-gray-300
                transition
                duration-300
                ease-in-out
                cursor-pointer
            "
            >
              Fitron Ansori
            </h1>
          </div>
          <div className="nav">
            <div className="flex justify-between items-center space-x-4">
              <div
                className="
                w-10
                h-10
                bg-[#1c276a]
                rounded-full
                flex
                justify-center
                items-center
                hover:bg-[#26348f]
                cursor-pointer
              "
              >
                <BiLogoLinkedinSquare
                  className="
                text-2xl
                text-gray-100
                "
                />
              </div>
              <div
                className="
                w-10
                h-10
                bg-[#1c276a]
                rounded-full
                flex
                justify-center
                items-center
                hover:bg-[#26348f]
                cursor-pointer
              "
              >
                <FaInstagram
                  className="
                text-2xl
                text-gray-100
                "
                />
              </div>
              <div
                className="
                w-10
                h-10
                bg-[#1c276a]
                rounded-full
                flex
                justify-center
                items-center
                hover:bg-[#26348f]
                cursor-pointer
              "
              >
                <FaGithub
                  className="
                text-2xl
                text-gray-100
                "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
