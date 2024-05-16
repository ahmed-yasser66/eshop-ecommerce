import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../../utils/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useRef } from "react";

const slides = data.map((item) => (
  <SwiperSlide className="relative w-full h-screen" key={item.content}>
    <div className="absolute w-full h-full [z-index:2] bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
    <LazyLoadImage
      className="object-cover w-full h-full object-[60%] md:object-center"
      src={item.img}
      alt={item.img}
      effect="blur"
      width={"100%"}
      height={"100vh"}
    />
    <div className="swiper--text absolute left-1/2 [transform:translateX(-50%)] bottom-12 min-w-72 md:top-1/2 md:translate-y-[-50%] md:left-20 lg:left-36 [z-index:11] text-center text-pretty break-words md:text-left">
      <h1 className="text-3xl font-bold text-white sm:text-4xl md:tracking-widest md:leading-relaxed lg:leading-normal tracking-widest max-w-xl">
        {item.content}
      </h1>
      <button className="bg-yellow-300 px-7 py-3 mt-4 text-xl rounded-lg font-bold md:text-2xl lg:mt-10 md:py-3 md:px-12 hover:bg-yellow-400 hover:text-white shadow-xl duration-300">
        <Link to={item.path}>Shop Now!</Link>
      </button>
    </div>
  </SwiperSlide>
));
const Slider = () => {
  // handle slider height depending on navbar height
  const sectionRef = useRef();
  useEffect(() => {
    let navbarHeight = 0;
    const navbar = document.getElementsByTagName("nav");
    if (navbar) {
      navbarHeight = navbar[0].getBoundingClientRect().height;
      sectionRef.current.style.height =
        window.innerHeight - navbarHeight + "px";
    }
  }, []);

  return (
    <main
      className="[height:calc(100vh_-_75.6px)] relative select-none bg-slate"
      ref={sectionRef}
    >
      <Swiper
        className="mySwiper w-full h-full max-w-screen-2xl"
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
        loop
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        breakpoints={{
          300: {
            navigation: {
              enabled: false,
            },
            pagination: {
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
        {slides}
      </Swiper>
    </main>
  );
};
export default Slider;
