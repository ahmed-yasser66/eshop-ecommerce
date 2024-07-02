import { useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import useFetch from "../utils/useFetch";
import { defaultMetaTags } from "../utils/data.js";

import { SkeletonProduct } from "../components/SkeletonProduct";
import BreadCrumb from "../components/BreadCrumb";
import NewProduct from "../components/newProduct";
import MetaTags from "../components/MetaTags";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    searchParams.set("category", "electronics");
    setSearchParams(searchParams);
  }, []);

  const { data, error, isLoading } = useFetch(
    `https://fakestoreapi.com/products/category/${searchParams.get("category") ? searchParams.get("category") : "electronics"}`,
    "GET",
  );

  function handleSelectedCategory(param) {
    searchParams.set("category", param);
    setSearchParams(searchParams);
  }

  return (
    <section className="section-default">
      <MetaTags
        {...defaultMetaTags}
        title={`${searchParams.get("category")} | Estore`}
      />
      <div className="categories--container overflow-hidden">
        {/* 📌📌📌 breadCrumb 📌📌📌 */}
        <BreadCrumb>
          <BreadCrumb.Create active>Products by category</BreadCrumb.Create>
        </BreadCrumb>
        {/* 📃📃📃 CATEGORIES 📃📃📃 */}
        <ul className="flex gap-2 md:gap-4 flex-wrap mb-16">
          {categories.map((item, i) => (
            <li
              onClick={() => handleSelectedCategory(item)}
              key={i}
              className={`text-xs bg-electric-violet-600 hover:bg-electric-violet-800 text-white md:text-sm font-semibold px-5 py-3 rounded-md cursor-pointer shadow-sm ${searchParams.get("category") === item ? "!bg-electric-violet-800" : null}`}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="products products-grid-parent">
          {/* 🔃🔃🔃 LOADING...🔃🔃🔃 */}
          {isLoading &&
            Array.from({ length: 8 }).map((_, idx) => (
              <SkeletonProduct key={"catprodskele" + idx} />
            ))}

          {/* ⛔⛔⛔ ERROR ⛔⛔⛔*/}
          {error && !isLoading && (
            <div className="[height:297.6px] w-full flex items-center justify-center text-lg font-medium">
              ⛔{error}
            </div>
          )}

          {!error &&
            !isLoading &&
            data?.map((item, idx) => {
              return (
                <div key={"product" + idx} className="products-grid-child">
                  <NewProduct {...item} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
export default Categories;
