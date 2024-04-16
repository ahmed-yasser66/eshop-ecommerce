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
      <div className="section-min-height flex flex-col items-center justify-center">
        <form
          action="/login"
          className="bg-slate-50 w-80 h-96 rounded-xl shadow-[0_0_4px_rgba(0,0,0,0.150)] mt-12"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className='text-3xl font-bold text-center relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-slate-300 after:bottom-0 after:left-0 mt-4 pb-4 leading-7'>
            Login
          </h1>
          <div className="user--container text-xl mt-8 text-center px-8">
            <input
              type="text"
              className="outline-none border-b-slate-300 border-transparent border-b-2 w-full h-12 bg-transparent "
              placeholder="username"
              name="username"
            />
            <span className="block text-start text-base text-gray-600">
              username: mor_2314
            </span>
          </div>
          <div className="pass--container text-xl  mt-8 text-center px-8">
            <input
              type="password"
              className="outline-none bg-transparent border-b-slate-300 border-transparent border-b-2 w-full"
              placeholder="password"
              name="password"
            />
            <span className="block text-base text-start text-gray-600">
              password: 83r5^_
            </span>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-yellow-300 w-3/4 h-10 text-xl font-bold rounded-md mt-10 shadow-md hover:bg-yellow-400 hover:text-white transition-colors duration-200"
              type="submit"
            >
              {pending ? "please wait.." : "Login"}
            </button>
          </div>
          <div className="flex justify-center mt-2 text-sm">
            <Link
              to={"/register"}
              className="text-sky-600 capitalize hover:underline tracking-wide"
            >
              create new account ?
            </Link>
          </div>
        </form>
      </div>
    </motion.div>
  );
};
export default Login;
