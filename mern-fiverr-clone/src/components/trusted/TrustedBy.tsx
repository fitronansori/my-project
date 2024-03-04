const TrustedBy = () => {
  return (
    <section className="h-[100px] bg-[#fafafa] flex justify-center">
      <div className="container md:max-w-3xl flex flex-col md:flex-row items-center justify-center md:gap-5">
        <span className="font-bold text-gray-400">Trusted by:</span>
        <div className="flex gap-5">
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"
            alt=""
            className="h-10 w-10 lg:h-14 lg:w-14 object-contain"
          />
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
            alt=""
            className="h-10 w-10 lg:h-14 lg:w-14 object-contain"
          />
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
            alt=""
            className="h-10 w-10 lg:h-14 lg:w-14 object-contain"
          />
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
            alt=""
            className="h-10 w-10 lg:h-14 lg:w-14 object-contain"
          />
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
            alt=""
            className="h-10 w-10 lg:h-14 lg:w-14 object-contain"
          />
        </div>
      </div>
    </section>
  );
};
export default TrustedBy;
