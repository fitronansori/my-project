import GigCard from "@/components/gigs/GigCard";
import GigsSearch from "@/components/gigs/GigsSearch";

const Gigs = () => {
  return (
    <section className="py-8">
      <div className="container space-y-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">AI Artist</h1>
          <p className="text-gray-600 font-light">
            Explore the boundaries of art and technology with Fiverr AI artist.
          </p>
        </div>

        <GigsSearch />

        <GigCard />
      </div>
    </section>
  );
};
export default Gigs;
