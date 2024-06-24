import { Link, Navigate, redirect } from "react-router-dom";

import Cookies from "universal-cookie";

import { defaultMetaTags } from "../utils/data";
import img from "/src/assets/register.svg";

import MetaTags from "../components/MetaTags";

const token = new Cookies().get("e-lgn-token")?.token;

const Register = () => {
  if (token) {
    return <Navigate to={"/"} replace />;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInfo = JSON.stringify(Object.fromEntries(formData));
    try {
      const resp = await fetch("https://fakestoreapi.com/users", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: userInfo,
      });
      return redirect("/");
    } catch (error) {}
  }
  return (
    <section className="section-default  flex items-center justify-center min-h-96 md:min-h-screen">
      <MetaTags {...defaultMetaTags}>
        <link rel="prefetch" href="/src/assets/register.svg" />
      </MetaTags>
      <form
        className=" flex md:items-center xl:!gap-x-10 justify-center w-full md:bg-[--color-accent rounded-lg py-12 !px-2 md:px-10 md:shadow-lg"
        onSubmit={handleSubmit}
      >
        <img
          src={img}
          alt="register"
          width={350}
          height={350}
          className="size-80 hidden md:block lg:size-[500px]"
        />
        <div className="inputs w-full md:w-1/2 flex flex-col h-fit md:justify-center max-w-[350px] lg:max-w-[450px] sm:pt-0 !px-4 !py-7 lg:p-0 rounded-lg shadow-lg md:shadow-none bg-[--color-accent md:bg-transparent">
          <h1 className="text-4xl text-center md:text-left font-semibold underline [text-decoration-thickness:6px] decoration-electric-violet-600 mb-12">
            Register
          </h1>
          <label
            htmlFor="email"
            className="text-[--text-color rounded-lg border-2 border-gray-400 relative"
          >
            <input
              type="text"
              id="email"
              className="h-10 outline-none border-2 ps-3 peer/email"
              placeholder=""
              name="email"
            />
            <span className="absolute -translate-y-1/2 font-medium px-2 bg-[--color-accent top-0 left-3 peer-placeholder-shown/email:top-1/2 peer-focus/email:top-0 duration-300">
              Email
            </span>
          </label>

          <label
            htmlFor="username"
            className="text-[--text-color rounded-lg border-2 border-gray-400 mt-7 relative"
          >
            <input
              type="text"
              id="username"
              className="h-10 outline-none border-2 border-gray-400 rounded-md ps-3 peer/username"
              name="username"
              placeholder=""
            />
            <span className="absolute -translate-y-1/2 font-medium px-2 bg-[--color-accent top-0 left-3 peer-placeholder-shown/username:top-1/2 peer-focus/username:top-0 duration-300">
              username
            </span>
          </label>

          <label
            htmlFor="password"
            className="text-[--text-color rounded-lg border-2 border-gray-400 mt-7 relative"
          >
            <input
              type="password"
              id="password"
              className="h-10 outline-none border-2 border-gray-400 rounded-md ps-3 peer/password"
              name="password"
              placeholder=""
            />
            <span className="absolute -translate-y-1/2 font-medium px-2 bg-[--color-accent top-0 left-3 peer-placeholder-shown/password:top-1/2 peer-focus/password:top-0 duration-300">
              password
            </span>
          </label>
          <button className="btn bg-electric-violet-500 text-white font-medium hover:bg-electric-violet-700 duration-300 my-5 better-gradient">
            Sign Up
          </button>
          <p className="text-center text-sm sm:text-base font-medium">
            Already have an account?{" "}
            <Link to={"/login"} className="hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};
export default Register;
