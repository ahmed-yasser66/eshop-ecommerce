import {
  CategoriesSection,
  LatestProducts,
  Products,
  Slider,
} from "./HomeComponents";
import { animationVar, motion } from "../../utils/vars";

const HomePage = () => {
  return (
    <motion.div
      variants={animationVar}
      initial="start"
      animate="show"
      exit="exit"
      className="max-w-screen-2xl mx-auto"
    >
      <Slider />
      <CategoriesSection />
      <LatestProducts />
      <Products />
    </motion.div>
  );
};
export default HomePage;
