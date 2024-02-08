import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroSection = () => {
  return (
    <section className="hero__section md:pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-[90px]">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
