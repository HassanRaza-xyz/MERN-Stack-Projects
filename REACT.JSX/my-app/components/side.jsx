import React from "react";

function ClinicSidebarLayout() {
  return (
    <div className="flex min-h-screen font-sans bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Clinic</h2>
        <ul className="space-y-4">
          <li>
            <button className="w-full text-left bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Dashboard
            </button>
          </li>
          <li>
            <button className="w-full text-left bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Patients
            </button>
          </li>
          <li>
            <button className="w-full text-left bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
              Appointments
            </button>
          </li>
          <li>
            <button className="w-full text-left bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
              Doctors
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to Clinic Management</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="text-xl font-semibold mb-2">Today's Appointments</h3>
            <p className="text-gray-600">Check upcoming appointments</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700 w-full">
              View Appointments
            </button>
          </div>

          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="text-xl font-semibold mb-2">New Patient</h3>
            <p className="text-gray-600">Add a new patient record</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600 w-full">
              Add Patient
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ClinicSidebarLayout;
