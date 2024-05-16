import Product from "./Product";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
const LatestProducts = () => {
  const { isLoading, latestProducts } = useSelector((state) => state.products);

  if (isLoading) {
    return (
      <div className="px-16 mt-28">
        <h1 className="uppercase text-2xl text-center md:text-left my-12 underline underline-offset-8 font-medium tracking-wider">
          Latest Products
        </h1>
        <div className="flex flex-wrap gap-8 justify-center">
          {Array.from({ length: 4 }).map((_, i) => {
            return (
              <div className="w-[300px] h-[370px]" key={i}>
                <Skeleton width={"100%"} height={"60%"} count={1} />
                <div className="mt-10">
                  <Skeleton count={3} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="px-7 sm:px-16 lg:px-[90px] mt-16 md:mt-0 max-w-screen-2xl mx-auto overflow-hidden">
      <h1 className="uppercase text-xl text-center md:text-left my-12 underline underline-offset-8 font-medium tracking-wider">
        Latest Products
      </h1>
      <div className="products flex flex-wrap items-center lg:justify-start [margin:-20px_-20px_0_0] md:[margin:-3%_-3%_0_0]">
        {latestProducts &&
          latestProducts.map((item, idx) => {
            return (
              <div
                key={idx}
                className="[padding:20px_20px_0_0] md:[padding:3%_3%_0_0] w-full wideMobile:w-1/2 xl:!w-1/4 lg:!w-1/3"
              >
                <Product {...item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default LatestProducts;
