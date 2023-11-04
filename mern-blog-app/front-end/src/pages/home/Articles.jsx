import ArticleCard from "../../components/card/ArticleCard";

const Articles = () => {
  return (
    <section className="container mx-auto flex flex-wrap md:gap-x-4 gap-y-5 px-5 py-10">
      <ArticleCard
        style={`w-full md:w-[calc(50%-20px)] lg:w-[calc(33.3%-21px)]`}
      />
      <ArticleCard
        style={`w-full md:w-[calc(50%-20px)] lg:w-[calc(33.3%-21px)]`}
      />
      <ArticleCard
        style={`w-full md:w-[calc(50%-20px)] lg:w-[calc(33.3%-21px)]`}
      />
      <ArticleCard
        style={`w-full md:w-[calc(50%-20px)] lg:w-[calc(33.3%-21px)]`}
      />
      <ArticleCard
        style={`w-full md:w-[calc(50%-20px)] lg:w-[calc(33.3%-21px)]`}
      />
      <ArticleCard
        style={`w-full md:w-[calc(50%-20px)] lg:w-[calc(33.3%-21px)]`}
      />
    </section>
  );
};
export default Articles;
