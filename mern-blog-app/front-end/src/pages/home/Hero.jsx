import Button from "../../components/Button";
import { HeroImg } from "../../constants/images";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="container mx-auto p-5 flex flex-col lg:flex-row max-h-screen">
      <div className="left mt-10 lg:w-1/2">
        <div className="flex justify-center items-center lg:justify-start">
          <h1 className="font-roboto text-4xl text-center font-bold text-blue-dark md:text-5xl lg:text-5xl xl:text-6xl lg:text-start lg:max-w-[500px]">
            Read the most interesting articles
          </h1>
        </div>
        <div className="flex justify-center items-center lg:justify-start">
          <p className="text-light lg:text-blue-dark mt-4 lg:mt-6 xl:mt-10 text-center sm:text-xl lg:text-start md:max-w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="relative flex flex-col gap-y-2.5 mt-10">
          <div className="relative">
            <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              type="text"
              className="placeholder:font-bold font-semibold text-blue-dark placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full focus:outline-none shadow-2xl shadow-blue-500/20 py-3 sm:py-4"
              placeholder="Search for any topic"
            />
          </div>
          <Button
            label="Search"
            className={`w-full bg-blue text-white font-semibold rounded-lg px-5 py-3 sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2 sm:w-fit md:py-2`}
          />
        </div>

        <div className="w-full flex flex-col lg:justify-start lg:items-center lg:flex-row lg:flex-nowrap lg: mt-4 lg:mt-7">
          <p className="text-light font-semibold italic mt-2 sm:mt-3 sm:mr-3">
            Popular Tags :{" "}
          </p>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3">
            <li className="rounded-lg bg-blue bg-opacity-10 px-3 py-1.5 text-blue font-semibold italic">
              Design
            </li>
            <li className="rounded-lg bg-blue bg-opacity-10 px-3 py-1.5 text-blue font-semibold italic">
              Development
            </li>
            <li className="rounded-lg bg-blue bg-opacity-10 px-3 py-1.5 text-blue font-semibold italic">
              Marketing
            </li>
          </ul>
        </div>
      </div>
      <div className="right hidden lg:block lg:w-1/2">
        <img src={HeroImg} alt="hero img" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
