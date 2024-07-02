import { Link } from "react-router-dom";

function BreadCrumb({ children }) {
  return (
    <div className="font-medium text-sm tracking-wider mb-3 md:mb-6">
      <Link to={"/"} className="hover:text-electric-violet-500 duration-300">
        Home&nbsp;
      </Link>
      {children}
    </div>
  );
}
BreadCrumb.Create = ({ children, path, active = false }) => {
  return (
    <>
      <span>&nbsp;&#62;&nbsp;</span>
      <Link
        to={path}
        className={`capitalize ${active ? "text-[--text-color] opacity-80 pointer-events-none" : "hover:text-electric-violet-500 duration-300"}`}
      >
        {children}
      </Link>
    </>
  );
};

export default BreadCrumb;
