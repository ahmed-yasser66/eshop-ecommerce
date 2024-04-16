const Alert = ({ color, msg, close }) => {
  // const Redcolor ="bg-red-500";
  // const Greencolor = "bg-green-400"
  return (
    <div
      className={`alert--container absolute md:right-6 right-2 top-24 md:top-28 ${color}  bg-opacity-50 w-80  md:w-96 h-20 shadow-md rounded-lg flex items-center justify-between px-8 font-medium`}
    >
      <p className="w-2/3 md:w-full">{msg} </p>
      <span className="text-2xl cursor-pointer" onClick={() => close(false)}>
        &#128473;
      </span>
    </div>
  );
};
export default Alert;
