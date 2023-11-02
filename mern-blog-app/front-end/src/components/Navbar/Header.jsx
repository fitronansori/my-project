import { useCallback, useEffect, useState } from "react";
import { Logo } from "../../constants/images";
import Button from "../Button";
import NavLinks from "./NavLinks";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navToggle = () => {
    setVisible((prevVisible) => (prevVisible = !prevVisible));
  };

  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section
      className={`sticky left-0 top-0 z-50 ${
        scrolled ? "bg-white border-b-2" : "bg-transparent"
      }`}
    >
      <header className="container mx-auto px-5 flex justify-between items-center py-4">
        <div className="">
          <img src={Logo} alt="Logo" className="h-5 sm:h-7" />
        </div>

        <button className="lg:hidden z-50">
          {!visible ? (
            <BiMenuAltRight
              className="text-2xl text-blue-dark"
              onClick={navToggle}
            />
          ) : (
            <AiOutlineClose
              className="text-2xl text-blue-dark"
              onClick={navToggle}
            />
          )}
        </button>

        <div
          className={`w-full lg:w-auto mt-[60px] lg:mt-0 flex flex-col justify-center items-center lg:justify-end lg:flex-row fixed bottom-0 top-0 lg:static gap-x-9 gap-y-6 z-[49] bg-blue-dark lg:bg-transparent transition-all duration-300 ease-in-out
        ${visible ? "right-0" : "-right-full"}
        `}
        >
          <NavLinks />
          <Button
            className="border-2 border-blue px-6 py-2 rounded-full w-fit text-white font-bold bg-blue lg:bg-transparent lg:text-blue hover:scale-110 lg:hover:bg-blue hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
            label="Sign In"
          />
        </div>
      </header>
    </section>
  );
};

export default Header;
