import { useState } from "react";

 const Exp = () => {
 
 
 const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };
 
  return(

<div className="flex justify-center">
    <button onClick={handleClick} className="bg-blue-500 text-white p-3  py-2 rounded">
      {loading ? "Loading..." : "Submit"}
    </button>
</div>
  )
 }
  

export default Exp