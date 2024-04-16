import { Outlet } from "react-router-dom";
import Navbar from "./website/navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculations } from "../store/CartSlice";
import { getProducts } from "../store/ProductsSlice";
import Footer from "./website/Home/Footer";
const SharedLayout = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    dispatch(calculations());
  }, [cartItems]);

  return (
    <>
      <Navbar />

      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayout;
