import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "../store/CartSlice";
import { formatCurrency, formatTitle } from "../utils/helpers";
const CartItem = ({ image, id, title, price, totalPrice, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-12 grid-rows-12 bg-[--color-accent] h-48 p-3 md:h-24 rounded-lg md:grid-rows-3 md:grid-cols-12 relative md:w-full md:section-default md:!max-w-screen-xl [@media(min-width:450px)]:mx-[8%] md:!mx-auto md:p-0 shadow-md">
      <div
        className="absolute right-1.5 top-1.5 text-2xl md:text-3xl font-semibold text-[--text-color] md:top-1/2 md:-translate-y-1/2 md:right-8 cursor-pointer px-2 rounded-lg  duration-300 transition-colors select-none hover:bg-[--color-secondary]"
        onClick={() => dispatch(deleteItem(id))}
      >
        &times;
      </div>

      <LazyLoadImage
        src={image}
        alt={title}
        width={100}
        height={100}
        className="row-start-3 row-end-12 col-start-1 col-end-4 object-contain md:row-span-1 md:relative md:top-1/2 md:size-16 md:col-start-1 max-h-full md:max-h-none"
      />

      <span className="row-start-3 row-end-5 col-start-4 col-end-13 font-medium items-end ms-5 text-base sm:text-base md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-6">
        {formatTitle(title)}
      </span>

      <span className="text-left row-start-6 row-end-7 col-start-4 col-end-13 font-semibold text-red-500 ms-5 md:text-[--text-color] text-sm md:m-0 sm:text-base md:row-start-2 md:row-end-3 md:col-start-6 md:col-end-8 !leading-8">
        {formatCurrency(price)}{" "}
        <span className="font-medium text-[--text-color] md:hidden"> Each</span>
      </span>

      <span className="text-left row-start-8 row-end-9 col-start-4 col-end-13 text-sm sm:text-base font-semibold text-red-500 md:text-[--text-color] ms-5 md:m-0 md:row-start-2 md:row-end-3  md:col-start-11 md:col-end-12 !leading-8">
        {formatCurrency(totalPrice)}{" "}
        <span className="font-medium text-[--text-color] md:hidden">
          {" "}
          Subtotal
        </span>
      </span>

      <div className="flex justify-center gap-x-6 items-center row-start-11 row-end-13 [@media(max-width:400px)]:col-start-8 col-start-9 col-end-13 ms-4 md:m-0 md:row-start-2 md:row-end-3 md:col-end-9 md:col-start-8">
        <span
          className="font-medium text-lg sm:text-2xl cursor-pointer select-none"
          onClick={() => {
            if (quantity === 1) return;
            dispatch(decreaseItemQuantity(id));
          }}
        >
          -
        </span>
        <span className="text-lg sm:text-lg font-semibold tabular-nums">
          {String(quantity)?.padStart(2, 0)}
        </span>
        <span
          className="font-medium text-lg sm:text-2xl cursor-pointer select-none"
          onClick={() => dispatch(increaseItemQuantity(id))}
        >
          +
        </span>
      </div>
    </div>
  );
};

export default CartItem;
