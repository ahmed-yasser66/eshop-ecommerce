import "./loading.css";
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen fixed top-0 left-0 z-50 bg-neutral-600/40 backdrop-blur-sm">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
