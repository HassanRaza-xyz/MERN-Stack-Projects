import React, { useState, useEffect } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error,setError ] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false); 
      })
    .catch((error) => {
      console.log("Error in fetching data" , error)
      setError("Failed to fetch data ");
    })
  }, []);   

  return (

    <div className="p-6 bg-gray-900 min-h-screen text-white">
      {users.map(user => (
        <div key={user.id} className="mb-4 p-4 bg-gray-800 rounded">

          {
            error && (
            <div className="text-red-500 font-semibold bg-red-100 p-3 border border-red-300 rounded mb-4">
          {error}
        </div>
            )
          }
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
          <h2>{user.id}</h2>
        </div>

        
      ))}
    </div>
  )
}

export default UsersList;
