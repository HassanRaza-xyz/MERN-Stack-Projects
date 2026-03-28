import React, { useState } from "react";

const Trim = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);

  const handleClick = () => {
    if (!input.trim()) {
      setMessage("Please Write a Valid text ");
      setValid(false);
    } else {
      setMessage(` ${input.trim()}`);
      setValid(true);
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center p-20 space-y-4 flex-col ">
      <input
        type="text"
        placeholder="Please enter a text with spaces"
        onChange={(e) => setInput(e.target.value)}
        className="px-2 py-3 border-2 rounded-lg w-80"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500  px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition duration-500"
      >
        Check
      </button>

      {message && (
        valid ? (
            <p className="text-3xl"><span className="text-3xl font-bold text-green-600">Your Trim text is: </span>{message}</p>
        ) : (
            <p className="text-3xl font-bold text-red-600">{message}</p>
        )
      )}
    </div>
  );
};
export default Trim;
