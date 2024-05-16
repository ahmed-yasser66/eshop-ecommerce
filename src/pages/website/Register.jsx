import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { animationVar, motion } from "../../utils/vars";
const Register = () => {
  const token = new Cookies().get("e-lgn-token");
  const nav = useNavigate();
  const [err, setErr] = useState(false);
  useEffect(() => {
    if (token) {
      nav("/");
    }
  }, []);

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
      nav("/login");
    } catch (error) {
      setErr(true);
    }
  }
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
      <form className=" flex md:items-center md:gap-x-20 justify-center max-w-screen-xl mx-auto min-h-[calc(100vh_-_75px)] px-2">
        <img
          src="/src/assets/register.svg"
          alt="register"
          width={350}
          height={350}
          className="size-[380px] hidden md:block xl:size-[600px]"
        />
        <div className="inputs w-full md:w-1/2 flex flex-col h-fit  md:justify-center max-w-[350px] mt-16 sm:pt-0 border-4 p-4 rounded-lg md:border-0">
          <h1 className="text-4xl md:hidden font-semibold my-7 text-center underline">
            Register
          </h1>
          <label htmlFor="email" className="text-neutral-600">
            Email
          </label>
          <input
            type="text"
            placeholder="email"
            id="email"
            className="h-10 outline-none border-2 border-gray-400 rounded-md ps-3"
            name="email"
          />

          <label htmlFor="username" className="text-neutral-600 mt-7">
            Username
          </label>
          <input
            type="text"
            placeholder="username"
            id="username"
            className="h-10 outline-none border-2 border-gray-400 rounded-md ps-3"
            name="username"
          />

          <label htmlFor="password" className="text-neutral-600 mt-7">
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            id="password"
            className="h-10 outline-none border-2 border-gray-400 rounded-md ps-3 mb-7"
            name="password"
          />
          <button className="h-10 w-full rounded-md bg-yellow-300 font-medium gradient shadow-lg hover:bg-yellow-400 hover:text-white cursor-pointer">
            Login
          </button>
          <p className="text-center my-5">
            Already have an account?{" "}
            <Link to={"/login"} className="hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </motion.div>
  );
};
export default Register;
