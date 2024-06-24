import { useParams } from "react-router-dom";

import useFetch from "../utils/useFetch";

import BreadCrumb from "../components/BreadCrumb";
import NewProduct from "../components/newProduct";
import { SkeletonProduct } from "../components/SkeletonProduct";
import MetaTags from "../components/MetaTags";
import { defaultMetaTags } from "../utils/data";

const Categories = () => {
  window.scrollTo(0, 0);
  const category = useParams().id;

  const { data, isLoading, error } = useFetch(
    `https://fakestoreapi.com/products/category/${category}`,
    "GET",
  );

  function capitalize(word) {
    return word?.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div className="section-default">
      <MetaTags
        {...defaultMetaTags}
        title={`${capitalize(category)} | Estore`}
      />
      <BreadCrumb>
        <BreadCrumb.Create active>{category}</BreadCrumb.Create>
      </BreadCrumb>

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
          data.map((item, i) => (
            <div key={i} className="products-grid-child">
              <NewProduct {...item} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default Categories;
