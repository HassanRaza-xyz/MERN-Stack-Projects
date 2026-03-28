// import React tools
import React, { useEffect, useRef } from "react";

// import CountUp
import { CountUp } from "countup.js";

// Counter component
const Counter = () => {
  // reference to the span element
  const counterRef = useRef(null);

  // animation runs when component mounts
  useEffect(() => {
    const countUp = new CountUp(counterRef.current, 12345, {
      duration: 3, // duration in seconds
      separator: ",", // adds comma separators: 12,345
    });

    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  }, []);

  // JSX to render
  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-semibold text-gray-600">Total Visitors</h2>
      <span
        ref={counterRef}
        className="text-5xl font-bold text-orange-500"
      >
        0
      </span>
    </div>
  );
};

export default Counter;
