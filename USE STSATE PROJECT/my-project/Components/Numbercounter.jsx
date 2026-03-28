import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0); 


  const addFive = () => {
    setCount(count + 5);
  }
  

  const Twomultiply = () => {
    setCount(count * 2);
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-red-500 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Number  Counter</h1>

      <div className="bg-white shadow-xl rounded-2xl p-8 mb-6 text-center">
        <h2 className="text-6xl font-extrabold text-blue-700">{count}</h2>
      </div>

      <div className="flex gap-4">
        <button
          onClick={addFive}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-xl font-bold shadow-md transition-transform transform hover:scale-105"
        >
          +5
        </button>
        <button
          onClick={Twomultiply}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-bold text-xl shadow-md transition-transform transform hover:scale-105"
        >
          x2
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
