import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// data
import { projects } from "@/constants/data";
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
          {projects.map((item) => (
            <div className="!flex !justify-center !items-center" key={item.id}>
              <Card className="relative w-[230px] h-[280px] text-white rounded-sm border border-solid border-gray-300">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-[70%] object-cover"
                />
                <div className="h-[30%] flex items-center p-2 gap-5">
                  <img
                    src={item.pp}
                    alt=""
                    className="w-[40px] h-[40px] rounded-full object-cover"
                  />

                  <div className="text-[14px] text-foreground">
                    <h2 className="font-medium">{item.cat}</h2>
                    <span className="font-light">{item.username}</span>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default CategorySliders;
