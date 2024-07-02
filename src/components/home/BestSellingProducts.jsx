import { LazyLoadComponent } from "react-lazy-load-image-component";

import { SkeletonProduct } from "../SkeletonProduct";
import NewProduct from "../newProduct";
import { useSelector } from "react-redux";

const ProductsSection = () => {
  const {
    all: data,
    isLoading,
    error,
  } = useSelector((state) => state.products);

  const filteredProducts = data
    .filter((item) => item.rating.rate > 3.8)
    .slice(0, 8);

  return (
    <LazyLoadComponent>
      <section className="section-default overflow-hidden">
        <h1 className="h1-primary">Best Selling</h1>

        <div className="products products-grid-parent">
          {/*🔃🔃🔃  LOADING... 🔃🔃🔃*/}
          {isLoading &&
            Array.from({ length: 8 }).map((_, idx) => (
              <SkeletonProduct key={idx + "prods"} />
            ))}
          {/* ⛔⛔⛔ ERROR ⛔⛔⛔*/}
          {error && !isLoading && (
            <div className="[height:297.6px] w-full flex items-center justify-center text-lg font-medium">
              ⛔{error}
            </div>
          )}
          {!isLoading &&
            !error &&
            filteredProducts &&
            filteredProducts.map((item, i) => {
              return (
                <div key={i} className="products-grid-child">
                  <NewProduct {...item} />
                </div>
              );
            })}
        </div>
      </section>
    </LazyLoadComponent>
  );
};
export default ProductsSection;
