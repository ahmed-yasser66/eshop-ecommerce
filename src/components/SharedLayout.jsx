import { useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";

import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { Toaster } from "react-hot-toast";

import { useTokenContext } from "../context/TokenContext";
import { getProducts } from "../store/ProductsSlice";

import { Navbar } from "./navbar";
import Footer from "./Footer";
import Loading from "./Loading";

const cookie = new Cookies();

const SharedLayout = () => {
  const dispatch = useDispatch();
  const { setToken } = useTokenContext();
  const token = cookie.get("e-lgn-token")?.token;
  const isLoading = useNavigation().state === "loading";
  useEffect(() => {
    if (token) setToken(token);

    setMinHeight();
    document.addEventListener("resize", setMinHeight);
    return () => document.removeEventListener("resize", setMinHeight);
  }, []);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Navbar />
      <Toaster />
      <main className="min-h-96 lg:min-h-screen">
        {isLoading && <Loading />}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

function setMinHeight() {
  const navbarHeight =
    document.getElementsByTagName("nav")[0].getBoundingClientRect().height + 50;

  document
    .querySelector(":root")
    .style.setProperty("--navbar-height", navbarHeight + "px");
}
export default SharedLayout;
