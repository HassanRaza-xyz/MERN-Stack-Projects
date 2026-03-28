  import React, { useState } from "react";

  const TemperatureChecker = () => {
  const [temp, setTemp] = useState("");
  const [result, setResult] = useState("");

  const checkTemperature = () => {
  const t = parseFloat(temp);

  if (isNaN(t)) {
  setResult("❌Enter a Valid Temprature ");
  } else if (t > 45) { 
  setResult("🔥 Its very Hot Outside ");
  } else if (t >= 20) {
  setResult("🌤️ The Weather is Normal ");
  } else {
  setResult("❄️It's very Cold Outside ");
  }
  };

  return (
  <div className="flex flex-col items-center justify-center px-4 min-h-screen bg-blue-100">
  <h1 className="text-4xl  mb-6">Teamprature Checker</h1>
  <input
  type="text"
  placeholder="Enter the Temprature"
  onChange={(e) => setTemp(e.target.value)}
  className="border px-4 py-2 text-2xl rounded mb-4"
  />
  <button onClick={checkTemperature} className="bg-green-600 text-white px-5 py-2 text-2xl rounded-full">
  Check the Weather
  </button>
  <p className="mt-4 text-lg">{result}</p>
  </div>
  );
  };

   export default TemperatureChecker;
