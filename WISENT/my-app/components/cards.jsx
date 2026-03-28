import React from "react";
import { FaRegNewspaper } from "react-icons/fa6";

const Card = () => {
  return (
    <div
      className="bg-cover bg-center px-4 py-10"
      style={{
        backgroundImage: "url('/g.png')",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid mb-10 md:grid-cols-[0.32fr_0.68fr] gap-10">
          <div className="cursor-pointer">
            <span className="inline-block bg-[#121212] text-[#DEE4E2] text-sm font-medium px-4 py-1 rounded-full">
              Blog
            </span>
            <div className="cursor-pointer mt-4">
              <button className="flex justify-between bg-gradient-to-t from-[#ffffffc2] to-[#e5e5e558] mt-10 w-full gap-2 hover:text-gray-400 hover-bg-gray-400 cursor-pointer text-sm font-normal text-[#121212] bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg shadow-sm transition-all duration-700 transform group">
                <span className="hover:text-gray-400 bg-gradient-to-t from-[#ffffffc2] to-[#e5e5e558] hover-bg-gray-400 text-sm transition-all duration-700">
                  View More Articles
                </span>
                <img
                  className="w-6 h-6 bg-black rounded-lg transition-all duration-700 group-hover:brightness-90"
                  src="/Badge.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal leading-tight mb-2 text-[#121212]">
              Latest insights on representation engineering{" "}
            </h2>
            <p className="text-[#333] text-base sm:text-lg md:text-xl font-normal">
              Stay updated with the latest research, trends, and applications in
              AI representation engineering.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img
              src="card1.png"
              alt="Article 1"
              className="w-full h-[400px] object-cover transition-all duration-500 grayscale-0 group-hover:grayscale"
            />
            <div className="absolute inset-0 bg-opacity-60 p-2 flex flex-col justify-end pointer-events-none">
              <div className="bg-[#121212] rounded-xl py-2 px-4">
                <h3 className="text-base sm:text-lg font-normal text-white">
                  Understanding Representation Engineering in AI Models
                </h3>
                <p className="text-xs sm:text-sm text-[#8B9290] mt-1">
                  Learn how representation engineering is revolutionizing the
                  way we control and customize AI.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img
              src="card2.png"
              alt="Article 2"
              className="w-full h-[400px] object-cover transition-all duration-500 grayscale-0 group-hover:grayscale"
            />
            <div className="absolute inset-0 bg-opacity-60 p-2 flex flex-col justify-end pointer-events-none">
              <div className="bg-[#121212] rounded-xl py-2 px-4">
                <h3 className="text-base sm:text-lg font-normal text-white">
                  How Adaptive LLMs Are Changing the AI Landscape
                </h3>
                <p className="text-xs sm:text-sm text-[#8B9290] mt-1">
                  Explore the capabilities of Adaptive LLMs and how they're
                  creating new possibilities for AI applications.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img
              src="card3.png"
              alt="Article 3"
              className="w-full h-[400px] object-cover transition-all duration-500 grayscale-0 group-hover:grayscale"
            />
            <div className="absolute inset-0 bg-opacity-60 p-2 flex flex-col justify-end pointer-events-none">
              <div className="bg-[#121212] rounded-xl py-2 px-4">
                <h3 className="text-base sm:text-lg font-normal text-white">
                  Reducing AI Hallucinations with Representation Engineering
                </h3>
                <p className="text-xs sm:text-sm text-[#8B9290] mt-1">
                  Discover how representation engineering techniques can
                  significantly reduce AI hallucinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
