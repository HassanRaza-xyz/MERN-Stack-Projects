import React, { useState } from "react";

const ButtonChange = () => {
  const [hassan, setHassan] = useState("Click me Now");
  const [color, setColor] = useState("bg-green-300");

  const Click = () => {
    setHassan("✅ Thanks for clicking me! Now this text is changed.");
    setColor("bg-green-500");
    setClicked(true);
  };

  return (
    <div className="text-center mt-16 space-y-6">

      <p className="text-gray-600 text-lg">
        Click the button below 
      </p>

      <button
        className={`${color} text-white text-2xl px-6 py-4 rounded-xl shadow-lg transition duration-700 
        hover:scale-105 hover:shadow-xl font-semibold 
      }`}
        onClick={Click}
      >
        {hassan}
      </button>

     
    </div>
  );
};

export default ButtonChange;
