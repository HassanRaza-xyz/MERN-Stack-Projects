import React, { useState, useEffect, useRef } from "react";
import Full from "./full";

function Header() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     alert("Hey Welcome to this page");
  //   }, []);

  //   const a = useRef(0);

  //   useEffect(() => {
  //     a.current = a.current + 1;
  //     console.log(a)
  //     console.log(`Rendering the value of ${a.current}...`);
  //   }, [count]);
  useEffect(() => {
    // console.log(count);
  }, [count]);

  //   const paraRef = useRef(null);
  //   console.log(paraRef.current)

  const countRef = useRef(0);
  useEffect(() => {
      console.log("ref wala ", countRef.current);
  }, [      ]);

  console.log("i am rendered    ");
  const hello = function () {};

  return (
    <>
      <Full color={"red" + " Blue"} />

      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">React useEffect Example</h1>

        <p className="text-2xl mb-4 text-blue-600">Count: {count}</p>

        <button onClick={() => countRef.current++}>Click Me</button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          onClick={() =>
            setCount((prev) => {
              console.log(prev);
              return prev + 1;
            })
          }
        >
          Increase Count
        </button>
      </div>
    </>
  );
}

export default Header;
