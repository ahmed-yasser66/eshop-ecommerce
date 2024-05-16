import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/website/Home/Footer";
import BreadCrumb from "../../components/website/breadcrumb/BreadCrumb";
import Product from "../../components/website/Home/Product";
import Skeleton from "react-loading-skeleton";
import { getProducts } from "../../store/ProductsSlice";
import { animationVar, motion } from "../../utils/vars";
const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: "0",
    });
  }, []);
  const param = useParams().id;
  const allProducts = useSelector((state) => state.products.products);
  const relatedProducts =
    allProducts?.filter((item) => item.category === param) || [];

  if (relatedProducts.length < 1) {
    return (
      <motion.div
        variants={animationVar}
        initial="start"
        animate="show"
        exit="exit"
        className="max-w-screen-2xl mx-auto"
      >
        <div className="categories--container px-14 py-14">
          <p className="font-medium tracking-wider xl:ps-40">
            <Link to={"/"}>Home </Link>
            <BreadCrumb title={param} path={`/categories/${param}`} />
          </p>
          <div className="products flex flex-col items-center lg:justify-start xl:justify-start gap-8 justify-center mb-8 sm:flex-row sm:flex-wrap mt-16 xl:ps-40">
            {Array.from({ length: 4 }).map((_, i) => {
              return (
                <div className="w-[250px] h-[370px]" key={i}>
                  <Skeleton width={"100%"} height={"60%"} count={1} />
                  <div className="mt-10">
                    <Skeleton count={3} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </motion.div>
    );
  }
  return (
    <motion.div
      variants={animationVar}
      initial="start"
      animate="show"
      exit="exit"
      className="max-w-screen-2xl mx-auto min-h-screen"
    >
      <div className="categories--container px-7 sm:px-16 lg:px-[90px] py-14 overflow-hidden">
        <p className="font-medium tracking-wider mb-16">
          <Link to={"/"}>Home </Link>
          <BreadCrumb title={param} path={`/categories/${param}`} />
        </p>

        <div className="products flex mt-16 flex-wrap items-center [margin:-20px_-20px_0_0] lg:[margin:-30px_-30px_0_0] xl:[margin:-3%_-3%_0_0]">
          {relatedProducts.map((item, i) => (
            <div
              key={i}
              className="[padding:20px_20px_0_0] lg:[padding:30px_30px_0_0] xl:[padding:3%_3%_0_0] w-full wideMobile:w-1/2 lg:!w-1/3 xl:!w-1/4"
            >
              <Product {...item} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default Categories;
