import { useDispatch } from "react-redux";
import { AddToCartIcon, StarIcon } from "../../../assets/Icons";
import { addItemToCart } from "../../../store/CartSlice";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Product = ({ image, title, price, rating: { rate }, id }) => {
  const cookie = new Cookies();
  const token = cookie.get("e-lgn-token");
  const nav = useNavigate();

  function ViewProductDetails() {
    nav(`/products/${id}`);
  }
  const dispatch = useDispatch();
  return (
    <div className="product-container w-10/12 sm:w-full shadow-md rounded-2xl border-2 border-slate-200 py-4 sm:basis-2/5 md:basis-2/5 xl:basis-1/5 lg:basis-[30%] group relative max-w-72">
      <div className="group-hover:block hidden absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] bg-yellow-300 w-32 h-10 text-center leading-10 rounded-lg hover:bg-yellow-400 hover:text-white duration-150 shadow-md z-10">
        <button
          className="font-medium tracking-wider"
          onClick={() => ViewProductDetails()}
        >
          View Product
        </button>
      </div>
      <div className="product text-center max-h-[371.2px] relative z-[1]">
        <div className="img-container w-[160px] h-[200px] mb-6 mx-auto">
          <LazyLoadImage
            width={160}
            height={200}
            effect="blur"
            src={image}
            alt={title}
            className="w-full h-full object-contain cursor-pointer"
            onClick={() => ViewProductDetails()}
          />
        </div>
        <h1 className="overflow-hidden max-h-[24px]">
          {title.slice(0, 20)}...
        </h1>
        {/* stars */}
        <span className="flex justify-center items-center mt-2">
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index < Math.round(rate)
                    ? "text-amber-300"
                    : "text-white stroke-slate-500 stroke-1"
                }
              >
                <StarIcon />
              </div>
            );
          })}
        </span>
        <div className="flex justify-between px-6 pt-4">
          <span className="text-lg font-medium">${price}</span>
          <span
            className="bg-yellow-300 w-14 h-14 text-center pe-[3px] rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-amber-300 duration-200 hover:text-white"
            onClick={
              token
                ? () => dispatch(addItemToCart({ image, title, price, id }))
                : () => nav("/login")
            }
          >
            <AddToCartIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Product;
