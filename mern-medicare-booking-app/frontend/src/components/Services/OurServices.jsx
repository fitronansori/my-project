import ServiceList from "./ServiceList";

const OurServices = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our medical Services</h2>
          <p className="text__para text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            tenetur accusantium porro debitis.
          </p>
        </div>

        <ServiceList />
      </div>
    </section>
  );
};
export default OurServices;
