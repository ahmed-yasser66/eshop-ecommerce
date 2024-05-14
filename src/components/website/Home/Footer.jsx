import { useEffect, useState } from "react";
import { Facebook, Instagram, Tiktok, X, YouTube } from "../../../assets/Icons";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const [year, setYear] = useState("");
  const nav = useNavigate();
  function ScrollToHome() {
    nav("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    const thisYear = new Date().getFullYear();
    setYear(thisYear);
  }, []);
  return (
    <footer className="  bg-gray-600 text-white mt-28">
      <div className="footer-container flex flex-col-reverse justify-between px-4 lg:px-20 py-8 gap-7 mx-auto md:mx-0 md:flex-row lg:w-full">
        <div className="f-l border-2 border-slate-300 md:border-0 rounded-xl px-8 py-4 ">
          <h1 className="text-2xl tracking-widest font-[cursive] mb-4">
            E-STORE
          </h1>
          <span className="slogan block mb-6">
            Discover Your Unseen Passion
          </span>
          <hr className="mb-4 md:hidden" />
          <div className="social-links flex gap-2 items-center justify-center mb-8 lg:mb-14 md:gap-6">
            <Link
              to={"https://www.instagram.com/"}
              className="hover:bg-slate-500 cursor-pointer p-1 rounded-xl"
              aria-label="instgram"
              alt="instgram"
            >
              <Instagram />
            </Link>
            <Link
              to={"https://tiktok.com/"}
              className="hover:bg-slate-500 cursor-pointer p-2 rounded-xl"
              aria-label="tiktok"
              alt="tiktok"
            >
              <Tiktok />
            </Link>
            <Link
              to={"https://facebook.com"}
              className="hover:bg-slate-500 cursor-pointer p-1 rounded-xl"
              aria-label="facebook"
              alt="facebook"
            >
              <Facebook />
            </Link>
            <Link
              to={"https://twitter.com/"}
              className="hover:bg-slate-500 cursor-pointer p-2 rounded-xl"
              aria-label="twitter"
              alt="twitter"
            >
              <X />
            </Link>
            <Link
              to={"https://youtube.com"}
              className="hover:bg-slate-500 cursor-pointer p-1 rounded-xl"
              aria-label="youtube"
              alt="youtube"
            >
              <YouTube />
            </Link>
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
              <Link to={"/products/all"}>products</Link>
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
export default Footer;
