import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 font-sans leading-normal tracking-normal min-h-screen text-gray-100">
      <Header />
      <Hero />
    </div>
  );
};
export default App;
