import FeatureContent from "./FeatureContent";
import FeatureImg from "./FeatureImg";

const Feature = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <FeatureContent />
          <FeatureImg />
        </div>
      </div>
    </section>
  );
};
export default Feature;
