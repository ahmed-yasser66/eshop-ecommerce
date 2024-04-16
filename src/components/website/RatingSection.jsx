import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const RatingSection = () => {
  const [hover, setHover] = useState(undefined);
  const [rate, setRate] = useState(false);
  const token = new Cookies().get("e-lgn-token");
  const nav = useNavigate();
  return (
    <div className="review--section">
      {/* leave a review */}
      {!rate && (
        <>
          <h1 className='text-2xl font-medium relative after:absolute after:h-0.5 after:w-full after:bg-slate-300 after:-bottom-1.5 after:left-0 after:content-[""] mb-16'>
            Rating
          </h1>
          <div className="stars flex justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={
                  i <= hover
                    ? "text-yellow-300"
                    : "text-white stroke-1 stroke-black"
                }
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(undefined)}
                onClick={token ? () => setRate(i + 1) : () => nav("/login")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            ))}
          </div>
        </>
      )}
      {/* feedback message */}
      {rate && (
        <div className="feeback--section text-center mb-8">
          <div className="flex gap-3 items-center justify-center text-zinc-700 font-[Tahoma]">
            <span className="text-7xl font-bold">{rate}</span>
            <div className="flex  flex-col text-lg leading-normal tracking-wide pt-2">
              <span>Out Of</span>
              <span>5 Stars</span>
            </div>
          </div>
          <p className="capitalize text-xl font-semibold mt-6">
            Thank you for your feedback
          </p>
        </div>
      )}
    </div>
  );
};
export default RatingSection;
