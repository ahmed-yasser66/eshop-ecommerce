import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../assets/landing.avif";
import img2 from "../../../assets/landing2.avif";
import img3 from "../../../assets/landing3.avif";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Slider = () => {
  return (
    <main className="h-full md:h-96 md:section-min-height relative select-none">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{ enabled: true }}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper w-full h-full"
        loop
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        breakpoints={{
          300: {
            navigation: {
              enabled: false,
            },
          },
          768: {
            navigation: {
              enabled: true,
            },
          },
        }}
      >
        <SwiperSlide className="relative w-screen h-screen">
          <LazyLoadImage
            className="object-cover w-full h-full object-[60%] md:object-center"
            src={img}
            alt={img}
            effect="blur"
            width={"100vw"}
            height={"100vh"}
          />
          <div className="swiper--text absolute left-4 top-6 w-72 md:w-80 md:top-1/2 md:translate-y-[-50%] md:left-20 lg:left-36">
            <h1 className="text-3xl font-medium text-white  md:text-3xl sm:text-3xl md:tracking-widest md:leading-relaxed lg:leading-normal lg:text-5xl tracking-widest">
              FreeShipping
              <span className="block">on orders</span>
              <span>over $50</span>
            </h1>
            <button className="bg-yellow-300 px-3 py-1.5 mt-4 text-2xl rounded-lg font-medium md:text-2xl  lg:mt-10 md:py-3 md:px-12 hover:bg-yellow-400 hover:text-white">
              <Link to={"/products/all"}>Shop Now</Link>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <LazyLoadImage
            effect="blur"
            width={"100vw"}
            height={"100vh"}
            src={img2}
            alt={img2}
            className="object-cover w-full h-full object-[60%] md:object-center"
          />
          <div className="swiper--text absolute left-4 top-6 w-72 md:w-80 md:top-1/2 md:translate-y-[-50%] md:left-20 lg:left-36">
            <h1 className="text-3xl font-medium text-white  md:text-3xl sm:text-3xl md:tracking-widest md:leading-relaxed lg:leading-normal lg:text-5xl tracking-widest">
              Up to 60% Disount
              <span className="block">Electronics</span>
            </h1>
            <button className="bg-yellow-300 px-3 py-1.5 mt-4 text-2xl rounded-lg font-medium md:text-2xl  lg:mt-10 md:py-3 md:px-12 hover:bg-yellow-400 hover:text-white">
              <Link to={"/categories/electronics"}>Shop Now</Link>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <LazyLoadImage
            effect="blur"
            width={"100vw"}
            height={"100vh"}
            src={img3}
            alt={img3}
            className="object-cover w-full h-full object-[60%] md:object-top"
          />
          <div className="swiper--text absolute left-4 top-6 w-72 md:w-80 md:top-1/2 md:translate-y-[-50%] md:left-20 lg:left-36">
            <h1 className="text-3xl font-medium text-white  md:text-3xl sm:text-3xl md:tracking-widest md:leading-relaxed lg:leading-normal lg:text-5xl tracking-widest">
              FreeShipping
              <span className="block">on new </span>
              <span>Jewerly</span>
              <span> Collection</span>
            </h1>
            <button className="bg-yellow-300 px-3 py-1.5 mt-4 text-3xl rounded-lg font-medium md:text-2xl  lg:mt-10 md:py-3 md:px-12 hover:bg-yellow-400 hover:text-white">
              <Link to={"/categories/jewelery"}>Shop Now</Link>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};
export default memo(Slider);
