export const animationVar = {
  start: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: {
      duration: 0.6,
    },
  },
};
export { motion } from "framer-motion";
