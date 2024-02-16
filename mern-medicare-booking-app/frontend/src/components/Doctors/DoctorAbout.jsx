import { formatDate } from "../../utils/formatedDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          About of
          <span className="text-[24px] leading-9 font-bold text-irisBlueColor">
            {" "}
            Dr. Alfaz Ahmed
          </span>
        </h3>

        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          laudantium cumque assumenda iste! Dignissimos dolor iste vel. Suscipit
          voluptatem, eligendi quam sunt porro voluptate vel quibusdam culpa
          quas, aperiam maxime!
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("2020-12-23")} - {formatDate("2021-06-23")}
              </span>

              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>

            <p className="text-[16px] leading-6 font-medium text-textColor">
              New Appolo Hospital, New York.
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("2021-06-23")} - {formatDate("2022-06-23")}
              </span>

              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>

            <p className="text-[16px] leading-6 font-medium text-textColor">
              New Appolo Hospital, New York.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid md:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("2021-06-23")} - {formatDate("2022-06-23")}
            </span>

            <p className="text-[16px] leading-6 font-medium text-textColor">
              PHD in Surgeon
            </p>

            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Appolo Hospital, New York.
            </p>
          </li>

          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("2021-06-23")} - {formatDate("2022-06-23")}
            </span>

            <p className="text-[16px] leading-6 font-medium text-textColor">
              PHD in Surgeon
            </p>

            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Appolo Hospital, New York.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DoctorAbout;
