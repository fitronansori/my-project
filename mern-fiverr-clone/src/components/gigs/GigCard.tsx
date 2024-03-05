import { Link } from "react-router-dom";
import { gigs } from "@/constants/data";

// ui
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

// icons
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const GigCard = () => {
  return (
    <section className="flex flex-col items-center sm:justify-center sm:flex-row sm:flex-wrap lg:justify-between gap-5">
      {gigs.map((item) => (
        <Link to={"/gig/123"} key={item.id}>
          <Card className="w-[360px] sm:w-[330px] lg:w-[290px] h-[360px] border border-solid border-gray-300">
            <img
              src={item.img}
              alt=""
              className="w-full h-[50%] object-cover rounded-tl-md rounded-tr-md"
            />

            <div className="py-3 px-4 h-[50%] space-y-1">
              <div className="inline-flex items-center gap-2">
                <img
                  src={item.pp}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover"
                />
                <p className="text-lg font-semibold">{item.username}</p>
              </div>

              <p className="">{item.desc}</p>

              <div className="inline-flex items-center justify-center gap-2">
                <FaStar className="w-5 h-5 text-yellow-400" />
                <p className="text-lg font-semibold text-gray-600">
                  {item.star}
                </p>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <FaHeart className="w-5 h-5 text-gray-300" />
                <div className="inline-flex items-center gap-1 text-[14px]">
                  <span>STARTING AT</span>
                  <h2 className="text-base font-bold">
                    ${item.price}
                    <sup>99</sup>
                  </h2>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </section>
  );
};
export default GigCard;
