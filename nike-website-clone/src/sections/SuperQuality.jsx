import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span>
          <span> Shoes</span>
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium quality for all our products is our top priority.
          We&apos;re always working towards improving our products and services
          to be the best in the industry.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Our dedicated to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11">
          <Button label="View Details" iconURL={arrowRight} />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={570}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
