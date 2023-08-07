import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import { BiLogoJavascript, BiLogoPhp } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import Image from "../assets/image.png";

const Hero = () => {
  return (
    <div className="hero container mx-auto px-4 flex h-[calc(100vh-110px)] items-center">
      <div
        className="left
        flex-1
        flex
        flex-col
        justify-center
        items-start
        space-y-4
        h-full
        gap-4
        "
      >
        <h1
          className="
        text-5xl
        font-bold
        "
        >
          Hi, I&apos;m Fitron Ansori
        </h1>
        <p
          className="
        text-2xl
        font-medium
        text-gray-500
        "
        >
          I&apos;m a Full-Stack Web Developer
        </p>

        <div className="tools">
          <div
            className="flex justify-between items-center space-x-4
            text-4xl
            text-gray-500
            w-96
          "
          >
            <FaHtml5 />
            <FaCss3 />
            <BiLogoJavascript />
            <BiLogoPhp />
            <FaReact />
            <FaLaravel />
            <FaNodeJs />
            <SiMysql />
          </div>
        </div>

        <div className="buttons flex space-x-4">
          <a
            href="#"
            className="
                font-medium
                bg-green-500
                px-4
                py-2
                rounded
                hover:scale-[1.05]
                hover:bg-green-600
                hover:text-gray
                transition
                duration-300
                ease
                shadow-md
                "
          >
            Contact Me
          </a>
          <a
            href="#"
            className="
                font-medium
                bg-gray-500
                px-4
                py-2
                rounded
                hover:scale-[1.05]
                hover:bg-gray-600
                hover:text-gray
                transition
                duration-300
                ease
                shadow-md
                "
          >
            See My Work
          </a>
        </div>
      </div>
      <div className="right flex-1">
        <img
          src={Image}
          alt="hero"
          className="w-full h-[calc(100vh-110px)] object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;
