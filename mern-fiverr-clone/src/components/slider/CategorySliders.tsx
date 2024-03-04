import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// data
import { cards } from "@/constants/data";
// ui
import { Card } from "@/components/ui/card";

const CategorySliders = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="py-10">
      <div className="container lg:w-[1080px]">
        <Slider {...settings}>
          {cards.map((item) => (
            <div className="!flex !justify-center !items-center" key={item.id}>
              <Card className="relative w-[230px] h-[280px] text-white rounded-sm cursor-pointer">
                <Link to={`/gigs?cat=${item.id}`}>
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full hover:bg-transparent transition-all duration-300 ease-in-out" />
                  <div className="absolute top-2 left-2">
                    <p className="font-light">{item.desc}</p>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                  </div>
                </Link>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default CategorySliders;
