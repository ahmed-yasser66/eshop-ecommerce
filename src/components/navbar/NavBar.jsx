import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Auth from "./Auth";
import CartNavIcon from "./CartNavIcon";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const userIconRef = useRef();
  const [position, setPosition] = useState({ user: "", toggle: "" });

  useEffect(() => {
    if (!userIconRef.current) return;
    function handlePosition() {
      const { top, left } = userIconRef.current.getBoundingClientRect();
      setPosition({
        toggle: {
          top: top < 0 ? 57 : top + 40 + "px",
          left: left - 220 + 74 + 36 + "px",
          width: "fit-content",
        },
        user: {
          top: top < 0 ? 57 : top + 40 + "px",
          left: left - 220 + 74 + 36 + "px",
          width: "fit-content",
        },
      });
    }
    handlePosition();
    window.addEventListener("resize", handlePosition);

    return () => window.removeEventListener("resize", handlePosition);
  }, []);

  return (
    <nav>
      <div className="wrapper section-default flex flex-wrap md:flex-nowrap items-center justify-between pb-4 gap-y-4 text-[--text-color">
        {/* 🅱️🅱️🅱️🅱️ LOGO 🅱️🅱️🅱️🅱️ */}
        <Link
          to={"/"}
          className="logo relative text-2xl font-extrabold tracking-widest leading-relaxed after:block after:absolute after:size-2 after:bg-electric-violet-600 after:-right-3 after:bottom-2.5 after:rounded-full me-5 order-1"
        >
          EStore
        </Link>
        {/* 🧭🧭 NAVIGATION 🧭🧭 */}
        <div className="nav-links-wrapper flex gap-12 items-center order-2 md:order-3">
          {/* NAVLINKS */}
          {/* <ul className="gap-12 hidden lg:flex">
            {[
              { label: "Home", path: "/" },
              { label: "Products", path: "/products/bycategory" },
            ].map((item) => (
              <li key={item.label + "-nav-link"}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `${isActive ? "text-electric-violet-600" : null} text-lg font-medium`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul> */}
          {/* 🔑🔑🔑 AUTHORIZATION 🔑🔑🔑 */}
          <div className="auth flex items-center gap-x-6" ref={userIconRef}>
            <ThemeToggle position={position.toggle} />
            <Auth position={position.user} />
            <CartNavIcon />
          </div>
        </div>
        {/*🔍🔍🔍 SEARCH... 🔍🔍🔍 */}
        <Search />
      </div>
    </nav>
  );
};
export default NavBar;
