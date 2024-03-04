import Featured from "@/components/featured/Featured";
// import Explore from "@/components/features/Explore";
import Features from "@/components/features/Features";
import FeaturesDark from "@/components/features/FeaturesDark";
import CategorySlider from "@/components/slider/CategorySliders";
import ProductSliders from "@/components/slider/ProductSliders";
import TrustedBy from "@/components/trusted/TrustedBy";

const Home = () => {
  return (
    <>
      <Featured />
      <TrustedBy />
      <CategorySlider />
      <Features />
      {/* <Explore /> */}
      <FeaturesDark />
      <ProductSliders />
    </>
  );
};
export default Home;
