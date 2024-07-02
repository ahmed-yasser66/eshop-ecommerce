import { Link, useNavigate } from "react-router-dom";
import { Facebook, Instagram, Tiktok, X, YouTube } from "../assets/Icons";
import { memo } from "react";

const year = new Date().getFullYear();

const Footer = () => {
  const nav = useNavigate();
  function ScrollToHome() {
    nav("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const socialMediaIcons = [
    {
      path: "https://www.instagram.com",
      alt: "instgram",
      icon: <Instagram />,
    },
    {
      path: "https://tiktok.com",
      alt: "tiktok",
      icon: <Tiktok />,
    },
    {
      path: "https://facebook.com",
      alt: "facebook",
      icon: <Facebook />,
    },
    {
      path: "https://youtube.com",
      alt: "youtube",
      icon: <YouTube />,
    },
    {
      path: "https://twitter.com",
      alt: "twitter",
      icon: <X />,
    },
  ];

  return (
    <footer className="  bg-[--color-footer] text-white mt-16">
      <div className="footer-container section-default flex flex-col-reverse justify-between py-8 gap-7 md:flex-row">
        <div className="f-l border-2 border-slate-300 md:border-0 rounded-xl px-8 md:px-0 py-4 ">
          <h1 className="text-2xl tracking-widest font-[cursive] mb-4">
            E-STORE
          </h1>
          <span className="slogan block mb-6">
            Discover Your Unseen Passion
          </span>
          <hr className="mb-4 md:hidden" />
          <div className="social-links flex gap-2 items-center justify-center mb-8 md:gap-6">
            {socialMediaIcons.map((item) => {
              const { path, icon, alt } = item;
              return (
                <Link
                  className="hover:bg-neutral-600 cursor-pointer size-9 rounded-xl flex items-center justify-center"
                  to={path}
                  aria-label={alt}
                  key={alt}
                >
                  {icon}
                </Link>
              );
            })}
          </div>
          <span>
            All rights Reserved &copy;{" "}
            <span className="year tracking-widest">{year} EStore</span>
          </span>
        </div>
        <div className="f-r border-2 border-slate-300 md:border-0 rounded-xl px-8 py-4">
          <h1 className="text-lg font-medium">HELP</h1>
          <ul className="flex flex-col gap-2 capitalize mt-2 tracking-wider">
            <li
              className="relative after:absolute after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:left-0 w-fit after:rounded-md hover:after:w-full after:duration-300 cursor-pointer"
              onClick={() => ScrollToHome()}
            >
              Home
            </li>
            <li className="relative after:absolute after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:left-0 w-fit after:rounded-md hover:after:w-full after:duration-300 cursor-pointer">
              <Link to={"/products/bycategory"}>products</Link>
            </li>
            <li className="relative after:absolute after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:left-0 w-fit after:rounded-md hover:after:w-full after:duration-300 cursor-pointer">
              <a href={"#categories"}>Categories</a>
            </li>
            <li className="relative after:absolute after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:left-0 w-fit after:rounded-md hover:after:w-full after:duration-300 cursor-pointer">
              <p>Contact Us</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default memo(Footer);
