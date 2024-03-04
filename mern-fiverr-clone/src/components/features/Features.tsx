// icons
import { FaCheckCircle } from "react-icons/fa";

import Video from "../../assets/images/video.mp4";

const Features = () => {
  return (
    <section className="bg-[#f1fdf7] py-10 lg:py-28">
      <div className="container flex flex-col lg:flex-row gap-5">
        <div className="flex-1 space-y-2">
          <h1 className="text-2xl lg:text-[35px] lg:leading-[35px] text-center lg:text-start font-bold">
            A whole world of freelance talent at your fingertips
          </h1>

          <div>
            <div className="inline-flex items-center gap-2 font-semibold">
              <FaCheckCircle className="text-primary" />
              <span>The best for every budget</span>
            </div>

            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              illo enim. Omnis exercitationem sed perspiciatis.
            </p>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 font-semibold">
              <FaCheckCircle className="text-primary" />
              <span>Quality work done quickly</span>
            </div>

            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              illo enim. Omnis exercitationem sed perspiciatis.
            </p>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 font-semibold">
              <FaCheckCircle className="text-primary" />
              <span>Protected payments, every time</span>
            </div>

            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              illo enim. Omnis exercitationem sed perspiciatis.
            </p>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 font-semibold">
              <FaCheckCircle className="text-primary" />
              <span>24/7 support</span>
            </div>

            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              illo enim. Omnis exercitationem sed perspiciatis.
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row justify-center items-center">
          <video src={Video} controls className="w-[600px]"></video>
        </div>
      </div>
    </section>
  );
};
export default Features;
