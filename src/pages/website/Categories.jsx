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
      className="max-w-screen-2xl mx-auto"
    >
      <div className="categories--container px-14 py-14">
        <p className="font-medium tracking-wider xl:ps-40">
          <Link to={"/"}>Home </Link>
          <BreadCrumb title={param} path={`/categories/${param}`} />
        </p>
        <div className="products flex flex-col items-center lg:justify-start xl:justify-start gap-8 justify-center mb-8 sm:flex-row sm:flex-wrap mt-16 xl:ps-40">
          {relatedProducts.map((item, i) => (
            <Product {...item} key={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default Categories;
