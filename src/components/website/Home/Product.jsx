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
    <div className="product-container shadow-md rounded-2xl border-2 border-slate-200 group relative p-6">
      <div className="product text-center max-h-[371.2px] relative z-[1]">
        <h1 className="overflow-hidden max-h-[24px] font-medium text-start mb-4">
          {title.split(" ").slice(0, 3).join(" ")}
        </h1>
        <LazyLoadImage
          width={120}
          height={120}
          effect="blur"
          src={image}
          alt={title}
          className="size-full object-contain cursor-pointer"
          onClick={() => ViewProductDetails()}
        />

        {/* stars */}
        <span className="flex justify-center items-center">
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

        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-medium text-neutral-600">${price}</span>
          <span
            className="bg-yellow-300 size-11 text-center pe-[3px] rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-amber-300 duration-200 hover:text-white"
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
