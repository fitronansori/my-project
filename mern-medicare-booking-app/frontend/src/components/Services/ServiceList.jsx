import ServiceCard from "./ServiceCard";

// File
import { services } from "../../assets/data/services";

const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {services.map((item, index) => (
        <ServiceCard key={index} item={item} index={index} />
      ))}
    </div>
  );
};
export default ServiceList;
