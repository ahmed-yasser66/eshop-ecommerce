import { Link } from "react-router-dom";

const BreadCrumb = ({ title, path }) => {
  return (
    <>
      <span>&#62; </span>
      <Link to={path} className="text-yellow-better hover:text-amber-300">
        <span className="capitalize"> {title}</span>
      </Link>
    </>
  );
};
export default BreadCrumb;
