import { useSelector } from "react-redux";
import Product from "./Product";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { memo } from "react";

const Products = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  if (isLoading) {
    return (
      <div className="px-16 mt-28">
        <h1 className="uppercase text-2xl text-center md:text-left my-12 underline underline-offset-8 font-medium tracking-wider">
          Products
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
    <div className="px-8 2xl:px-16 mt-28">
      <div className="md:flex justify-between">
        <h1 className="uppercase text-2xl text-center md:text-left my-12 underline underline-offset-8 font-medium tracking-wider">
          Products
        </h1>
        <Link
          to={"/products/all"}
          className="uppercase text-2xl text-center md:text-left my-12 font-medium tracking-wider text-yellow-better hidden md:block hover:cursor-pointer hover:text-amber-300 duration-150"
        >
          Show All &#8594;
        </Link>
      </div>
      <div className="products flex flex-col items-center lg:justify-start xl:justify-center gap-8  justify-center mb-8 sm:flex-row sm:flex-wrap">
        {products &&
          products.slice(0, 8).map((item, i) => {
            return <Product {...item} key={i} />;
          })}
      </div>
    </div>
  );
};
export default memo(Products);
