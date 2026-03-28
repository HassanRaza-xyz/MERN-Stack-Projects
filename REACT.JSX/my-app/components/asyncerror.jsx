import React, { useState, useEffect } from "react";

const Asyncerror = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setError(null)
    setLoading(true)
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch the data of the new users");
      }

      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setError("Error in fetching the data please try Again");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <p className="text-4xl font-bold text-red-600 text-center"> {error}</p>
        <button
          onClick={fetchUsers}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
        >
          Retry
        </button>
      </div>    
    );
  }
  if (loading) {
    return (
      <div className="flex flex-col justify-center min-h-screen items-center gap-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600 border-solid"></div>
        <p className="text-2xl font-semibold text-green-600">Loading...</p>
      </div>  
    );
  }
  return (
    <div className="p-6 ">
        <div className="flex max-w-7xl mx-auto justify-between items-center ">
      <h2 className="text-5xl font-black text-center mb-8">
        UserList using Async Await
      </h2>
      <button onClick={fetchUsers} className="bg-blue-600 p-4 rounded-xl mb-4 flex justify-end px-4 py-2 text-white hover:bg-blue-900 transition-all duration-500">
        Refresh
      </button></div>
      <div className="">
        <div className="gap-6 grid grid-cols-3">
          {data.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 flex flex-col items-start transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-500 hover:border-blue-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold   ">
                  {user.name.charAt(1)}
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                  <p className="text-xs text-gray-500">ID: {user.id}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="text-sm text-gray-700"><span className="font-medium text-lg text-black">Website:</span> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">{user.website}</a></p>
                <p className="text-sm text-gray-700"><span className="font-medium text-lg text-black">Email:</span> <a href={`mailto:${user.email}`} className="underline text-blue-600 hover:text-blue-800">{user.email}</a></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Asyncerror;
