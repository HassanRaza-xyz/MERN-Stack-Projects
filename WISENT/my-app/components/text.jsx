import { div } from "framer-motion/client";

const Textmiddle = () => {
  return (
    <div className="text-center space-y-4 mt-20 mb-20 px-4">
      <p className="text-3xl sm:text-4xl md:text-5xl font-normal">
        Transform what your AI can do
      </p>
      <p className="text-[#59605D] text-base sm:text-lg md:text-xl">
        Discover how representation engineering is reshaping AI and become <br className="hidden sm:block" />
        part of this exciting transformation
      </p>

      <div className="flex justify-center">
        <span className="mt-5 flex  w-full bg-gradient-to-t from-[#ffffffc2] to-[#e5e5e558] sm:w-[80%] transition-all duration-700  hover:text-gray-400 md:w-[40%] lg:w-[25%] justify-between gap-2 cursor-pointer text-sm font-medicum text-[#121212] h px-4 py-2 rounded-lg shadow-sm  transform group">
          <span className="hover:text-gray-400 hover-bg-gray-400 text-sm transition-all duration-700">
            Deploy our Package
          </span>
          <img
            className="w-6 h-6 bg-[#121212] rounded-lg transition-all duration-700 group-hover:brightness-90"
            src="/arrow.png"
            alt=""
          />
        </span>
      </div>
    </div>
  );
};

export default Textmiddle;
