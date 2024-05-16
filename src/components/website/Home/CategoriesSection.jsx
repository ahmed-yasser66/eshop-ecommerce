import { NavLink } from "react-router-dom";

const data = [
  {
    path: "categories/electronics",
    extraClassName: "[grid-area:a] bg-[url('/src/assets/electronics.avif')]",
    h1: "Electronics",
  },
  {
    path: "categories/jewelery",
    extraClassName: "[grid-area:b] bg-[url('/src/assets/jewerly.avif')]",
    h1: "jewelry",
  },
  {
    path: "categories/men's clothing",
    extraClassName: "[grid-area:c] bg-[url('/src/assets/mens.avif')]",
    h1: "men-clothes",
  },
  {
    path: "categories/women's clothing",
    extraClassName: "[grid-area:d] bg-[url('/src/assets/women.avif')] ",
    h1: "women's clothes",
  },
];
const categoryClassName =
  "bg-yellow-200 min-h-[250px] relative rounded-2xl flex items-center justify-center cursor-pointer hover:bg-yellow-300 text-white duration-500  bg-cover bg-left-top sm:bg-center after:content-[''] after:w-full after:h-full after:absolute after:bg-transparent after:opacity-45 overflow-hidden after:z-[1] hover:after:bg-slate-500 after:transition-all after:duration-500 group";
const categories = data.map((item, idx) => (
  <NavLink
    to={item.path}
    className={`${categoryClassName} ${item.extraClassName}`}
    key={item.path + idx}
  >
    <h1
      className={`absolute bottom-3 right-4 uppercase font-medium tracking-wider z-[2]  group-hover:tracking-widest group-hover:transition-all group-hover:duration-500 group-hover:text-3xl`}
    >
      {item.h1}
    </h1>
  </NavLink>
));

const CategoriesSection = () => {
  return (
    <div
      className="mt-16 md:mt-0 max-w-screen-2xl px-7 sm:px-16 lg:px-[90px] mx-auto xl:p-24"
      id="categories"
    >
      <div className="md:flex justify-between">
        <h1 className="uppercase text-xl text-center md:text-left my-12 underline underline-offset-8 font-medium tracking-wider">
          Categories
        </h1>
        <NavLink
          to={"/products/all"}
          className="uppercase text-xl text-center md:text-left my-12 font-bold tracking-wider text-yellow-better hidden md:block hover:cursor-pointer hover:text-amber-300 duration-150"
        >
          All Products &#8594;
        </NavLink>
      </div>

      <div className='cats-container gap-12 md:gap-4 text-2xl grid [grid-template-areas:"a""b""c""d"] lg:[grid-template-areas:"a_b_b""a_c_d"] md:[grid-template-areas:"a_b""c_d"]'>
        {categories}
      </div>
    </div>
  );
};
export default CategoriesSection;
