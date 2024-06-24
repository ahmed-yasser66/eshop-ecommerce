import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearCart,
  getCartItems,
  getCartItemsQuantity,
  getCartTotalValue,
} from "../store/CartSlice";

import emptyCart from "../assets/empty-cart.png";
import { formatCurrency } from "../utils/helpers";
import { defaultMetaTags } from "../utils/data";

import CartItem from "../components/CartItem";
import Modal from "../components/Modal";
import MetaTags from "../components/MetaTags";

const Cart = () => {
  window.scrollTo(0, 0);
  const amount = useSelector(getCartItemsQuantity);
  const totalPrice = useSelector(getCartTotalValue);
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();
  if (!amount) {
    return (
      <section className="section-default">
        <MetaTags
          {...defaultMetaTags}
          title="Cart | Estore"
          img="/og-cart-page.webp"
        />

        <div className="wrapper flex flex-col justify-center items-center section-min-height">
          <img
            src={emptyCart}
            width={300}
            height={300}
            loading="eager"
            decoding="async"
            alt="empty cart"
          />
          <div className="text-center">
            <h1 className="text-lg font-semibold">Your cart is empty</h1>
            <p className="font-medium text-[--text-color] opacity-80">
              Looks like you have not added anything to your cart
            </p>

            <Link
              to={"/products/bycategory"}
              className="btn bg-electric-violet-600 hover:bg-electric-violet-700 duration-300 text-white my-7"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-default !mt-10">
      <MetaTags
        {...defaultMetaTags}
        title="Cart | Estore"
        img="/og-cart-page.webp"
      />
      <div className="wrapper">
        <div className="max-w-screen-xl mx-auto">
          <Modal>
            <Modal.ToggleButton
              name="empty-cart"
              classes="btn-sm border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white duration-300 mb-5 float-right"
            >
              Empty Cart
            </Modal.ToggleButton>
            <div className="clear-both" />
            <Modal.Window
              name="empty-cart"
              position={{ top: 0, left: 0, minHeight: "100vh" }}
            >
              <div className="bg-[--color-primary] shadow-lg w-[90vw] sm:w-[500px] rounded-lg py-2 absolute left-1/2 top-1/2 [transform:translate(-50%,-50%)] z-10 ">
                <div className="modal-header flex items-center justify-between px-4 py-2">
                  <h1 className="md:text-lg font-medium">
                    Clear Cart Confirmation
                  </h1>
                  <Modal.ToggleButton name="empty-cart">
                    <span
                      className="text-2xl md:text-3xl font-semibold cursor-pointer hover:bg-[--color-secondary] px-3 !h-9 rounded-lg"
                      data-toggle="true"
                    >
                      &times;
                    </span>
                  </Modal.ToggleButton>
                </div>
                <hr />
                <div className="modal-body text-sm md:text-base py-6 px-4">
                  Do you really want to delete all items?
                </div>
                <hr />
                <div className="modal-footer py-4 space-x-4 px-4">
                  <Modal.ToggleButton
                    name="empty-cart"
                    classes="btn-sm bg-red-500 border-2 border-red-500 text-white"
                  >
                    Cancel
                  </Modal.ToggleButton>
                  <Modal.ToggleButton name="empty-cart">
                    <span
                      className="btn-sm border-2 border-electric-violet-600 text-electric-violet-600 block hover:bg-electric-violet-600 hover:text-white duration-300"
                      onClick={() => dispatch(clearCart())}
                    >
                      Clear
                    </span>
                  </Modal.ToggleButton>
                </div>
              </div>
              {/*🫨🫨🫨 OVERLAY 🫨🫨🫨 */}
              <Modal.Toggler>
                <div className="fixed top-0 left-0 backdrop-blur-xl h-screen w-screen bg-gray-500/30"></div>
              </Modal.Toggler>
            </Modal.Window>
          </Modal>
        </div>
        <div className="grid-rows-1 grid-cols-12 px-6 md:section-default md:!max-w-screen-xl text-[--text-color] font-semibold bg-[--color-accent] py-3 rounded-lg shadow-md hidden md:grid">
          <span>Product</span>
          <span className="col-start-6 col-end-8">Price</span>
          <span className="col-start-8 col-end-9">Quantity</span>
          <span className="col-start-11 col-end-12">Total</span>
        </div>
        <div className="products flex flex-col gap-y-6 md:gap-0">
          {cartItems.length
            ? cartItems.map((item) => <CartItem {...item} key={item.id} />)
            : null}
        </div>
        <div className="grid-rows-1 grid-cols-12 px-6 md:section-default md:!max-w-screen-xl text-[--text-color] font-semibold bg-[--color-accent] py-3 rounded-lg shadow-md hidden md:grid">
          <span className="col-start-8 col-end-9 text-center">
            {String(amount).padStart(2, 0)}
          </span>
          <span className="col-start-11 col-end-12">
            {formatCurrency(totalPrice)}
          </span>
        </div>
      </div>
    </section>
  );
};
export default Cart;
