import { Link } from "react-router-dom";

const FeatureContent = () => {
  return (
    <div className="xl:w-[670px]">
      <h2 className="heading">
        Get virtual treatment <br /> anytime, anywhere.
      </h2>

      <ul className="pl-4">
        <li className="text__para">1. Schedule the appointment directly.</li>
        <li className="text__para">
          2. Search for your physician here, and contact their office.
        </li>
        <li className="text__para">
          3.View our physicians who are accepting new patients, use the online
          scheduling tool to select an appointment time.
        </li>
        <Link to={"/"}>
          <button className="btn">Learn More</button>
        </Link>
      </ul>
    </div>
  );
};
export default FeatureContent;
