import React, { useState, useEffect } from "react";

const SingleUser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("called");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error in Fetching Data", error);
        setError("Something went wrong while fetching users.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mb-4">Users List</h2>

      {loading && (
        <div className="text-blue-600 bg-blue-100 border border-blue-300 p-4 mb-4 rounded">
       Leading the users... Please wait a Second...
        </div>
      )}

      {error && (
        <div className="text-red-600 bg-red-100 border border-red-300 p-4 mb-4 rounded">
          {error}
        </div>
      )}

      <ul className="space-y-4">
        {!loading && !error && users.map((user) => (
          <li key={user.id} className="border-2 p-2">
            <p className="border-b">
              <strong>Id: {user.id}</strong>
            </p>
            <p className="border-b">
              <strong>Name: </strong> {user.name}
            </p>
            <p className="border-b">
              <strong>Address: </strong> {user.address.city}
            </p>
            <p className="border-b">
              <strong>Email: </strong> {user.email}
            </p>
            <p className="border-b">
              <strong>Phone: </strong> {user.phone}
            </p>
            <p className="border-b">
              <strong>Website: </strong> {user.website}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleUser;
