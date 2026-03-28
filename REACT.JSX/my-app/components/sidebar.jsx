import { useState } from "react";
import { Home, Info, Phone } from "lucide-react";

export default function SidebarLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Home"); // <-- yaha state add kiya

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-600 text-white w-64 p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <h2 className="text-2xl font-bold mb-6">My Clinic</h2>
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => {
              setSelectedPage("Home");
              setIsOpen(false);
            }}
            className={`flex items-center gap-2 p-2 rounded ${
              selectedPage === "Home" ? "bg-blue-500" : "hover:bg-blue-500"
            }`}
          >
            <Home /> Home
          </button>
          <button
            onClick={() => {
              setSelectedPage("About");
              setIsOpen(false);
            }}
            className={`flex items-center gap-2 p-2 rounded ${
              selectedPage === "About" ? "bg-blue-500" : "hover:bg-blue-500"
            }`}
          >
            <Info /> About
          </button>
          <button
            onClick={() => {
              setSelectedPage("Contact");
              setIsOpen(false);
            }}
            className={`flex items-center gap-2 p-2 rounded ${
              selectedPage === "Contact" ? "bg-blue-500" : "hover:bg-blue-500"
            }`}
          >
            <Phone /> Contact
          </button>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded bg-blue-600 text-white"
          >
            ☰
          </button>
          <h1 className="ml-4 text-xl font-bold">Dashboard</h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {selectedPage === "Home" && (
            <>
              <h2 className="text-2xl font-semibold mb-4">Welcome to Home</h2>
              <p className="text-gray-700">
                Ye Home page ka content hai. 
              </p>
            </>
          )}
          {selectedPage === "About" && (
            <>
              <h2 className="text-2xl font-semibold mb-4">About Us</h2>
              <p className="text-gray-700">
                Ye About page ka content hai.
              </p>
            </>
          )}
          {selectedPage === "Contact" && (
            <>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-700">
                Ye Contact page ka content hai.
              </p>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
