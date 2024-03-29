import { services } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";

const Services = () => {
  return (
    <section>
      <div className="contaier">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {services.map((item, index) => (
            <ServiceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
