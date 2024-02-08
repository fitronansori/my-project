const HeroCounter = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start mt-[30px] lg:mt-[70px] gap-5 lg:gap-[30px]">
      <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-start gap-1">
        <h2 className="text-[36px] lg:text-[44px] leading-[56px] lg:leading-[54px] font-[700] text-headingColor">
          30+
        </h2>
        <span className="w-[80px] md:w-[100px] h-1 md:h-2 bg-yellowColor rounded-full block mt-[-12px]"></span>
        <p className="text__para">Years of Experience</p>
      </div>

      <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-start gap-1">
        <h2 className="text-[36px] lg:text-[44px] leading-[56px] lg:leading-[54px] font-[700] text-headingColor">
          15+
        </h2>
        <span className="w-[80px] md:w-[100px] h-1 md:h-2 bg-purpleColor rounded-full block mt-[-12px]"></span>
        <p className="text__para">Clinic Location</p>
      </div>

      <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-start gap-1">
        <h2 className="text-[36px] lg:text-[44px] leading-[56px] lg:leading-[54px] font-[700] text-headingColor">
          100%
        </h2>
        <span className="w-[100px] lg:w-[120px] h-1 md:h-2 bg-irisBlueColor rounded-full block mt-[-12px]"></span>
        <p className="text__para">Patient Satisfaction</p>
      </div>
    </div>
  );
};
export default HeroCounter;
