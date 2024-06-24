import { Link, redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";

import Modal from "../Modal";
import { AccountIcon, CartIcon } from "../../assets/Icons";
import defaultUserPic from "../../assets/default-user.svg";
import { useTokenContext } from "../../context/TokenContext";
import { clearCart } from "../../store/CartSlice";

const Auth = ({ position }) => {
  const { setToken } = useTokenContext();
  const dispatch = useDispatch();
  const cookie = new Cookies();

  function logout() {
    setToken(undefined);
    cookie.remove("e-lgn-token");
    dispatch(clearCart());
    return redirect("/");
  }

  if (!cookie.get("e-lgn-token")?.token) {
    return (
      <Link
        to={"/register"}
        className="btn-sm !font-semibold bg-[--color-black] text-[--color-accent] better-gradient "
      >
        SignUp
      </Link>
    );
  }

  return (
    <Modal>
      <Modal.ToggleButton name="userIcon">
        <AccountIcon />
      </Modal.ToggleButton>
      <Modal.Window position={position} name="userIcon">
        <div className="w-56 bg-[--color-primary pt-4 rounded-md overflow-hidden shadow-nice">
          <div className="user-info flex items-center gap-x-4 border-b border-b-neutral-300/85 pb-2 px-4">
            <img src={defaultUserPic} alt="user" width={45} height={45} />
            <span className="flex flex-col font-medium">
              John Doe
              <span className="text-xs text-neutral-600 font-light">
                John@gmail.com
              </span>
            </span>
          </div>
          <div className="user-links text-sm font-medium">
            <Link
              to={"/cart"}
              className="flex items-center gap-x-4 hover:bg-[--color-accent p-3 border-b border-b-neutral-300/85"
            >
              <CartIcon size={[24, 24]} />
              My Cart
            </Link>
            <div
              className="flex items-center gap-x-4 hover:bg-[--color-accent p-3 border-b border-b-neutral-300/85 cursor-pointer"
              onClick={logout}
            >
              <Logout size={[24, 24]} />
              Logout
            </div>
          </div>
        </div>
      </Modal.Window>
    </Modal>
  );
};
function Logout({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size[0]}
      height={size[1]}
      fill="currentColor"
    >
      <path d="m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z" />
    </svg>
  );
}
export default Auth;
