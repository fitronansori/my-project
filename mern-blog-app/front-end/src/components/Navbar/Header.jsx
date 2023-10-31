import { Logo } from "../../constants/images";
import Button from "../Button";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="container mx-auto px-5 flex justify-between items-center py-4">
      <div className="">
        <img src={Logo} alt="Logo" className="" />
      </div>

      <div className="flex gap-x-5">
        <NavLinks />
        <Button
          className="border-2 border-blue px-6 py-2 rounded-full text-blue hover:bg-blue hover:text-white transition-all duration-300 ease-in-out"
          label="Sign In"
        />
      </div>
    </header>
  );
};

export default Header;
