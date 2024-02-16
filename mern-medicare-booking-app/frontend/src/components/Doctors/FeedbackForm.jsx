/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = ({ setShowFeedback }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ rating, feedback });
    setShowFeedback(false);
  };

  return (
    <form action="">
      <div>
        <h3 className="text16px leading-6 text-headingColor font-semibold mb-4">
          How would you rate your experience?
        </h3>

        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= ((hover && rating) || hover)
                    ? "text-yellow-400"
                    : "text-gray-300"
                } bg-transparent border-none outline-none text-[30px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setRating(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text16px leading-6 text-headingColor font-semibold mb-4">
          Share your feedback and suggestions
        </h3>

        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
          rows={4}
          placeholder="Write your message ..."
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
      </div>

      <button type="submit" onClick={handleSubmit} className="btn">
        Submit FeedBack
      </button>
    </form>
  );
};
export default FeedbackForm;
