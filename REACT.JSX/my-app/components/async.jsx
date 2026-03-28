import { useEffect, useState } from "react";

const Asyncawait = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchusers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(" Failed to fetch users data ");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching users", error);
        setError(error.message);
      }
    };
    fetchusers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-green-700 to-green-500 p-8 text-white">
      <h2 className="text-5xl font-extrabold mb-8 text-center drop-shadow-md">
        Async and await Api integration
      </h2>
      {error && (
        <div className="bg-red-600 text-white p-4 mb-6 rounded text-center font-semibold">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {user.map((data) => (
          <div
            key={data.id}
            className="bg-white text-gray-800 rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-500 w-14 h-14 rounded-full shadow-2xl text-white text-2xl font-bold flex justify-center items-center">
                {data.name.charAt(0).toUpperCase()}
              </div>{" "}
              <h3 className="text-2xl font-bold mb-4 text-green-700">
                {data.name}
              </h3>
            </div>
            <p>
              <strong>ID: </strong> {data.id}
            </p>
            <p>
              <strong>Phone: </strong> {data.phone}
            </p>
            <p>
              <strong>Email: </strong> {data.email}
            </p>
            <p>
              <strong>Website: </strong> {data.website}
            </p>
            <p>
              <strong>City: </strong> {data.address.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Asyncawait;
