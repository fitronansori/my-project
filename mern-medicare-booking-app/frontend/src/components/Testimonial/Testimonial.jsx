import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">What our patients say</h2>
          <p className="text__para text-center">
            World-class care for everyone. Our health System offers unmatched,
            expert health care.
          </p>
        </div>

        <TestimonialSlider />
      </div>
    </section>
  );
};
export default Testimonial;
