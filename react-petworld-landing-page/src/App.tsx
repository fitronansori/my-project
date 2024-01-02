import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <div className="w-full">
      <section className="h-[calc(100vh-4rem)] md:h-[70vh] bg-gray-200">
        <Hero />
      </section>
    </div>
  );
};
export default App;
