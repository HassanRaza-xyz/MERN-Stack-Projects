import { useState } from "react";
import { Heart, Stethoscope } from "lucide-react";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    fullNameEn: "",
    fullNameAr: "",
    nationalId: "",
    nationality: "",
    phone: "",
    email: "",
    gender: "",
    licenseNumber: "",
    specialization: "",
  });

  const nationalities = ["Pakistani", "American", "Other"];
  const genders = ["Male", "Female", "Other"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Profile saved! Check console for data.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-blue-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-teal-400"></div>
               <div className="absolute top-10 sm:top-90 left-10 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-teal-400"></div>

        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-blue-400"></div>
               <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-blue-400"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-green-400"></div>
      </div>

      <div className="max-w-md w-full space-y-6 sm:space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="mx-auto h-16 w-16 sm:h-20 sm:w-20 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-blue-100 shadow-lg border-2 border-white group hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <Stethoscope className="h-8 w-8 sm:h-10 sm:w-10 text-teal-600" />
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Clinic Management System
          </h1>
        </div>

        {/* Form */}
        <form className="space-y-4 border p-6 border-gray-200 rounded-3xl" onSubmit={handleSubmit}>
          {/* Full Name English */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 text-center">User Profile Card</h2>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name (English) *
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              value={formData.fullNameEn}
              onChange={(e) =>
                setFormData({ ...formData, fullNameEn: e.target.value })
              }
            />
          </div>

          {/* Full Name Arabic */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name (Arabic) *
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              value={formData.fullNameAr}
              onChange={(e) =>
                setFormData({ ...formData, fullNameAr: e.target.value })
              }
            />
          </div>

          {/* National ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              National ID / Iqama ID
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              value={formData.nationalId}
              onChange={(e) =>
                setFormData({ ...formData, nationalId: e.target.value })
              }
            />
          </div>

          {/* Nationality */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nationality *
            </label>
            <select
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              value={formData.nationality}
              onChange={(e) =>
                setFormData({ ...formData, nationality: e.target.value })
              }
            >
              <option value="">Select nationality</option>
              {nationalities.map((nation) => (
                <option key={nation} value={nation}>
                  {nation}
                </option>
              ))}
            </select>
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender *
            </label>
            <select
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              value={formData.gender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            >
              <option value="">Select gender</option>
              {genders.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          {/* License & Specialization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                License Number (Optional)
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
                value={formData.licenseNumber}
                onChange={(e) =>
                  setFormData({ ...formData, licenseNumber: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Specialization (Optional)
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
                value={formData.specialization}
                onChange={(e) =>
                  setFormData({ ...formData, specialization: e.target.value })
                }
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-br from-[#55fcff] via-[#94afd8] to-[#8e75e7] text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-200"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}
