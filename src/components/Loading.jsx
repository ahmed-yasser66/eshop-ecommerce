import "./loading.css";
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full fixed z-50">
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
