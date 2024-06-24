import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import useClickOutside from "../utils/useClickOutside";

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");
  const opens = setOpenName;
  const close = () => setOpenName("");
  return (
    <ModalContext.Provider value={{ openName, setOpenName, opens, close }}>
      {children}
    </ModalContext.Provider>
  );
};
function ToggleButton({ children, name, classes }) {
  const { openName, opens, close } = useContext(ModalContext);
  function handleClick() {
    openName !== name || openName == "" ? opens(name) : close();
  }

  return (
    <button
      onClick={handleClick}
      data-toggle="true"
      className={classes}
      aria-label="button"
    >
      {children}
    </button>
  );
}

function Window({ children, position, name, preventScroll = false }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useClickOutside(name, close);
  useEffect(() => {
    if (name === openName && preventScroll) {
      document.body.style.height = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
    }
  }, [openName]);

  if (name !== openName) return null;
  return createPortal(
    <div
      ref={ref}
      className="modal h-fit absolute z-50 top-0 right-0"
      style={position}
    >
      {children}
    </div>,
    document.body,
  );
}
function Toggler({ children, name, ...props }) {
  const { openName, opens, close } = useContext(ModalContext);

  function handleClick() {
    openName !== name || openName == "" ? opens(name) : close();
  }
  const clonedElement = cloneElement(children, {
    onClick: handleClick,
    "data-toggle": true,
    ...props,
  });
  return clonedElement;
}

Modal.Window = Window;
Modal.ToggleButton = ToggleButton;
Modal.Toggler = Toggler;

export default Modal;
