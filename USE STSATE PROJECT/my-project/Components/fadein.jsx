import React from "react";

const OverlayCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 space-x-6">
      <div className="relative w-1/2 group">
        <img src="/ws.jpg" alt="Avatar" className="w-full h-auto" />

        <div
          className="absolute bottom-full w-full h-0 
          bg-blue-500 duration-3000 transition-all overflow-hidden 
          group-hover:bottom-0 group-hover:h-full flex items-center justify-center"
        >
          <span className="text-white text-xl font-bold">
            Thanks for Watching
          </span>
        </div>
      </div>

      <button
        type="button"
        className="flex items-center justify-center space-x-2 bg-red-600 text-white 
        text-xl font-semibold px-6 py-3 rounded-full shadow-md transition-all 
        duration-500 ease-in-out hover:bg-red-700 hover:scale-110 hover:shadow-lg"
      >
        <span className="text-2xl"> <a href="https://www.youtube.com"> ▶</a></span>
        <span>Watch it on YouTube</span>
      </button>
    </div>
  );
};

export default OverlayCard;
