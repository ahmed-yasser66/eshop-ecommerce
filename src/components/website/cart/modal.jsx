const modal = () => {
  return (
    <div className="modal--container absolute w-9/12 h-2/3 bg-slate-100">
      <div className="modal">
        <p>Are you sure you want to proceed ?</p>
        <button>No</button>
        <button>Yes</button>
      </div>
    </div>
  );
};
export default modal;
