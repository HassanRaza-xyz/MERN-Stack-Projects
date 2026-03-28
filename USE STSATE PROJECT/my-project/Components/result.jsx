import React, { useState } from "react";

const NumberChecker = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkNumber = () => {
    const num = parseInt(number);

    if (isNaN(num)) {
      setResult("❌ Enter valid marks");
    } else if (num >= 90) {
      setResult("🎉 Grade: A+");
    } else if (num >= 80) {
      setResult("✅ Grade: A");
    } else if (num >= 70) {
      setResult("👍 Grade: B");
    } else if (num >= 60) {
      setResult("🟡 Grade: C");
    } else {
      setResult("❌ Grade: Fail");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">
        Check Your Marks out of 100
      </h1>

      {/* Input */}
      <input
        type="text"
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter the Marks"
        className="w-full max-w-xs px-4 py-2 text-base sm:text-lg border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Button */}
      <button
        onClick={checkNumber}
        className="w-full max-w-xs bg-blue-600 text-white px-6 py-2 text-base sm:text-lg rounded-full hover:bg-blue-700 transition-all"
      >
        Check
      </button>

      {/* Result */}
      {result && (
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-medium text-gray-700 text-center">
          {result}
        </p>
      )}
    </div>
  );
};

export default NumberChecker;
