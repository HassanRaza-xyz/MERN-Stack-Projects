import React, { useState } from "react";

const Color = () =>{
            const [color, setColor] = useState();

        return(
    <div className={`flex min-h-screen flex-col justify-center items-center bg-gray-900 text-white ${color ? "bg-green-500" : "bg-red-500"}`}>

    <button
    onClick={()  => setColor(!color)}
    className= {` text-white text-2xl px-8 py-5 rounded-2xl text-center mt-10 ${ color ? "bg-red-600" : "bg-green-600"}  `}

    >
        {color ? "Change to Red bg-red-500" : "Change to Green bg-green-500"}
    </button>

</div>

    )
}
export default Color;   