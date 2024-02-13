import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// file
import patienAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const TestimonialSlider = () => {
  return (
    <div className="mt-30px lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3xl">
            <div className="flex items-center gap-[13px]">
              <img src={patienAvatar} alt="patient-avatar" />

              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>

                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              &quot; I am very happy with the service of the hospital. The
              doctors and nurses are very friendly and helpful. I am very happy
              with the service of the hospital.&quot;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3xl">
            <div className="flex items-center gap-[13px]">
              <img src={patienAvatar} alt="patient-avatar" />

              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>

                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              &quot; I am very happy with the service of the hospital. The
              doctors and nurses are very friendly and helpful. I am very happy
              with the service of the hospital.&quot;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3xl">
            <div className="flex items-center gap-[13px]">
              <img src={patienAvatar} alt="patient-avatar" />

              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>

                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              &quot; I am very happy with the service of the hospital. The
              doctors and nurses are very friendly and helpful. I am very happy
              with the service of the hospital.&quot;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3xl">
            <div className="flex items-center gap-[13px]">
              <img src={patienAvatar} alt="patient-avatar" />

              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>

                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              &quot; I am very happy with the service of the hospital. The
              doctors and nurses are very friendly and helpful. I am very happy
              with the service of the hospital.&quot;
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default TestimonialSlider;
