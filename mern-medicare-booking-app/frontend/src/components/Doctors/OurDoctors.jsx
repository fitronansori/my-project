import DoctorList from "./DoctorList";

const OurDoctors = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our great doctors</h2>
          <p className="text__para text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            tenetur accusantium porro debitis.
          </p>
        </div>

        <DoctorList />
      </div>
    </section>
  );
};
export default OurDoctors;
