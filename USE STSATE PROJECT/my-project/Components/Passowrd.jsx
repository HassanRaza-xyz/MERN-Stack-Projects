import React, { useState } from "react";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkStrength(value);
  };

  const checkStrength = (value) => {
    if (value.length < 6) {
      setStrength("Weak");
    } else if (
      value.match(/[A-Z]/) &&
      value.match(/[a-z]/) &&
      value.match(/[0-9]/)
    ) {
      setStrength("Strong");
    } else {
      setStrength("Medium");
    }
  };

  const getColor = () => {
    if (strength === "Weak") return "text-red-600";
    if (strength === "Medium") return "text-yellow-500";
    if (strength === "Strong") return "text-green-600";
    return "";
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
        className="w-full p-2 border rounded mb-4"
      />
      {password && (
        <p className={`text-lg font-semibold ${getColor()}`}>
          Strength: {strength}
        </p>
      )}
    </div>
  );
};

export default PasswordChecker;
