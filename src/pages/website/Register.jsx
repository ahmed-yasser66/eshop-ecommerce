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
      <div className="section-min-height flex flex-col items-center justify-center">
        <form
          action="/login"
          className="bg-slate-50 w-11/12 max-w-80 min-h-96 rounded-xl shadow-[0_0_4px_rgba(0,0,0,0.150)] pb-10"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className='text-3xl font-bold text-center relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-slate-300 after:bottom-0 after:left-0 mt-4 pb-4 leading-7'>
            Register
          </h1>
          <div className="user--container text-xl mt-8 text-center px-8">
            <input
              type="text"
              className="outline-none border-b-slate-300 border-transparent border-b-2 w-full h-12 bg-transparent "
              placeholder="username"
              name="username"
              required
            />
          </div>
          <div className="pass--container text-xl  mt-8 text-center px-8">
            <input
              type="password"
              className="outline-none bg-transparent border-b-slate-300 border-transparent border-b-2 w-full"
              placeholder="password"
              name="password"
              required
            />
          </div>
          <div className="email--container text-xl  mt-8 text-center px-8">
            <input
              type="email"
              className="outline-none bg-transparent border-b-slate-300 border-transparent border-b-2 w-full"
              placeholder="e-mail"
              name="email"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-yellow-300 w-3/4 h-10 text-xl font-bold rounded-md mt-10 shadow-md hover:bg-yellow-400 hover:text-white transition-colors duration-200"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-center mt-2 text-sm">
            <Link
              to={"/login"}
              className="text-sky-600 capitalize hover:underline tracking-wide"
            >
              Already Have an account ?
            </Link>
          </div>
        </form>
      </div>
    </motion.div>
  );
};
export default Register;
