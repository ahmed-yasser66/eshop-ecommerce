import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "../../../assets/Icons";
import { increase, decrease, remove } from "../../../store/CartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ image, title, id, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart--product flex items-start justify-between md:gap-0 lg:gap-6 gap-6 px-4 shadow-md border-2 border-slate-300 rounded-2xl">
        <Link
          to={`/products/${id}`}
          className="product--image w-[150px] h-[190px] my-6  inline-block md:pt-3"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </Link>
        <div className="product--info mt-10">
          <Link
            to={`/products/${id}`}
            className="title font-medium inline-block w-36 sm:w-80 md:w-40"
          >
            {title}
          </Link>
          <p className="tracking-widest mt-3 font-medium text-lg pb-2">
            ${price}
          </p>
          <button
            className="font-semibold tracking-widest opacity-70 hover:text-red-500 font-[Tahoma] hover:opacity-100"
            onClick={() => dispatch(remove(id))}
          >
            remove
          </button>
        </div>
        <div className="product--amount mt-14 pr-3">
          <ul className="flex flex-col items-center gap-3">
            <li
              className="cursor-pointer hover:text-yellow-400"
              onClick={() => dispatch(increase(id))}
            >
              <ChevronUp />
            </li>
            <li className="text-xl font-bold">{amount}</li>
            <li
              className="cursor-pointer hover:text-yellow-400"
              onClick={() => {
                if (amount === 1) {
                  dispatch(remove(id));
                  return;
                }
                dispatch(decrease(id));
              }}
            >
              <ChevronDown />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default CartItem;
