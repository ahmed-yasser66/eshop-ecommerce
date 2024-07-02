import { Link, Navigate, redirect } from "react-router-dom";
import { useTokenContext } from "../context/TokenContext";
import { useCallback, useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

import img from "/src/assets/login.svg";
import MetaTags from "../components/MetaTags";
import { defaultMetaTags } from "../utils/data";
const Login = () => {
  const { token, setToken } = useTokenContext();
  const [err, setErr] = useState(false);
  const [pending, setPending] = useState(false);

  const handleSubmit = useCallback(async function (e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInfo = JSON.stringify(Object.fromEntries(formData));
    try {
      setPending(true);
      const resp = await fetch("https://fakestoreapi.com/auth/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: userInfo,
      });
      const data = await resp.json();
      cookies.set("e-lgn-token", data);
      setToken(data);
      e.target.reset();
      return redirect("/");
    } catch (error) {
      setErr(error.message);
    } finally {
      setPending(false);
    }
  });

  if (token) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <section className="section-default px- flex items-center justify-center min-h-96 md:min-h-screen">
      <MetaTags {...defaultMetaTags} title={"Login | EStore"} img={img} />
      <form
        onSubmit={handleSubmit}
        className=" flex md:items-center xl:!gap-x-10 justify-center w-full md:bg-[--color-accent rounded-lg py-12 !px-2 md:px-10 md:shadow-lg"
      >
        <img
          src={img}
          alt="register"
          width={350}
          height={350}
          className="size-80 hidden md:block lg:size-[500px]"
        />
        <div className="inputs w-full md:w-1/2 flex flex-col h-fit md:justify-center max-w-[350px] lg:max-w-[450px] sm:pt-0 !px-4 !py-7 lg:p-0 rounded-lg shadow-lg md:shadow-none bg-[--color-accent] md:bg-transparent">
          <h1 className="text-4xl text-center md:text-left font-semibold underline [text-decoration-thickness:6px] decoration-electric-violet-600 mb-12">
            Login
          </h1>
          <label
            htmlFor="username"
            className="text-[--text-color] rounded-lg border-2 border-gray-400 relative"
          >
            <input
              type="text"
              placeholder=""
              id="username"
              defaultValue={"mor_2314"}
              className="h-10 outline-none border-2 ps-3 peer/username"
              name="username"
            />
            <span className="absolute -translate-y-1/2 font-medium px-2 bg-[--bg-main-color] top-0 left-3 peer-placeholder-shown/username:top-1/2 peer-focus/username:top-0 duration-300">
              username
            </span>
          </label>
          <label
            htmlFor="password"
            className="text-[--text-color] rounded-lg border-2 border-gray-400 relative my-7"
          >
            <input
              type="password"
              placeholder=""
              id="password"
              defaultValue={"83r5^_"}
              className="h-10 outline-none border-2 ps-3 peer/password"
              name="password"
            />
            <span className="absolute -translate-y-1/2 font-medium px-2 bg-[--bg-main-color] top-0 left-3 peer-placeholder-shown/password:top-1/2 peer-focus/password:top-0 duration-300">
              password
            </span>
          </label>
          {err ? <span>{err}</span> : null}
          <button
            className="btn bg-electric-violet-500 text-white font-medium hover:bg-electric-violet-700 duration-300 better-gradient"
            disabled={pending}
          >
            {pending ? "please wait..." : "Login"}
          </button>
          <p className="text-center text-sm sm:text-base font-medium mt-5">
            Don't have an account?{" "}
            <Link to={"/register"} className="hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};
export default Login;
