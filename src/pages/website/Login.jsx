import { Link, useNavigate } from "react-router-dom";
import { useTokenContext } from "../../utils/TokenContext";
import { useCallback, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Alert from "../../components/website/Alert";
import { animationVar, motion } from "../../utils/vars";
const Login = () => {
  const cookies = new Cookies();
  const { token, setToken } = useTokenContext();
  const [err, setErr] = useState(false);
  const nav = useNavigate();
  const [pending, setPending] = useState(false);
  useEffect(() => {
    if (token) {
      nav("/");
    }
  }, []);
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
      nav("/");
    } catch (error) {
      setErr(true);
      setPending(false);
    }
    setPending(false);
  });

  return (
    <motion.div
      variants={animationVar}
      initial="start"
      animate="show"
      exit="exit"
    >
      {err && (
        <Alert
          color={"bg-red-400"}
          msg={"provide valid username and password"}
          close={setErr}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className=" flex md:items-center md:gap-x-20 justify-center max-w-screen-xl mx-auto min-h-[calc(100vh_-_75px)] px-5"
      >
        <img
          src="/src/assets/login.svg"
          alt="login"
          width={350}
          height={350}
          className="size-[350px] hidden md:block xl:size-[600px]"
        />
        <div className="inputs w-full md:w-1/2 flex flex-col h-fit md:justify-center max-w-[350px] mt-16 sm:pt-0 border-4 p-4 rounded-lg md:border-0">
          <h1 className="text-4xl md:hidden font-semibold my-7 text-center underline">
            Login
          </h1>
          <label htmlFor="username" className="text-neutral-600">
            Username
          </label>
          <input
            type="text"
            placeholder="username"
            id="username"
            defaultValue={"mor_2314"}
            className="h-10 outline-none border-2 border-gray-400 rounded-md ps-3"
            name="username"
          />
          <label htmlFor="password" className="text-neutral-600 mt-7">
            Password
          </label>
          <input
            type="password"
            placeholder="username"
            id="password"
            defaultValue={"83r5^_"}
            className="h-10 outline-none border-2 border-gray-400 rounded-md ps-3 mb-7"
            name="password"
          />
          <button
            className="h-10 w-full rounded-md bg-yellow-300 font-medium gradient shadow-lg hover:bg-yellow-400 hover:text-white cursor-pointer"
            disabled={pending}
          >
            {pending ? "please wait..." : "Login"}
          </button>
          <p className="text-center my-5">
            Don't have an account?{" "}
            <Link to={"/register"} className="hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </motion.div>
  );
};
export default Login;
