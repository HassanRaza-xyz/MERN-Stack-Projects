import React from "react";

const Fruit = () => {
    const fruits = [ 'Apple', 'Orange', 'Banana', 'Kiwi' ]
    return(
<div className="space-y-2 px-10 border py-4">
{fruits.map((fruits) =>(
    <p className="space-y-2 border w-20 rounded-2xl font-bold text-center">{fruits}</p>

)
)}
</div>
    )
}
export default Fruit