import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="gap-4 tracking-wider font-medium hidden lg:flex text-lg mt-1.5">
      <li aria-label="Home-link" className="hover:text-amber-300 duration-200">
        <Link
          to={"/"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Home
        </Link>
      </li>
      <li
        aria-label="Products-Page"
        className="hover:text-amber-300 duration-200"
      >
        <Link to={"/products/all"}>Products</Link>
      </li>
    </ul>
  );
};
export default NavLinks;
