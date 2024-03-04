//img
import featuredImg from "@/assets/images/man.png";
//ui
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
//icons
import { IoSearch } from "react-icons/io5";

const Featured = () => {
  return (
    <div className="lg:h-[600px] w-full bg-primary text-primary-foreground">
      <div className="container py-5 md:pt-0 flex flex-col lg:flex-row gap-8">
        <div className="left lg:flex-1 flex flex-col justify-center gap-8">
          <h1 className="text-[40px] lg:text-[50px] font-semibold">
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

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="text-center flex justify-center items-center">
              <p className="font-semibold">Popular Tag:</p>
            </div>
            <div className="text-[14px] flex flex-wrap justify-center gap-4">
              <span className="outline outline-1 py-1 px-2 rounded-xl hover:bg-primary-foreground hover:text-foreground transition-all duration-300 ease-in-out hover:outline-none cursor-pointer">
                Web Design
              </span>
              <span className="outline outline-1 py-1 px-2 rounded-xl hover:bg-primary-foreground hover:text-foreground transition-all duration-300 ease-in-out hover:outline-none cursor-pointer">
                Mobile Development
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

        <div className="right hidden lg:block lg:flex-1">
          <img
            src={featuredImg}
            alt=""
            className="w-full h-[600px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default Featured;
