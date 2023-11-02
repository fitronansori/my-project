import { useState } from "react";
import { navlinks } from "../../constants/navLinks.js";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavLinks = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => {
      return !curState;
    });
  };
  return (
    <>
      {navlinks.map((link) => (
        <ul
          key={link.id}
          className="flex flex-col lg:flex-row gap-y-5 items-center text-white lg:text-dark-green "
        >
          <li className="relative group cursor-pointer">
            {link.type === "link" ? (
              <a
                href="/"
                className="font-bold lg:text-dark-green hover:text-blue transition-all duration-300 ease-in-out  "
              >
                {link.name}
              </a>
            ) : (
              <div className="flex flex-col items-center">
                <button
                  className="flex gap-x-1 items-center"
                  onClick={toggleDropdownHandler}
                >
                  <span className="font-bold hover:text-blue transition-all duration-300 ease-in-out">
                    {link.name}
                  </span>
                  <MdKeyboardArrowDown />
                </button>

                <div
                  className={`${
                    dropdown ? "block" : "hidden"
                  } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
                >
                  <ul className="bg-dark-green lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                    {link.dropdown.map((page, index) => (
                      <a
                        href="/"
                        key={index}
                        className="px-4 py-2 text-white font-bold lg:text-dark-green hover:text-blue transition-all duration-300 ease-in-out"
                      >
                        {page.name}
                      </a>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
        </ul>
      ))}
    </>
  );
};

export default NavLinks;
