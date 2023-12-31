import Image from "next/image";
import dynamic from "next/dynamic";

const CountDown = dynamic(() => import("@/components/CountDown"), {
  ssr: false,
});

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* Text Container */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6 text-white">
        <h1 className="text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="xl:text-xl">
          Progressively simplify effective e-toilers and process-centric method
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className="bg-red-500 rounded-md py-3 px-6 hover:bg-opacity-80">
          Order Now
        </button>
      </div>
      {/* Image Container */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};
export default Offer;
