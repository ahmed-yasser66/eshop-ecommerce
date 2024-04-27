import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BreadCrumb from "../../components/website/breadcrumb/BreadCrumb";
import { CartIcon, StarIcon } from "../../assets/Icons";
import RatingSection from "../../components/website/RatingSection";
import { addItemToCart } from "../../store/CartSlice";
import { useDispatch } from "react-redux";
import LoadingProductDetails from "../../components/website/Home/LoadingProductDetails";
import Cookies from "universal-cookie";
import { animationVar, motion } from "../../utils/vars";
const ProductDetails = () => {
  const id = useParams().id;
  const nav = useNavigate();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const token = new Cookies().get("e-lgn-token");
  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!resp.ok) {
          nav("/");
        }
        const data = await resp.json();
        setProduct(data);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, [id]);
  function formateTitle(title, count) {
    const arr = title.split(" ");
    let newTitle = "";
    for (let i = 0; i < count; i++) {
      if (arr[i] !== undefined) {
        newTitle += ` ${arr[i]}`;
      }
    }
    return newTitle;
  }

  return (
    <motion.div
      variants={animationVar}
      initial="start"
      animate="show"
      exit="exit"
      className="section-min-height mt-8 mx-auto"
    >
      <div className="p--container px-6 lg:px-40">
        {Object.keys(product).length > 0 && (
          <>
            <ul className="flex gap-0 mb-4">
              <li className="hover:text-amber-300 duration-100">
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <BreadCrumb
                  title={product?.category}
                  path={`/categories/${product?.category}`}
                />
              </li>
              <li>
                <BreadCrumb
                  title={formateTitle(product?.title, 3)}
                  path={`/products/${id}`}
                />
              </li>
            </ul>
            <div
              className='p--info grid [grid-template-areas:"b"_"a"_"c"]
            md:[grid-template-areas:"a_b"_"a_c"] md:gap-x-12 justify-center items-center md:mt-6'
            >
              <div className="p-img w-full h-80  [grid-area:a] border-2 md:w-96 border-slate-300 p-6 my-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p--text [grid-area:b]  md:w-9/12 md:mt-6">
                <h1 className="text-3xl font-medium">
                  {formateTitle(product.title, 6)}
                </h1>
                <div className="p--rating flex items-center mt-1.5">
                  <p className="flex items-center gap-1 p-1 text-yellow-500">
                    <span className="font-medium text-lg">
                      {product.rating.rate}
                    </span>
                    <span className=" stoke-1 stroke-gray-200">
                      <StarIcon />
                    </span>
                  </p>
                  <span className="ps-1 text-slate-500">
                    {product.rating.count} reviews
                  </span>
                </div>
              </div>
              <div className="price [grid-area:c] w-52">
                <p className="text-center text-3xl font-bold md:text-left">
                  USD ${product.price}
                </p>
                <button
                  className="flex items-center bg-yellow-300 w-48 py-1.5 rounded-xl cursor-pointer justify-center my-8 hover:bg-yellow-400 hover:text-white duration-200"
                  onClick={
                    token
                      ? () => dispatch(addItemToCart(product))
                      : () => nav("/login")
                  }
                >
                  <CartIcon />
                  <span className="p-1 font-medium capitalize tracking-wider">
                    Add to Cart
                  </span>
                </button>
              </div>
            </div>
            <div className="details--rating lg:px-32 lg:mt-12">
              <div className="p--details mb-6 mt-4">
                <h1 className='text-xl font-medium relative after:absolute after:h-0.5 after:w-full after:bg-slate-300 after:-bottom-1.5 after:left-0 after:content-[""]'>
                  Details
                </h1>
                <p className="py-6 [line-height:1.6] font-medium">
                  {product.description}
                </p>
              </div>
              <div>
                <RatingSection />
              </div>
            </div>
          </>
        )}
        {Object.keys(product).length === 0 && <LoadingProductDetails />}
      </div>
    </motion.div>
  );
};
export default ProductDetails;
