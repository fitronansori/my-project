// icons
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "../ui/button";

const FeaturesDark = () => {
  return (
    <div className="bg-[#0d084d] text-primary-foreground py-10 lg:py-14">
      <div className="container flex flex-col lg:flex-row gap-10">
        <div className="flex-1 space-y-5">
          <h1 className="text-2xl font-semibold">
            Fiverr <i className="font-normal">business</i>
          </h1>

          <h1 className="text-xl lg:text-2xl font-semibold">
            A business solution designed for <br />
            <i className="font-normal">teams</i>
          </h1>
          <p>
            Upgrade to a curated experience packed with tools and benefits,{" "}
            <br />
            dedicated to businesses
          </p>
          <div className="inline-flex items-center gap-2">
            <FaCheckCircle className="text-gray-600" />
            Connect to freelancers with proven business experience
          </div>

          <div className="inline-flex items-center gap-2">
            <FaCheckCircle className="text-gray-600" />
            Get matched with the perfect talent by a customer success manager
          </div>

          <div className="inline-flex items-center gap-2">
            <FaCheckCircle className="text-gray-600" />
            Manage teamwork and boost productivity with one powerful workspace
          </div>

          <div>
            <Button>Explore Liverr Business</Button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default FeaturesDark;
