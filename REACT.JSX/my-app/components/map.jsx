import React from "react";

const Mapx = () => {
  const userData = [
    { id: 1, name: "Hassan", age: "18", city: "ryk", country: "Pakistan" },
    { id: 2, name: "Amir", age: "27", city: "Delhi", country: "India" },
    { id: 3, name: "Asif", age: "12", city: "sdq", country: "London" },
    { id: 4, name: "Ali", age: "29", city: "ryk", country: "Pakistan" },
  ];

  return (
    <div className="p-4">
      <table className="p-2">
       
        <tbody>
          {userData.map((item) => (
            <tr className="">
              <th className="border border-black px-4 py-2">{item.id}</th>
              <th className="border border-black px-4 py-2">{item.name}</th>
              <th className="border border-black px-4 py-2">{item.age}</th>
              <th className="border border-black px-4 py-2">{item.city}</th>
              <th className="border border-black px-4 py-2">{item.country}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Mapx;
