//img
import featuredImg from "@/assets/images/man.png";
//ui
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
//icons
import { IoSearch } from "react-icons/io5";

const Featured = () => {
  return (
    <div className="h-[600px] w-full bg-primary text-primary-foreground">
      <div className="container flex items-center">
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="text-[50px] font-semibold">
            Find the perfect freelance services for your business.
          </h1>

          <div className="flex items-center justify-between bg-white rounded-md">
            <div className="flex items-center flex-[7] pl-1">
              <IoSearch className="h-6 w-6 text-gray-600" />
              <Input
                type="text"
                placeholder='Try "building mobile app"'
                className="h-[38px]"
              />
            </div>
            <Button
              variant={"destructive"}
              className="flex-[0.5] h-[40px] rounded-none"
            >
              Search
            </Button>
          </div>
          <div className="flex">
            <p className="pr-2">Popular:</p>
            <div className="space-x-3 text-[14px]">
              <span className="outline outline-1 py-1 px-2 rounded-xl hover:bg-primary-foreground hover:text-foreground transition-all duration-300 ease-in-out hover:outline-none cursor-pointer">
                Web Design
              </span>
              <span className="outline outline-1 py-1 px-2 rounded-xl hover:bg-primary-foreground hover:text-foreground transition-all duration-300 ease-in-out hover:outline-none cursor-pointer">
                Mobile Development
              </span>
              <span className="outline outline-1 py-1 px-2  rounded-xl hover:bg-primary-foreground hover:text-foreground transition-all duration-300 ease-in-out hover:outline-none cursor-pointer">
                SEO
              </span>
              <span className="outline outline-1 py-1 px-2  rounded-xl hover:bg-primary-foreground hover:text-foreground transition-all duration-300 ease-in-out hover:outline-none cursor-pointer">
                Logo Design
              </span>
              <span className="outline outline-1 py-1 px-2 rounded-xl hover:bg-primary-foreground hover:text-foreground transition-all duration-300 ease-in-out hover:outline-none cursor-pointer">
                Video Editing
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={featuredImg} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Featured;
