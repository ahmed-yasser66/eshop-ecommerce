import { Link } from "react-router-dom";
import { animationVar, motion } from "../../utils/vars";
const Error404 = () => {
  return (
    <motion.div
      variants={animationVar}
      initial="start"
      animate="show"
      exit="exit"
      className="w-full h-screen flex flex-col items-center justify-center gap-2"
    >
      <h1 className="text-5xl font-medium tracking-wider">Error</h1>
      <h1 className="text-9xl font-bold text-red-600 tracking-widest">404</h1>
      <h1 className="text-5xl uppercase font-medium tracking-wide">
        page not found
      </h1>
      <Link
        to={"/"}
        className="text-xl capitalize underline font-medium text-yellow-400 tracking-widest"
      >
        &#129044; Back to home
      </Link>
    </motion.div>
  );
};

export default Error404;
