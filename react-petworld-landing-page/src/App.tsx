import Featured from "./components/features/Featured";
import Hero from "./components/hero/Hero";
import Logos from "./components/logos/Logos";

const App = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-[calc(100vh-4rem)] md:h-[71vh] bg-gray-200">
        <Hero />
      </section>
      {/* End Hero Section */}

      <section className="h-[160px] md:h-[200px]">
        <Logos />
      </section>

      <section className="">
        <Featured />
      </section>
    </div>
  );
};
export default App;
