import { memo } from "react";
import { NavLink } from "react-router-dom";

const CategoriesSection = () => {
  return (
    <div className="mt-28" id="categories">
      <div className="md:flex justify-between md:px-16">
        <h1 className="uppercase text-2xl text-center md:text-left my-12 underline underline-offset-8 font-medium tracking-wider">
          Categories
        </h1>
        <NavLink
          to={"/products/all"}
          className="uppercase text-2xl text-center md:text-left my-12 font-medium tracking-wider text-yellow-400 hidden md:block hover:cursor-pointer hover:text-yellow-500"
        >
          All Products &#8594;
        </NavLink>
      </div>

      <div className='cats-container px-6 lg:px-20 xl:px-32 gap-12 md:gap-4 text-2xl grid [grid-template-areas:"a""b""c""d"] lg:[grid-template-areas:"a_b_b""a_c_d"] md:[grid-template-areas:"a_b""c_d"]'>
        <NavLink
          to={"categories/electronics"}
          className={`bg-yellow-200 min-h-[35vh] relative rounded-2xl flex items-center justify-center cursor-pointer hover:bg-yellow-300 text-white duration-500 [grid-area:a] bg-[url('/src/assets/electronics.avif')] bg-cover bg-left-top sm:bg-center after:content-[''] after:w-full after:h-full after:absolute after:bg-transparent after:opacity-45 overflow-hidden after:z-[1] hover:after:bg-slate-500 after:transition-all after:duration-500 group`}
        >
          <h1
            className={`absolute bottom-3 right-4 uppercase font-medium tracking-wider z-[2]  group-hover:tracking-widest group-hover:transition-all group-hover:duration-500 group-hover:text-3xl`}
          >
            Electronics
          </h1>
        </NavLink>

        <NavLink
          to={"categories/jewelery"}
          className={`bg-yellow-200 min-h-[35vh] relative rounded-2xl flex items-center justify-center cursor-pointer hover:bg-yellow-300 text-white duration-500 [grid-area:b] bg-[url('/src/assets/jewerly.avif')] bg-cover bg-left-top sm:bg-center after:content-[''] after:w-full after:h-full after:absolute after:bg-transparent after:opacity-45 overflow-hidden after:z-[1] hover:after:bg-slate-500 after:transition-all after:duration-500 group `}
        >
          <h1
            className={`absolute bottom-3 right-4 uppercase font-medium tracking-wider z-[2]  group-hover:tracking-widest group-hover:transition-all group-hover:duration-500 group-hover:text-3xl`}
          >
            jewelry
          </h1>
        </NavLink>

        <NavLink
          to={"categories/men's clothing"}
          className={`bg-yellow-200 min-h-[35vh] relative rounded-2xl flex items-center justify-center cursor-pointer hover:bg-yellow-300 text-white duration-500 [grid-area:c] bg-[url('/src/assets/mens.avif')] bg-cover bg-left-top sm:bg-center after:content-[''] after:w-full after:h-full after:absolute after:bg-transparent after:opacity-45 overflow-hidden after:z-[1] hover:after:bg-slate-500 after:transition-all after:duration-500 group `}
        >
          <h1
            className={`absolute bottom-3 right-4 uppercase font-medium tracking-wider z-[2]  group-hover:tracking-widest group-hover:transition-all group-hover:duration-500 group-hover:text-3xl`}
          >
            men-clothes
          </h1>
        </NavLink>

        <NavLink
          to={"categories/women's clothing"}
          className={`bg-yellow-200 min-h-[35vh] relative rounded-2xl flex items-center justify-center cursor-pointer hover:bg-yellow-300 text-white duration-500 [grid-area:d] bg-[url('/src/assets/women.avif')] bg-cover bg-left-top sm:bg-center after:content-[''] after:w-full after:h-full after:absolute after:bg-transparent after:opacity-45 overflow-hidden after:z-[1] hover:after:bg-slate-500 after:transition-all after:duration-500 group `}
        >
          <h1
            className={`absolute bottom-3 right-4 uppercase font-medium tracking-wider z-[2]  group-hover:tracking-widest group-hover:transition-all group-hover:duration-500 group-hover:text-3xl`}
          >
            women's clothes
          </h1>
        </NavLink>
      </div>
    </div>
  );
};
export default memo(CategoriesSection);
