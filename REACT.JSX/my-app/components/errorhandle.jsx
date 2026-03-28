import React, { useState, useEffect } from "react";

const Errorhandle = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
     
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error in fetching the data please try Again");
      });
  }, []);
  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        {" "}
        <p className="text-4xl font-bold text-red-600 "> {error}</p>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="border-2 border-green-600  flex justify-center items-center min-h-screen">
        <p className="text-4xl border-2 border-green-600 bg-green-300 p-4 font-bold ">
         Still Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 ">
      <h2 className="text-5xl font-black text-center mb-4">List of Users</h2>
      <div className="">
        <div className="">
          {data.map((user) => (
            <div key={user.id} className="border-b">
              <p>
                <strong>ID: </strong>
                {user.id}
              </p>
              <p>
                <strong>Name: </strong>
                {user.name}
              </p>
              <p>
                <strong>Website: </strong>
                {user.website}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Errorhandle;
