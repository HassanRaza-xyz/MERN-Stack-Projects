import React, { useState, useEffect } from "react";

const TwoUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setUsers([{ name: "Error loading users", email: "N/A", phone: "N/A" }]);
        setLoading(ture);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-8">DATA of All the Users 
        in a Single Page 
      </h1>
      <div className="space-y-4 max-w-md mx-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-bold text-blue-400">{user.name}</h2>
            <p className="text-gray-300">{user.email}</p>
            <p className="text-gray-400 text-sm">{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwoUsers;
