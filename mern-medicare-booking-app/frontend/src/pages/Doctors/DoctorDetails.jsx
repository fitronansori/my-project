import DoctorTab from "../../components/Doctors/DoctorTab";
import SidePanel from "../../components/Doctors/SidePanel";

// File
import doctorImg from "../../assets/images/doctor-img01.png";
import starIcon from "../../assets/images/Star.png";

const DoctorDetails = () => {
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctorImg} alt="" className="w-full h-full" />
              </figure>

              <div>
                <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Surgeon
                </span>

                <h3 className="text-[22px] leading-9 text-headingColor mt-3 font-bold">
                  Dr. Alfaz Ahmed
                </h3>

                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="" />
                    <span>4.8</span>
                  </span>
                  <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                    (272)
                  </span>
                </div>

                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                  voluptate!
                </p>
              </div>
            </div>

            <DoctorTab />
          </div>

          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};
export default DoctorDetails;
