import { memo, useState } from "react";

import { Link } from "react-router-dom";

import electronics from "../../assets/electronics.webp";
import jewerly from "../../assets/jewerly.webp";
import women from "../../assets/women.webp";
import men from "../../assets/men.webp";

import electronicsSmall from "../../assets/electronics-sm.webp";
import jewerlySmall from "../../assets/jewerly-sm.webp";
import womenSmall from "../../assets/women-sm.webp";
import menSmall from "../../assets/men-sm.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const data = [
  {
    image: electronics,
    imageSmall: electronicsSmall,
    path: "categories/electronics",
    title: "Electronics",
  },
  {
    image: jewerly,
    imageSmall: jewerlySmall,
    path: "categories/jewelery",
    title: "jewelry",
  },
  {
    image: men,
    imageSmall: menSmall,
    path: "categories/men's clothing",
    title: "men-clothes",
  },
  {
    image: women,
    imageSmall: womenSmall,
    path: "categories/women's clothing",
    title: "women's clothes",
  },
];

const CategoriesSection = () => {
  const [isActive, setActive] = useState("Electronics");
  return (
    <section className="section-default" id="categories">
      <h1 className="h1-primary">CATEGORIES</h1>
      <div className="wrapper h-[500px] flex justify-center items-center gap-x-1 md:gap-x-4 rounded-md">
        {data.map((cat) => (
          <div
            key={cat.title}
            className={`relative after:size-full after:absolute after:top-0 after:left-0 after:bg-gradient-to-t after:from-black/45 after:from-30% after:to-transparent h-[100%] ${isActive == cat.title ? "flex-[1_1_250px]" : "md:flex-[0_1_90px] flex-[0_1_20px] cursor-pointer saturate-0 hover:saturate-150"}`}
            onClick={() => setActive(cat.title)}
          >
            <picture>
              <source srcSet={cat.imageSmall} media="(max-width: 767px)" />
              <source srcSet={cat.image} media="(min-width: 768px)" />
              <LazyLoadImage
                src={cat.imageSmall}
                alt={cat.title}
                className="size-full object-cover rounded-md object-[center_15%]"
                effect="blur"
                wrapperClassName="size-full"
              />
            </picture>

            {isActive == cat.title && (
              <Link
                to={cat.path}
                className="absolute bottom-3 right-3 text-white font-medium text-2xl md:text-3xl tracking-wider hover:text-electric-violet-500 duration-300 group/catLink z-[1]"
              >
                {cat.title}
                <span className="group-hover/catLink:inline-block hidden">
                  &rarr;
                </span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
