import featureImg from "../../assets/images/feature-img.png";
import videoIcon from "../../assets/images/video-icon.png";
import avatarIcon from "../../assets/images/avatar-icon.png";

const FeatureImg = () => {
  return (
    <div className="relative xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 z-10">
      <img src={featureImg} alt="" />

      <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] z-10 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px] lg:gap-3">
            <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
              Tue, 24
            </p>
            <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
              10:00 AM
            </p>
          </div>

          <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:[9px]">
            <img src={videoIcon} alt="" />
          </span>
        </div>

        <div className="w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full text-center">
          Consultation
        </div>

        <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
          <img src={avatarIcon} alt="" />
          <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
            Fitron Ansori
          </h4>
        </div>
      </div>
    </div>
  );
};
export default FeatureImg;
