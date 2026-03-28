const Examplejustfordummy = () => {
  return (
    <div>
      <nav>
        <div className="absolute inset-0 opacity-0"></div>
        <div className="flex items-center justify-between py-6 max-w-[80vw] m-auto">
          <span>
            <img className="lg:w-40 w-25" src="logo.svg" alt="logo" />
          </span>
          <div className="flex gap-4">
            <button className="bg-[#ff0000] hover:bg-red-700 font-normal text-sm text-white p-2 px-4 rounded">
              Sign In
            </button>
            <button className="bg-[#cc0101] hover:bg-red-700 font-normal text-sm text-white p-2 px-4 rounded">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Examplejustfordummy;