import HeroCounter from "./HeroCounter";

const HeroLeft = () => {
  return (
    <div>
      <div className="lg:w-[570px] flex flex-col items-center justify-center lg:items-start text-center lg:text-start">
        <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
          We help patients live a healty, longer life
        </h1>
        <p className="text__para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ea
          expedita praesentium adipisci voluptates dolore! Veniam expedita
          explicabo ratione facere molestiae dignissimos aliquid dolorum.
        </p>
        <button className="btn">Request an Appointment </button>
      </div>

      <HeroCounter />
    </div>
  );
};
export default HeroLeft;
