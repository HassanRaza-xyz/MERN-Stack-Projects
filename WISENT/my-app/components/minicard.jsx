import React from "react";

const TechSection = () => {
  return (
    <div
      className="p-3 sm:p-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/b.png')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[0.32fr_0.68fr] gap-6 md:gap-10 mb-10">
        <div className=" space-y-4">
          <span className="inline-block bg-[#121212] text-[#DEE4E2] text-xs sm:text-sm font-medium px-4 py-1 rounded-full">
            Our tech
          </span>

          <div>
            <button className="flex cursor-pointer justify-between items-center mt-10 w-full gap-2 text-sm font-normal bg-gradient-to-t from-[#ffffffc2] to-[#e5e5e558]  text-[#121212] bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg shadow-sm transition-all duration-700 transform group">
              <span className="group-hover:text-gray-400 bg-gradient-to-t from-[#ffffffc2] to-[#e5e5e558] transition-all  duration-700">
                See our Research
              </span>
              <img
                className="w-6 h-6 bg-black rounded-lg transition-all duration-700 group-hover:brightness-90"
                src="/eye.png"
                alt=""
              />
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-normal leading-tight mb-2 text-[#59605D]">
            Building Better AI Through Brain Insights
          </h2>
          <p className="text-[#333] text-lg font-normal leading-relaxed">
            Traditional AI is a black box. Representation engineering opens it
            up, giving you control. Our technology lets you seamlessly add
            representation engineering to your applications, without long
            training and unnecessary efforts.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-[#FFFFFF66] relative shadow-lg rounded-xl overflow-hidden">
          <img
            className="absolute h-10 w-10 sm:h-12 sm:w-12 top-6 sm:top-8 left-2 rounded-2xl"
            src="m3.png"
            alt=""
          />
          <div className="p-2 sm:p-6 ml-12 sm:ml-10">
            <h3 className="text-base sm:text-lg font-normal text-[#000000]">
              Works with existing models
            </h3>
            <p className="text-[#727876] text-sm sm:text-base font-normal mt-2">
              Enhance your AI models, seamlessly integrating with your existing
              system.
            </p>
          </div>
        </div>

        <div className="bg-[#FFFFFF66] relative shadow-lg rounded-xl overflow-hidden">
          <img
            className="absolute h-10 w-10 sm:h-12 sm:w-12 top-6 sm:top-8 left-2 rounded-2xl"
            src="m2.png"
            alt=""
          />
          <div className="p-2 sm:p-6 ml-12 sm:ml-10">
            <h3 className="text-base sm:text-lg font-normal text-[#000000]">
              Simple API with SDK
            </h3>
            <p className="text-[#727876] text-sm sm:text-base font-normal mt-2">
              Clean, intuitive interface with just a few lines of code.
            </p>
          </div>
        </div>

        <div className="bg-[#FFFFFF66] relative shadow-lg rounded-xl overflow-hidden">
          <img
            className="absolute h-10 w-10 sm:h-12 sm:w-12 top-6 sm:top-8 left-2 rounded-2xl"
            src="m1.png"
            alt=""
          />
          <div className="p-2 sm:p-6 ml-12 sm:ml-10">
            <h3 className="text-base sm:text-lg font-normal text-[#000000]">
              Flexible deployment
            </h3>
            <p className="text-[#727876] text-sm sm:text-base font-normal mt-2">
              Cloud API or on-premise for your sensitive apps. Flexible &
              secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSection;
