import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LeftArrow } from "../../assets/Icons";
import CartItem from "../../components/website/cart/CartItem";
import { clearCart } from "../../store/CartSlice";
import { animationVar, motion } from "../../utils/vars";
const Cart = () => {
  const { cartItems, total } = useSelector((state) => state.cart);
  const [shippingFee, _] = useState(9.9);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (cartItems.length < 1) {
    return (
      <motion.main
        variants={animationVar}
        initial="start"
        animate="show"
        exit="exit"
        className="section-min-height mt-6 "
      >
        <section className="min-h-[calc(43vh_-_64px)] bg-white">
          <header
            className="flex gap-3 cursor-pointer px-12"
            onClick={() => window.history.back()}
          >
            <span className="text-orange-500">
              <LeftArrow />
            </span>
            <h1 className="text-3xl pt-3 text-orange-500 font-semibold">
              Shopping Cart
            </h1>
          </header>
          <p className="capitalize font-medium ps-20 text-base">
            no items here
          </p>
        </section>
      </motion.main>
    );
  }
  return (
    <motion.div
      variants={animationVar}
      initial="start"
      animate="show"
      exit="exit"
      className="cart--container"
    >
      <main className="wideScreen:section-min-height wideScreen:section-min-height px-6 md:px-8 pt-6">
        <header
          className="flex gap-3 cursor-pointer"
          onClick={() => window.history.back()}
        >
          <span className="text-orange-500">
            <LeftArrow />
          </span>
          <h1 className="text-3xl pt-3 text-orange-500 font-semibold">
            Shopping Cart
          </h1>
        </header>
        <p
          className="font-semibold text-xl tracking-widest m-4 uppercase text-right  rounded-3xl cursor-pointer text-[red] hover:text-red-900 font-[math] w-fit float-right"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </p>
        <div className="clear-both"></div>
        <section className="cart--products--checkout flex flex-col md:flex-row md:justify-center lg:gap-20 md:px-8 ">
          <div className="cart-Products mt-10 lg:pr-6 flex flex-col gap-8 justify-center ">
            {cartItems.map((item, index) => {
              return <CartItem {...item} key={index} />;
            })}
            {/* <div className='line h-0.5 w-44 bg-slate-300 mt-8 hidden md:block'></div> */}
          </div>
          <div className="checkout px-8 border-l-2 lg:border-l-slate-300 b border-l-transparent">
            <div className="coupon my-6">
              <h1 className="uppercase font-medium text-lg mb-4">Coupon</h1>
              <div className="co-btn flex items-center border-2 border-slate-300 w-fit shadow-sm rounded-lg overflow-hidden">
                <input
                  type="text"
                  className="h-8  outline-none ps-3 inline-block"
                />
                <span className="inline-block h-8 bg-yellow-400 cursor-pointer px-3 font-semibold leading-7 text-lg tracking-wide">
                  apply
                </span>
              </div>
            </div>
            <div className="price-details my-4">
              <h1 className="uppercase text-lg font-semibold mb-4">
                price details
              </h1>
              <div className="sub-total flex justify-between my-1">
                <h1 className="text-lg capitalize font-medium">sub total</h1>
                <h1 className="font-medium text-lg">${total.toFixed(2)}</h1>
              </div>
              <div className="sub-total flex justify-between my-1">
                <h1 className="text-lg capitalize font-medium">shipping Fee</h1>
                <h1 className="font-medium text-lg">${shippingFee}</h1>
              </div>
            </div>
            <div className="total-price flex items-center justify-between border-2 border-t-slate-300 border-transparent pt-2 mt-6">
              <h1 className="uppercase font-bold text-xl">total</h1>
              <h1 className="tracking-wide font-bold text-xl mt-1">
                ${(total + shippingFee).toFixed(1)}
              </h1>
            </div>
            <div className="text-center mt-8">
              <button className="bg-yellow-400 w-52 h-16 shadow-md rounded-2xl text-xl capitalize font-medium ">
                place order
              </button>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};
export default Cart;
