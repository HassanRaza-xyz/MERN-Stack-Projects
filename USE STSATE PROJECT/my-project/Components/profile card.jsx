import React, { useState } from "react";

const UserProfileCard = () => {
  const [available, setAvailable] = useState(true);
  const [availabl, setAvailabl] = useState(true);
    const [availab, setAvailab] = useState(true);


  return (
    <div className="  mt-10 mb-10 bg-white px-5 gap-5 sm:px-20  grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 ">
      <div
        className={`bg-gray-200 hover:bg-amber-50  hover:scale-105 p-6 rounded-2xl shadow-lg max-w-sm w-full transition-all duration-700 border-8 ${
          available ? "border-blue-600" : "border-red-500"
        }`}
      >
        <div className="flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-64 h-64 rounded-full border-4 border-gray-300 shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-black">🥼Doctor Jordon </h2>
          <p className="text-blue-600 text-lg font-semibold flex items-center gap-2">🩺 MBBS Doctor</p>
             <p className="text-gray-500 text-xl font-bold">Skin Doctor</p>
                     <p className="text-gray-500 text-sm">📍 New York, USA</p>

        <p className="text-gray-500 text-2xl font-bold">Experience : 5 Years</p>
          <span
            className={`mt-2 text-base font-semibold px-3 py-1 rounded-full ${
              available
                ? ""
                : "bg-red-100 text-red-700"
            }`}      >
     
            {available ? "" : "Doctor is Busy Right Now"}
          </span>

          <button
            onClick={() => setAvailable(!available)}
            className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-all"
          >
            Check Avaliability{" "}
          </button>
        </div>
      </div>

       <div
        className={`bg-gray-200 hover:bg-amber-50  hover:scale-105 p-6 rounded-2xl shadow-lg max-w-sm w-full transition-all duration-700 border-8 ${
          availabl ? "border-blue-600" : "border-green-600"
        }`}
      >
        <div className="flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/men/43.jpg

"
            alt="User"
            className="w-64 h-64 rounded-full border-4 border-gray-300 shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-black">🥼Dr. Andrew </h2>
          <p className="text-blue-600 text-lg font-semibold flex items-center gap-2">🩺 Uk based Doctor</p>
             <p className="text-gray-500 text-xl font-bold">Eyes Special</p>
                     <p className="text-gray-500 text-sm">📍 London,Uk</p>

        <p className="text-gray-500 text-2xl font-bold">Experience : 18 Years</p>
          <span
            className={`mt-2 text-base font-semibold px-3 py-1 rounded-full ${
              availabl
                ? ""
                : "bg-green-100 text-green-700"
            }`}
          >
            {availabl ? "" : "Doctor is Available Right Now"}
          </span>

          <button
            onClick={() => setAvailabl(!availabl)}
            className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-all"
          >
            Check Avaliability{" "}
          </button>
        </div>
      </div>
       <div
        className={`bg-gray-200 hover:bg-amber-50  hover:scale-105 p-6 rounded-2xl shadow-lg max-w-sm w-full transition-all duration-700 border-8 ${
          availab ? "border-blue-600" : "border-yellow-500"
        }`}
      >
        <div className="flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/men/65.jpg"
            alt="User"
            className="w-64 h-64 rounded-full border-4 border-gray-300 shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-black">🥼Doctor Asif </h2>
          <p className="text-blue-600 text-lg font-semibold flex items-center gap-2">🩺 MBBS Doctor</p>
             <p className="text-gray-500 text-xl font-bold">Children Special</p>
                     <p className="text-gray-500 text-sm">📍Rahim Yar Khan, Punjab Pakistan</p>

        <p className="text-gray-500 text-2xl font-bold">Experience : 10 Years</p>
          <span
            className={`mt-2 text-base font-semibold px-3 py-1 rounded-full ${
              availab
                ? ""
                : "bg-yellow-200 text-orange-500"
            }`}
          >
            {availab ? "" : "Doctor is on Vacation Right Now"}
          </span>

          <button
            onClick={() => setAvailab(!availab)}
            className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-all"
          >
            Check Avaliability{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
