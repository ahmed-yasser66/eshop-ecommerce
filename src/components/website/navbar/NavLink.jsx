import { Link } from "react-router-dom";

const NavLinks = ({ title, path }) => {
  return (
    <ul className="gap-4 tracking-wider font-medium hidden lg:flex text-lg mt-1.5">
      <Link
        to={"/"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Home
      </Link>
      <Link to={"/products/all"}>Products</Link>
    </ul>
  );
};
export default NavLinks;
