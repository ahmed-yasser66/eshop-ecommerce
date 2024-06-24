import { Link, useRouteError } from "react-router-dom";

import MetaTags from "../components/MetaTags";
import { defaultMetaTags } from "../utils/data";
const Error404 = () => {
  const { data } = useRouteError();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-2">
      <MetaTags {...defaultMetaTags} title={"Page not found | Estore"} />
      <h1 className="text-5xl font-medium tracking-wider">Error</h1>
      <h1 className="text-9xl font-bold text-red-600 tracking-widest">404</h1>
      <h1 className="text-5xl uppercase font-medium tracking-wide">
        page not found
      </h1>
      <span>{data}</span>
      <Link
        to={"/"}
        className="text-xl capitalize underline font-medium text-yellow-500 tracking-widest"
      >
        &#129044; Back to home
      </Link>
    </div>
  );
};

export default Error404;
