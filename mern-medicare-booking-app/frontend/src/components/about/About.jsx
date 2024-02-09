import { Link } from "react-router-dom";

// File
import aboutImg from "../../assets/images/about.png";
import aboutCard from "../../assets/images/about-card.png";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-[50px] lg:gap-[130px] xl:gap-0">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[720px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-33%] md:right-[-7%] lg:right-[-2%]">
              <img src={aboutCard} alt="" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 text-center lg:text-start">
            <h2 className="heading ">Proud to be one of the nation best</h2>
            <p className="text__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex
              necessitatibus nam animi, similique fuga architecto adipisci?
              Eveniet iusto voluptate, in voluptas placeat qui recusandae? Earum
              asperiores magnam incidunt perspiciatis.
              <p className="text-para mt-[30px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                eius iusto odit cum praesentium fugiat tenetur illum doloremque
                qui? Quae recusandae quos praesentium, voluptatibus suscipit
                laboriosam quis itaque natus aspernatur?
              </p>
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
