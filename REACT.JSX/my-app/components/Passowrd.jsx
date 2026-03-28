import { useState } from "react";
import { Lock } from "lucide-react";

export default function PasswordForm({ onSubmit }) {
  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(""); // ✅ Dynamic error state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("Passwords do not match!"); // show error inline
      return;
    }
    setError(""); // clear error if matched
    if (onSubmit) {
      onSubmit(passwordData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-blue-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-teal-400"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-blue-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-green-400"></div>
      </div>

      <div className="max-w-md w-full space-y-6 sm:space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="mx-auto h-16 w-16 sm:h-20 sm:w-20 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-blue-100 shadow-lg border-2 border-white group hover:scale-105 transition-transform duration-300">
            <Lock className="h-8 w-8 sm:h-10 sm:w-10 text-teal-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Update Password
          </h1>
        </div>

        {/* Form */}
        <form
          className="space-y-4 border p-6 border-gray-200 rounded-3xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
            Set Your New Password
          </h2>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password *
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              value={passwordData.newPassword}
              onChange={(e) =>
                setPasswordData({ ...passwordData, newPassword: e.target.value })
              }
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password *
            </label>
            <input
              type="password"
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                error
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-black"
              } text-black`}
              value={passwordData.confirmPassword}
              onChange={(e) =>
                setPasswordData({ ...passwordData, confirmPassword: e.target.value })
              }
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-br from-[#55fcff] via-[#94afd8] to-[#8e75e7] text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-200"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
