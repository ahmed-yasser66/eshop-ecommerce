import { Link } from "react-router-dom";
import { getCartItemsQuantity } from "../../store/CartSlice";
import { useSelector } from "react-redux";
import { CartIcon } from "../../assets/Icons";
import { useEffect, useRef } from "react";
const CartNavIcon = () => {
  const amount = useSelector(getCartItemsQuantity);
  const cartRef = useRef();
  useEffect(() => {
    if (!cartRef.current) return;

    const { top, left, width } = cartRef.current.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--cart-position",
      `${top}-${left - width}`,
    );
  }, []);
  return (
    <Link
      to={"/cart"}
      id="nav-cart-link"
      ref={cartRef}
      aria-label="navigate to cart page"
      role="button"
    >
      <span
        data-amount={amount > 98 ? "99+" : amount}
        className="relative after:absolute after:-right-2 after:-top-2.5 after:size-6 after:rounded-full after:bg-electric-violet-500 after:content-[attr(data-amount)] after:text-white after:text-xs text-center after:leading-6 tabular-nums text-[--text-color] better-gradient"
      >
        <CartIcon size={[28, 28]} />
      </span>
    </Link>
  );
};

export default CartNavIcon;
