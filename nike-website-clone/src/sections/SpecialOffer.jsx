import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="max-container flex justify-start items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span>
          <span> Offer</span>
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redifines your experience with
          unbeatable prices and quality products. From Premier selection to
          incredible deals, we have it all.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of endless possibilities designed to fulfill your
          unique desires.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
