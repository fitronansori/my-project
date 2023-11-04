import { Article, Profile } from "../../constants/images";
import PropTypes from "prop-types";
import { BsCheck } from "react-icons/bs";

const ArticleCard = ({ style }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ${style}`}
    >
      <img
        src={Article}
        alt="article"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl text-blue-dark md:text-2xl lg:text-2xl">
          Future of Work
        </h2>
        <p className="text-light mt-3 text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, alias.
        </p>
        <div className="flex justify-between items-center flex-wrap mt-6">
          <div className="flex items-center gap-x-2 md:gap-2.5">
            <img
              src={Profile}
              alt="profile image"
              className="w-9 h-9 md:w-10 md:h-10"
            />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-blue-dark text-sm md:text-base">
                Fitron Ansori
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-green-400 w-fit rounded-full bg-opacity-20 p-1">
                  <BsCheck className="h-6 w-6 text-blue-dark" />
                </span>
                <span className="italic text-light text-xs md:text-base">
                  Verified Writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-light italic text-sm">02 May</span>
        </div>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  style: PropTypes.string,
};

export default ArticleCard;
