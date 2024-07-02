import { useEffect, useRef } from "react";

/**
 *
 * @param {*} state
 * @param {*} setState
 * @returns ref
 */
export default function useClickOutside(state, setState) {
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [ref]);

  function handleClickOutside(e) {
    if (
      ref.current &&
      state &&
      !ref.current.contains(e.target) &&
      !e.target.dataset.toggle
    ) {
      setState(Boolean(""));
    }
  }

  return ref;
}
