import React, { useState } from "react";

const Evenodd = () => {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  function ChecktheResult() {
    if (num === "") {
      setResult("❌ Please Enter a Number");
    } else if (num % 2 === 0) {
      setResult("✅ This is an Even Number");
    } else {
      setResult("❌ This is an Odd Number");
    }
  }

  return (
    <div className="min-h-screen flex text-3xl px-4 font-bold flex-col items-center justify-center bg-gray-400">
      <h1
        className="text-2xl sm:text-3xl lg:text-4xl

"
      >
        {" "}
        Check if the Number is Even or Odd{" "}
      </h1>
      <input
        className="text-2xl mt-4 w-full max-w-xs py-2 border px-1  rounded-xl "
        type="text"
        placeholder="Enter a number"
        onChange={(e) => setNum(e.target.value)}
      />
      <button
        className="text-black bg-blue-600 px-6 mt-4 p-2 font-normal text-lg  rounded-full"
        onClick={ChecktheResult}
      >
        Check
      </button>
      <p className="text-black text-lg sm:text-xl lg:text-2xl">{result}</p>
    </div>
  );
};
export default Evenodd;
