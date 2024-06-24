import {
  CategoriesSection,
  LatestProductsSection,
  BestSellingProducts,
  Slider,
} from "../components/home";
import MetaTags from "../components/MetaTags";
import { defaultMetaTags } from "../utils/data";

const HomePage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <MetaTags {...defaultMetaTags} />
      <Slider />
      <CategoriesSection />
      <LatestProductsSection />
      <BestSellingProducts />
    </div>
  );
};
export default HomePage;
