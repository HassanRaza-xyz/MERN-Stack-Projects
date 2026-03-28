import React, { useState } from "react";

export default function PostRequestExample() {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const sendPostRequest = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        body: body,
        userId: 1223,
      }),
    })
      .then((response) => response.json())
      .then((data) => setResponseData(data))
      .catch((error) => setError(error.message));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h2 className="text-xl font-bold mb-4">POST REQUEST WITH USER INPUT </h2>

      <form onSubmit={sendPostRequest} className="space-y-4">
        <input
          type="text"
          placeholder="Write Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded border"
        />
        <textarea
          placeholder="Enter Your Text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full p-2 rounded  border "
        ></textarea>
        <button
          type="submit"
          className="px-4  py-2 bg-blue-600 cursor-pointer text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Send Data{" "}
        </button>
      </form>

      {responseData && (
        <pre>
          <h2 className="mt-4 bg-gray-100 p-4 rounded text-sm overflow-auto">
            {JSON.stringify(responseData, null, 3)}
          </h2>
        </pre>
      )}
      {error && <p className="mt-4 text-red-500">Error: {error}</p>}
    </div>
  );
}
