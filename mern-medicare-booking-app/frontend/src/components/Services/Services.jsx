import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

// File
import icon01 from "../../assets/images/icon01.png";
import icon02 from "../../assets/images/icon02.png";
import icon03 from "../../assets/images/icon03.png";

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center">
            Providing the best medical services
          </h2>
          <div className="text__para text-center">
            World-class care for everyone. Our health System offers unmatched,
            expert health care.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          <div className="lg:py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon01} alt="" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a Doctor
              </h2>
              <p className="text__para leading-7 text-textColor font-[400] mt-4 text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                tempore doloremque sed Nulla, tempore ipsum.
              </p>
              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none mt-1"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="lg:py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon02} alt="" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a Location
              </h2>
              <p className="text__para leading-7 text-textColor font-[400] mt-4 text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                tempore doloremque sed Nulla, tempore ipsum.
              </p>
              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none mt-1"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="lg:py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon03} alt="" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Book Appointment
              </h2>
              <p className="text__para leading-7 text-textColor font-[400] mt-4 text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                tempore doloremque sed Nulla, tempore ipsum.
              </p>
              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none mt-1"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
