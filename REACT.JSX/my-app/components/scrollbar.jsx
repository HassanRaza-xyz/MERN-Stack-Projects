import React from 'react';

const Scroll = () => {
  return (
    <div className="w-full overflow-x-auto border p-4">
      <div className="flex space-x-4 w-max">
        <div className="w-40 h-40 bg-red-400"></div>
        <div className="w-40 h-40 bg-blue-400"></div>
        <div className="w-40 h-40 bg-green-400"></div>
        <div className="w-40 h-40 bg-yellow-400"></div>
        <div className="w-40 h-40 bg-purple-400"></div>
      </div>
    </div>
  );
};

export default Scroll;
