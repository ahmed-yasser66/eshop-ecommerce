import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import axios from "axios";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { CartIcon, StarIcon } from "../assets/Icons";
import { formatCurrency, formatTitle } from "../utils/helpers";
import { addItem } from "../store/CartSlice";

import RatingSection from "../components/RatingSection";
import BreadCrumb from "../components/BreadCrumb";
import DetailsGrid from "../components/DetailsGrid";
import MetaTags from "../components/MetaTags";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const { category, description, image, price, rating, title, id } =
    useLoaderData();

  const MetaData = {
    title: title + " | Eshop",
    description,
    img: image,
  };
  function handleChange() {}
  const itemDetails = {
    id,
    title,
    price,
    image,
    quantity: count,
    totalPrice: count * price,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <section className="section-default">
      <MetaTags {...MetaData} />
      <BreadCrumb>
        <BreadCrumb.Create path={`/categories/${category}`}>
          {category}
        </BreadCrumb.Create>
        <BreadCrumb.Create active>{formatTitle(title)}</BreadCrumb.Create>
      </BreadCrumb>
      <div className="wrapper">
        <DetailsGrid>
          <DetailsGrid.img>
            {image && (
              <div className=" size-full border-2 border-neutral-400 p-8 rounded-md text-center">
                <img
                  src={image}
                  alt={title}
                  className="size-full mx-auto object-contain "
                />
              </div>
            )}
          </DetailsGrid.img>
          <DetailsGrid.Title>
            {title && (
              <h1
                className="text-lg md:text-xl font-medium size-full flex items-end"
                title={title}
              >
                {title}
              </h1>
            )}
          </DetailsGrid.Title>
          <DetailsGrid.ProductRate>
            {rating && (
              <p className="text-amber-300 flex gap-x-2 items-center md:pt-2">
                <span className="flex">
                  {rating.rate} <StarIcon />
                </span>
                <span className="text-[--text-color] opacity-80 text-sm">
                  {rating.count} reviews
                </span>
              </p>
            )}
          </DetailsGrid.ProductRate>
          <DetailsGrid.Price>
            {price && (
              <span className="text-2xl font-semibold w-full text-center block md:text-start">
                USD {formatCurrency(price)}
              </span>
            )}
          </DetailsGrid.Price>
          <DetailsGrid.Counter>
            <div className="flex">
              <span
                className="better-gradient bg-electric-violet-600 hover:bg-electric-violet-800 w-12 text-center font-extrabold text-xl text-white leading-[48px] rounded-tl-lg rounded-bl-lg cursor-pointer duration-300 select-none"
                onClick={() => {
                  if (count == 1) return;
                  setCount((prev) => prev - 1);
                }}
              >
                &minus;
              </span>
              <input
                type="text"
                disabled
                className="h-12 w-16 bg-[--color-accent text-center leading-[48px] font-semibold"
                value={count}
                onChange={handleChange}
                name="disabled"
              />
              <span
                className="better-gradient bg-electric-violet-600 hover:bg-electric-violet-800 w-12 text-center font-extrabold text-4xl text-white leading-[44px] rounded-tr-lg rounded-br-lg cursor-pointer duration-300 select-none flex items-center justify-center"
                onClick={() => setCount((prev) => prev + 1)}
              >
                <PlusIcon size={[12, 12]} />
              </span>
            </div>
          </DetailsGrid.Counter>
          <DetailsGrid.Button>
            <button
              className="btn w-full !px-0 h-12 font-semibold text-white text-sm space-x-2 better-gradient bg-electric-violet-600 hover:bg-electric-violet-800 select-none !flex justify-center items-center"
              onClick={() => {
                dispatch(addItem(itemDetails));
                toast.success(
                  `${count} ${count > 1 ? "products" : "product"} added successfully`,
                );
              }}
            >
              {/* <PlusIcon size={[13, 13]} /> */}
              <CartIcon size={[18, 18]} />
              <span>Add to cart</span>
            </button>
          </DetailsGrid.Button>
        </DetailsGrid>
        <DetailsGrid.productDetails>
          {description && (
            <p className="text-[--text-color font-medium text-sm leading-6">
              {description}
            </p>
          )}
        </DetailsGrid.productDetails>
        <DetailsGrid.Rating>{rating && <RatingSection />}</DetailsGrid.Rating>
      </div>
    </section>
  );
};
function PlusIcon({ size }) {
  return (
    <svg
      width={size[0]}
      height={size[1]}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 12h-8V4a4 4 0 1 0-8 0v8H4a4 4 0 1 0 0 8h8v8a4 4 0 1 0 8 0v-8h8a4 4 0 1 0 0-8"
        fill="#fff"
      />
    </svg>
  );
}
export async function Loader({ params: { id } }) {
  try {
    const resp = await axios(`https://fakestoreapi.com/products/${id}`);
    const data = resp.data;
    if (data == "") throw new Error();
    return data;
  } catch (error) {
    throw new Response("please provide a valid product", { status: 404 });
  }
}
export default ProductDetails;
