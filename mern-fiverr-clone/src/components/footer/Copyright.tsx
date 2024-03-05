import Twitter from "@/assets/images/twitter.png";
import Facebook from "@/assets/images/facebook.png";
import Linkedin from "@/assets/images/linkedin.png";
import Pinterest from "@/assets/images/pinterest.png";
import Instagram from "@/assets/images/instagram.png";
import Language from "@/assets/images/language.png";
import Coin from "@/assets/images/coin.png";
import Accessibility from "@/assets/images/accessibility.png";

const Copyright = () => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row justify-between py-2">
      <div className="flex items-center justify-center gap-2">
        <h2 className="text-2xl font-bold">
          Fiverr<span className="text-[#1dbf73]">.</span>
        </h2>
        <span className="text-lg text-gray-600">
          © Fiverr International Ltd.
          {new Date().getFullYear()}
        </span>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="flex gap-4">
          <img src={Twitter} alt="" className="h-6 w-6 cursor-pointer" />
          <img src={Facebook} alt="" className="h-6 w-6 cursor-pointer" />
          <img src={Linkedin} alt="" className="h-6 w-6 cursor-pointer" />
          <img src={Pinterest} alt="" className="h-6 w-6 cursor-pointer" />
          <img src={Instagram} alt="" className="h-6 w-6 cursor-pointer" />
        </div>
        <div className="hidden md:flex gap-2 text-md text-gray-600 hover:text-foreground cursor-pointer">
          <img src={Language} alt="" className="h-6 w-6 cursor-pointer" />
          <span>English</span>
        </div>
        <div className="hidden md:flex gap-2 text-md text-gray-600 hover:text-foreground cursor-pointer">
          <img src={Coin} alt="" className="h-6 w-6 cursor-pointer" />
          <span>USD</span>
        </div>
        <img
          src={Accessibility}
          alt=""
          className="h-6 w-6 cursor-pointer hidden md:block"
        />
      </div>
    </div>
  );
};
export default Copyright;
