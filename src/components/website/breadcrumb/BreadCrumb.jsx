import { Link } from "react-router-dom";

const BreadCrumb = ({ title, path }) => {
  return (
    <>
      <span>&#62; </span>
      <Link to={path} className="text-yellow-400">
        <span className="capitalize"> {title}</span>
      </Link>
    </>
  );
};
export default BreadCrumb;
