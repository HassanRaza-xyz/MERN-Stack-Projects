import React, { useState } from "react";

const Welcome = () => {
  const [lightOn, setLightOn] = useState(false);

  return (
<div className={`flex min-h-screen flex-col justify-center   ${lightOn ? "bg-yellow-500" : "bg-gray-900"} `}
>

    <div className="text-center mt-10">
      <h2 className="sm:text-5xl  text-4xl mb-6">
        {lightOn ? " 💡  " : " 🔌 Connect to the Port "}
      </h2>

      <button
        onClick={() => setLightOn(!lightOn)}
        className={` text-white text-3xl p-3  rounded-2xl mb-10 ${
          lightOn ? "bg-gray-900" : "bg-yellow-500"
        }`}
      >
        {lightOn ? "Turn off " : "to turn on the light"}
      </button>
    </div></div>
  );
};

export default Welcome;
