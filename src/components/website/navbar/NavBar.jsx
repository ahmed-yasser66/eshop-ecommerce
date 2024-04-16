import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AccountIcon,
  CartIcon,
  Cookies,
  useTokenContext,
  MobileAccountMenu,
  NavLinks,
  SearchBar,
} from "./NavBarImports";
import { clearCart } from "../../../store/CartSlice";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("e-lgn-token");
  const { setToken } = useTokenContext();
  const { amount } = useSelector((state) => state.cart);
  const nav = useNavigate();
  const [isUser, setIsUser] = useState(false);
  const dispatch = useDispatch();
  function logout() {
    cookies.remove("e-lgn-token");
    setToken(undefined);
    dispatch(clearCart());
    setIsUser(!isUser);
    nav("/");
  }
  return (
    <>
      <div className="bg-white w-full h-20 shadow-lg flex items-center sticky top-0 z-50">
        <nav className="max-w-7xl w-[1280rem] flex items-center justify-center lg:gap-10 px-4 md:px-0 mx-auto gap-6">
          {/* logo */}
          <NavLink to={"/"} className="logo">
            <h1 className="text-2xl md:text-3xl font-bold tracking-widest leading-relaxed pb-0.5">
              EStore<span className="text-4xl text-yellow-400">.</span>
            </h1>
          </NavLink>
          {/* search */}
          <SearchBar />
          {/* navlinks */}
          <NavLinks />
          {/* cart */}
          {token && token !== undefined && (
            <>
              {/* cart */}
              <div
                className="md:mx-4 flex items-center gap-2
          relative pt-1.5"
              >
                <NavLink to={"/cart"} className="cart cursor-pointer relative">
                  <CartIcon />
                  <span className="absolute -top-2 -right-2 bg-yellow-400 w-6 h-6 text-center rounded-full leading-6 font-bold">
                    {amount}
                  </span>
                </NavLink>
                <div></div>
                <span
                  className="cursor-pointer pb-0.5 lg:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <AccountIcon />
                </span>
                <span
                  className="cursor-pointer pb-0.5 hidden lg:block ml-5"
                  onClick={() => logout()}
                >
                  <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 font-medium outline-none">
                    Logout
                  </button>
                </span>
              </div>
            </>
          )}
          {/* login-btn */}
          {token === undefined && (
            <>
              {/* Login btn */}
              <Link to={"/login"} className="mt-1">
                <button className="text-lg bg-yellow-300 w-24 font-medium rounded-md h-8  cursor-pointer hover:bg-yellow-400 hover:text-white">
                  <span>Login</span>
                </button>
              </Link>
            </>
          )}
          {/* mobile account information */}
          {isOpen && (
            <div
              className="mobile--account absolute top-20 bg-slate-100 w-1/2 h-64 right-4 lg:hidden block rounded-xl rounded-tr-none shadow-md"
              onClick={() => setIsOpen(false)}
            >
              <MobileAccountMenu logout={logout} />
            </div>
          )}
        </nav>
      </div>
    </>
  );
};
export default NavBar;
