import OurDoctors from "../components/Doctors/OurDoctors";
import Feature from "../components/Feature/Feature";
import Hero from "../components/Hero/Hero";
import OurServices from "../components/Services/OurServices";
import Services from "../components/Services/Services";
import About from "../components/about/About";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <OurServices />
      <Feature />
      <OurDoctors />
    </>
  );
};
export default Home;
