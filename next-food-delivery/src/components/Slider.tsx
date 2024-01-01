"use client";

import Image from "next/image";
import { SliderData } from "@/constants/SliderData";
import { useEffect, useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SliderData.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col bg-fuchsia-50 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* Text */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 text-red-500 font-bold">
        <h1 className="text-4xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {SliderData[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-6 px-8 rounded-md">
          Order Now
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 w-full relative">
        <Image
          src={SliderData[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};
export default Slider;
