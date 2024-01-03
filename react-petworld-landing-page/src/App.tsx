import Featured from "./components/featured/Featured";
import Hero from "./components/hero/Hero";
import Logos from "./components/logos/Logos";
import Video from "./components/video/Video";

const App = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-[calc(100vh-4rem)] bg-gray-100">
        <Hero />
      </section>
      {/* End Hero Section */}

      {/* Videos Section */}
      <section className="lg:h-[60vh] bg-gray-100 flex justify-center items-center ">
        <Video />
      </section>
      {/* End Videos Section */}

      {/* Logos Section */}
      <section className="h-[160px] md:h-[200px]">
        <Logos />
      </section>
      {/* End Logos Section */}

      {/* Featured Section */}
      <section className="lg:h-[500px] flex justify-center items-center">
        <Featured />
      </section>
      {/* End Featured Section */}
    </div>
  );
};
export default App;
