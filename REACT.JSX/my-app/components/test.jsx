import React from "react";

function ClinicDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Clinic Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Logout
        </button>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {[
          { title: "Patients", color: "green", desc: "Manage all patient records" },
          { title: "Appointments", color: "yellow", desc: "Track all appointments" },
          { title: "Doctors", color: "purple", desc: "Manage doctor profiles" },
        ].map((card) => (
          <div key={card.title} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{card.title}</h2>
            <p className="text-gray-500 mb-4">{card.desc}</p>
            <button
              className={`w-full py-2 rounded-md text-white bg-${card.color}-500 hover:bg-${card.color}-600`}
            >
              View {card.title}
            </button>
          </div>
        ))}
      </div>

      {/* Charts Section Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="bg-white p-6 rounded-lg shadow h-64 flex items-center justify-center text-gray-400">
          Chart / Analytics Placeholder
        </div>
        <div className="bg-white p-6 rounded-lg shadow h-64 flex items-center justify-center text-gray-400">
          Chart / Analytics Placeholder
        </div>
      </div>
    </div>
  );
}

export default ClinicDashboard;
