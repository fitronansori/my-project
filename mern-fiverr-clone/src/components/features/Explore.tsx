import { Separator } from "../ui/separator";

const Explore = () => {
  return (
    <div className="explore py-10 lg:py-28">
      <div className="container">
        <h1 className="text-2xl text-center lg:text-start">
          Explore the marketplace
        </h1>
        <div className="w-full flex flex-col sm:flex-row sm:flex-wrap items-center justify-center 2xl:justify-between">
          <div className="w-[250px] h-[150px] flex flex-col items-center justify-center gap-3 cursor-pointer">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <Separator />
            <span className="font-light">Graphics & Design</span>
          </div>
          <div className="w-[250px] h-[150px] flex flex-col items-center justify-center gap-3 cursor-pointer">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <Separator />

            <span className="font-light">Digital Marketing</span>
          </div>
          <div className="w-[250px] h-[150px] flex flex-col items-center justify-center gap-3 cursor-pointer">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <Separator />
            <span className="font-light">Writing & Translation</span>
          </div>
          <div className="w-[250px] h-[150px] flex flex-col items-center justify-center gap-3 cursor-pointer">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <Separator />
            <span className="font-light">Video & Animation</span>
          </div>
          <div className="w-[250px] h-[150px] flex flex-col items-center justify-center gap-3 cursor-pointer">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <Separator />
            <span className="font-light">Music & Audio</span>
          </div>
          <div className="w-[250px] h-[150px] flex flex-col items-center justify-center gap-3 cursor-pointer">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <Separator />
            <span className="font-light">Programming & Tech</span>
          </div>
          <div className="w-[250px] h-[150px] flex flex-col items-center justify-center gap-3 cursor-pointer">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <Separator />
            <span className="font-light">Business</span>
          </div>
          <div className="w-[250px] h-[150px] flex flex-col items-center justify-center gap-3 cursor-pointer">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <Separator />
            <span className="font-light">Lifestyle</span>
          </div>
          <div className="w-[250px] h-[150px] flex flex-col items-center justify-center gap-3 cursor-pointer">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <Separator />
            <span className="font-light">Data</span>
          </div>
          <div className="w-[250px] h-[150px] flex flex-col items-center justify-center gap-3 cursor-pointer">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <Separator />
            <span className="font-light">Photography</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Explore;
