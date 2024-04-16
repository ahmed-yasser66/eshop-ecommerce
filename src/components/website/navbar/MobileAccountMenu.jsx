const MobileAccountMenu = ({ logout }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center h-64">
      <p className="text-2xl font-medium">Hello,</p>
      <p className="font-medium text-xl">mor_2314</p>
      <button
        className="bg-red-500 text-white px-8 py-2 mt-8 rounded-lg hover:bg-red-600 font-medium cursor-pointer "
        onClick={() => logout()}
      >
        Logout
      </button>
    </div>
  );
};
export default MobileAccountMenu;
