import heroImage01 from "../../assets/images/hero-img01.png";
import heroImage02 from "../../assets/images/hero-img02.png";
import heroImage03 from "../../assets/images/hero-img03.png";

const HeroRight = () => {
  return (
    <div className="flex justify-end gap-[30px]">
      <div>
        <img src={heroImage01} alt="" className="w-full" />
      </div>
      <div className="mt-[30px]">
        <img src={heroImage02} alt="" className="w-full mb-[30px]" />
        <img src={heroImage03} alt="" className="w-full" />
      </div>
    </div>
  );
};
export default HeroRight;
