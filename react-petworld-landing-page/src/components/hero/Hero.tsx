import { Banner } from "../../constants/image";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="wrapper h-full flex flex-col md:flex-row gap-4">
      {/* Text Container */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start md:w-96 text-center md:text-start gap-10 md:gap-8 ">
        <h1 className="text-6xl font-bold">Pet Store & Beyond</h1>
        <p className="text-lg font-normal lg:w-[450px]">
          This is a sample landing page, created with Figma and Anima. No coding
          involved.
        </p>
        <Button text="Get Started" type="secondary" />
      </div>
      {/* Image Container */}
      <div className="flex-1 w-full flex justify-center items-start md:items-center">
        <img src={Banner.Dog1} alt="" className="" />
      </div>
    </section>
  );
};
export default Hero;
