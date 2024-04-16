import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BreadCrumb from "../../components/website/breadcrumb/BreadCrumb";
import Product from "../../components/website/Home/Product";
import Skeleton from "react-loading-skeleton";
import { getProducts } from "../../store/ProductsSlice";
import Footer from "../../components/website/Home/Footer";
import { animationVar, motion } from "../../utils/vars";
const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const [showed, setShowed] = useState("all");
  const [productsList, setProductsList] = useState([]);
  const allProducts = useSelector((state) => state.products.products);
  function showProducts(title) {
    setProductsList(allProducts.filter((item) => item.category === title));
    setShowed(title);
  }

  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const ActiveCategory =
    "bg-yellow-500 text-lg font-medium px-5 py-2 rounded-lg cursor-pointer";
  if (allProducts.length < 1) {
    return (
      <motion.div
        variants={animationVar}
        initial="start"
        animate="show"
        exit="exit"
      >
        <div className="categories--container px-14 py-14">
          <p className="font-medium tracking-wider xl:ps-24">
            <Link to={"/"}>Home </Link>
            <BreadCrumb title={"products"} path={`/products/all`} />
          </p>
          <ul className="flex gap-4 flex-wrap mt-8 xl:ps-24">
            {categories.map((item, i) => (
              <li
                key={i}
                className={
                  showed === item
                    ? ActiveCategory
                    : "bg-yellow-400 text-lg font-medium px-5 py-2 rounded-lg cursor-pointer"
                }
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="products flex flex-col items-center lg:justify-center  gap-8 justify-center mb-8 sm:flex-row sm:flex-wrap mt-16">
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
    >
      <div className="categories--container px-14 py-14">
        <p className="font-medium tracking-wider xl:ps-24">
          <Link to={"/"}>Home </Link>
          <BreadCrumb title={"products"} path={`/products/all`} />
        </p>
        <ul className="flex gap-4 flex-wrap mt-8 xl:ps-24">
          {categories.map((item, i) => (
            <li
              onClick={() => showProducts(item)}
              key={i}
              className={
                showed === item
                  ? ActiveCategory
                  : "bg-yellow-400 text-lg font-medium px-5 py-2 rounded-lg cursor-pointer"
              }
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="products flex flex-col items-center lg:justify-center  gap-8 justify-center mb-8 sm:flex-row sm:flex-wrap mt-16">
          {showed == "all"
            ? allProducts.map((item, i) => <Product {...item} key={i} />)
            : productsList.map((item, i) => <Product {...item} key={i} />)}
        </div>
      </div>
    </motion.div>
  );
};
export default Categories;
