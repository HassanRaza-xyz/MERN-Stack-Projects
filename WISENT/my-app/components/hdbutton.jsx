const Headerbutton = () => {
  return (
    <div
      className="relative"
      style={{
        background: "linear-gradient(to bottom, #3B4C3CCC 90%)",
      }}
    >
      <div className="text-sm text-white bg-[#3B4C3CC] py-3 bottom-6 z-10 flex flex-wrap gap-3 justify-start px-4 md:ml-20">
        {/* First two buttons in row on all sizes */}
        <div className="flex  gap-3 w-full sm:w-auto sm:flex-nowrap">
          <button className="bg-white/10 hover:text-gray-400  text-xs sm:text-xs transition-all duration-700 px-4 py-2 cursor-pointer rounded-full backdrop-blur-sm border border-[#B2B2B266]">
            Deploy our Package →
          </button>

          <button className="bg-white/10 text-xs sm:text-xs hover:text-gray-400 transition-all duration-700 px-4 py-2 cursor-pointer rounded-full backdrop-blur-sm border border-[#B2B2B266]">
            Book Demo →
          </button>
        </div>

        <div className="w-full justify-center cursor-pointer sm:w-auto bg-green-300/10 px-4 py-1 rounded-full border border-[#B2B2B266] flex items-center flex-wrap">
          <span className="border text-xs sm:text-xs rounded-xl p-1 bg-[#C5FFC8] text-[#121212] hover:text-gray-400 transition-all duration-700 cursor-pointer">
            New!
          </span>
          <button className="ml-2 hover:text-gray-400 text-xs sm:text-xs transition-all duration-700 cursor-pointer">
            Download our new iOS app →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headerbutton;
