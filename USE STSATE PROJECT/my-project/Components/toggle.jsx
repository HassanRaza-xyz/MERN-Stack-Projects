import React, { useState } from "react";

const ToggleName = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="text-center mt-10">
      <button
        onClick={() => setShow(!show)}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Toggle Name
      </button>

      {show && <h2 className="mt-4 text-xl">👋 Hello, Hassan!</h2>}
    </div>
  );
};

export default ToggleName;
