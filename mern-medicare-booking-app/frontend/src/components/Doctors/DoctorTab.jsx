import { useState } from "react";
import DoctorFeedback from "./DoctorFeedback";
import DoctorAbout from "./DoctorAbout";

const DoctorTab = () => {
  const [tab, setTab] = useState("about");
  return (
    <>
      <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
        <button
          onClick={() => setTab("about")}
          className={`py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold
        ${tab === "about" && "border-b border-solid border-primaryColor"}`}
        >
          About
        </button>

        <button
          onClick={() => setTab("feedback")}
          className={`py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold
        ${tab === "feedback" && "border-b border-solid border-primaryColor"}`}
        >
          Feedback
        </button>
      </div>

      <div className="mt-[50px]">
        {tab === "about" && <DoctorAbout />}
        {tab === "feedback" && <DoctorFeedback />}
      </div>
    </>
  );
};

export default DoctorTab;
