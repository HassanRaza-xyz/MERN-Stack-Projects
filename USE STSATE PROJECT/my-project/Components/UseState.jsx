import React, { useState } from "react";

    const Counter = () => {
        const [count, setCount] = useState(0);
            const Add = () => setCount (count + 1);
            const Minus = () => setCount( count - 1);

        return (
           <div className="  text-center text-xl mt-5 font-semibold">
Click on <span className="text-green-500 text-2xl font-bold">Green  Button </span> to Add 1 and <span className="text-red-500 text-2xl font-bold">Red Button </span>to Minus 1
        <div className=" bg-blue-200 items-center rounded-2xl text-center mx-auto  p-4 max-w-4/5 md:max-w-[50%] mt-3">
<h2 className="text-2xl font-bold mb-4">Counter : {count}</h2>
<div className="  flex justify-center gap-10">

<button className="text-white cursor-pointer font-bold transition-colors duration-700   rounded-full p-2 w-30 mt-8 flex justify-center mx-10 lg:mx-18  bg-green-400 " onClick={Add}>Add +</button>
<button className={` text-white font-bold transition-colors duration- rounded-full p-2 w-30 mt-8 flex justify-center mx-10 lg:mx-18  bg-red-400
${count === 0 ? "cursor-not-allowed opacity-50" : "cursor-pointer "}`} 
onClick={Minus}
disabled={count === 0}
   > Minus -
    </button>
 </div>

</div>
</div>
      
    );   };
    export default Counter;
