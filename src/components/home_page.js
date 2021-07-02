import Carousel from "./carousel/carousel";
import Features from "./features/features";
import TrendTabs from "./trend_tabs/trend_tabs";
import BestSellers from "./best_sellers/best_sellers";
import TopCategories from ".//top_categories/top_categories";

const Home_Comp = () => {
  return (
    <>
      <Carousel />
      <Features />
      <TrendTabs />
      <BestSellers />
      <TopCategories />)
    </>
  );
};

export default Home_Comp;
