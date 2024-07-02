import { LazyLoadComponent } from "react-lazy-load-image-component";

import { SkeletonProduct } from "../SkeletonProduct";
import NewProduct from "../newProduct";
import { useSelector } from "react-redux";

const LatestProductsSection = () => {
  const {
    all: data,
    isLoading,
    error,
  } = useSelector((state) => state.products);

  const latestProducts = data.slice(-4);

  return (
    <LazyLoadComponent>
      <section className="section-default overflow-hidden min-h-80">
        <h1 className="h1-primary">Latest Products</h1>
        <div className="products-grid-parent">
          {/*🔃🔃🔃  LOADING... 🔃🔃🔃*/}
          {isLoading &&
            Array.from({ length: 4 }).map((_, i) => {
              return <SkeletonProduct key={"latprodskele" + i} />;
            })}
          {/* ⛔⛔⛔ ERROR ⛔⛔⛔*/}
          {error && !isLoading && (
            <div className="[height:297.6px] w-full flex items-center justify-center text-lg font-medium">
              ⛔{error}
            </div>
          )}
          {!isLoading &&
            !error &&
            latestProducts &&
            latestProducts.map((item, idx) => {
              return (
                <div key={idx} className="products-grid-child">
                  {!isLoading && <NewProduct {...item} badge />}
                </div>
              );
            })}
        </div>
      </section>
    </LazyLoadComponent>
  );
};
export default LatestProductsSection;
