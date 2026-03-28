import React from "react";

const AdmissionForm = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-3 sm:p-6">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-4 sm:p-8">
        <h1 className="text-3xl font-bold text-center text-teal-600 mb-8">
          Alkhair Orphan
          <br /> School Welfare Program{" "}
        </h1>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Student Name
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Gender
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Class Applying For
              </label>
              <input
                type="text"
                placeholder="e.g. Grade 5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Guardian Name
              </label>
              <input
                type="text"
                placeholder="Enter guardian name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="0300-1234567"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Address
            </label>
            <textarea
              rows="3"
              placeholder="Enter full address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Upload Student Photo
            </label>
            <input
              type="file"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Submit Admission Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
