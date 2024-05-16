import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "../../../assets/Icons";
import { increase, decrease, remove } from "../../../store/CartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ image, title, id, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart--product flex px-3 lg:px-5 py-8 justify-between shadow-md border-2 border-slate-300 rounded-2xl items-center max-w-xs lg:max-w-md">
        <img
          src={image}
          alt={title}
          width={60}
          height={60}
          className="px-2 lg:size-32 lg:object-contain"
        />
        <p className="flex flex-col text-xs lg:text-lg w-1/2 gap-y-2">
          <span>{title}</span>
          <span className="font-medium">${price}</span>
          <span
            className="font-bold text-neutral-500 hover:text-red-500"
            onClick={() => dispatch(remove(id))}
          >
            remove
          </span>
        </p>
        <div className="product--amount">
          <ul className="flex flex-col items-center gap-y-1 lg:gap-y-3">
            <li
              className="cursor-pointer hover:text-yellow-500"
              onClick={() => dispatch(increase(id))}
            >
              <ChevronUp />
            </li>
            <li className="font-bold lg:text-lg">{amount}</li>
            <li
              className="cursor-pointer hover:text-yellow-500"
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
