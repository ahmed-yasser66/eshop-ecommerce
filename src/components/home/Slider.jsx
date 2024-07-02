import { memo } from "react";
import { Link } from "react-router-dom";

import img from "../../assets/hero.avif";
import imgSmall from "../../assets/hero-sm.webp";

import { Star } from "../../assets/Icons";

const Slider = () => {
  return (
    <section className="section-default p-6 w-11/12 bg-[--color-accent] rounded-xl flex items-center relative overflow-hidden h-[600px]">
      <div className="text-content">
        <div className="header text-4xl lg:text-5xl font-extrabold space-y-5 z-[1] relative">
          <span
            className={`
              block relative z-[1] before:absolute before:-top-1 lg:before:-left-5 before:-left-1 before:bg-[--color-primary] before:w-40 before:h-12 lg:before:w-44 lg:before:h-14 before:-z-[1] before:-rotate-2 before:[clip-path:polygon(100%_0%,100%_100%,0%_95%,0_0% 
            `}
          >
            LET’S
          </span>
          <span className="block">EXPLORE</span>
          <span
            className={`
            block relative z-[1] before:absolute before:-top-2 lg:before:-left-5 before:-left-1 before:bg-electric-violet-500 before:w-52 lg:before:w-60 before:h-14 lg:before:h-16 before:-z-[1] before:-rotate-2 before:[clip-path:polygon(100%_0%,100%_100%,0%_95%,0_0% 
          `}
          >
            UNIQUE
          </span>
          <span className="block">CLOTHES.</span>

          <span className="text-sm lg:text-base font-medium block">
            Explore fashion that's both influential and groundbreaking!
          </span>
          <Link
            to={"/categories/men's clothing"}
            className="btn text-base !font-semibold bg-[--color-black] text-[--color-accent] better-gradient"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div className="absolute -right-5 md:right-4 hidden md:inline-block top-1/2 -translate-y-1/2 z-[2] xl:-bottom-1/2">
        <picture className="hidden md:block">
          <source srcSet={imgSmall} media="(max-width: 1023px)" />
          <source srcSet={img} media="(min-width: 1024px)" />
          <img
            src={imgSmall}
            alt="hero"
            width={500}
            height={543}
            className="w-72 md:w-80 lg:w-[450px] xl:w-[700px] z-10 aspect-[80/87]"
            loading="eager"
            decoding="async"
          />
        </picture>
        <Star className="absolute top-10 left-6 !size-9 text-[--text-color] opacity-15" />
        <Star className="absolute top-16 right-12 !size-9 text-[--text-color] opacity-15" />
        <Star className="absolute top-3/4 right-4 !size-9 text-[--text-color] opacity-15" />
        <Star className="absolute top-2/3 left-4 !size-9 text-[--text-color] opacity-15" />
      </div>
    </section>
  );
};
export default memo(Slider);
