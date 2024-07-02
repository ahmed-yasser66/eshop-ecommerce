import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
const AddingProductAnimation = ({ image, title }) => {
  const [position, setPosition] = useState({});
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const cartPosition =
      document.documentElement.style.getPropertyValue("--cart-position");
    const [top, left] = cartPosition.split("-");
    setPosition({ top, left });
  }, []);

  async function onClick() {
    const { top, left } = scope.current.getBoundingClientRect();

    await animate(".image-animation", { opacity: 1 });
    await animate(
      ".image-animation",
      { top: position.top + "px", left: position.left + "px", opacity: 0 },
      { duration: 0.5, at: "<" },
    );
    await animate(
      ".image-animation",
      { top, left, opacity: 0 },
      { duration: 0.000001 },
    );
  }

  return (
    <div ref={scope} className="bg-red-500 h-8" onClick={onClick}>
      <img
        src={image}
        alt={title}
        width={43}
        height={43}
        className="absolute image-animation"
      />
    </div>
  );
};

export default AddingProductAnimation;
