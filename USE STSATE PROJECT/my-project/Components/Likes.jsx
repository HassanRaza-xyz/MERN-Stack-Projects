import React, { useState } from "react";

const Likes = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="  mb-10 p-4 mt-10">
        <img className="sm:w-1/4  sm:h-1/4 w-1/2 h-1/2 " src="ws.jpg" alt="" />
      <h2 className="text-2xl mt-2 mb-1">Your Pic Has {likes} Likes</h2>
      <button
        onClick={() => setLikes(likes + 1)}
        className="bg-blue-500 text-white text-2xl sm:px-8 px-3 py-3 rounded-2xl"
      >
        Like 👍
      </button>
    </div>
  );
};

export default Likes;
