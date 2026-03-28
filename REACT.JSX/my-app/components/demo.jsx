import React, { useState, useEffect } from "react";

const Demo = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Live Clock</h1>
      <div className="text-6xl font-mono text-yellow-400 bg-gray-800 px-8 py-4 rounded-lg shadow-lg">
        {time}
      </div>
    </div>
  );
};

export default Demo;
