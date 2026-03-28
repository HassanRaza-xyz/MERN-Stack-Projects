import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);

  return (
    <nav className=" top-0 mt-2 mb-15 left-0 w-full bg-white ">
      <div className="max-w-5xl mx-auto flex justify-between items-center sm:px-0 px-4 py-4">
        <div className="flex  items-center ">
          <img src="/Group 2355.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-semibold text-teal-600 ">
            AlKhair Trust
          </h1>
        </div>

        <div className="flex items-center gap-8">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-[#000000] font-medium relative">
            <li
              className="flex items-center cursor-pointer relative"
              onClick={() => {
                setAboutOpen(!aboutOpen);
                setAdmissionOpen(false);
              }}
            >
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? " text-gray-700 "
                    : "text-gray-700 hover:text-teal-500 transition-colors duration-700"
                }
              >
                About
              </NavLink>{" "}
              <ChevronDown size={22} />
              {aboutOpen && (
                <ul className="absolute top-8 font-normal left-0 bg-white text-lg shadow-md rounded-md w-36 py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <NavLink
                      to="/project"
                      className={({ isActive }) =>
                        isActive
                          ? "  hover:bg-gray-100   "
                          : "  hover:bg-gray-100   "
                      }
                    >
                     Our Porject
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <NavLink
                      to="/aim"
                      className={({ isActive }) =>
                        isActive
                          ? "  hover:bg-gray-100   "
                          : "  hover:bg-gray-100   "
                      }
                    >
                     Our Aim
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li
              className="flex items-center cursor-pointer relative"
              onClick={() => {
                setAdmissionOpen(!admissionOpen);
                setAboutOpen(false);
              }}
            >
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-700 "
                    : "text-gray-700 hover:text-teal-500 transition-colors duration-700"
                }
              >
                Admission
              </NavLink>{" "}
              <ChevronDown size={22} />
              {admissionOpen && (
                <ul className="absolute text-lg font-normal top-8 left-0 bg-white shadow-md rounded-md w-40 py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <NavLink
                      to="/faq"
                      className={({ isActive }) =>
                        isActive
                          ? "  hover:bg-gray-100   "
                          : "  hover:bg-gray-100   "
                      }
                    >
                      Question & Ans
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <NavLink
                      to="/adform"
                      className={({ isActive }) =>
                        isActive
                          ? "  hover:bg-gray-100   "
                          : "  hover:bg-gray-100   "
                      }
                    >
                      Admission Form
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <NavLink
              to="/career"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-500 font-bold "
                  : "text-gray-700 hover:text-teal-500 transition-colors duration-300"
              }
            >
              Career
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-500 font-bold "
                  : "text-gray-700 hover:text-teal-500 transition-colors duration-300"
              }
            >
              Blog
            </NavLink>
          </ul>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "hidden bg-teal-700 cursor-pointer text-white  text-base  md:block border-1 border-[#007F6D]  px-4 py-2.5 rounded-lg transition font-bold "
                : "hidden hover:bg-teal-700 cursor-pointer hover:text-white text-teal-500 text-base  md:block border-1 border-[#007F6D]  px-4 py-2.5 rounded-lg transition font-bold"
            }
          >
            Contact us
          </NavLink>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Dropdowns */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-start py-4 space-y-4 text-gray-800 font-medium px-4">
            {/* About Dropdown */}
            <li
              className="w-full cursor-pointer"
              onClick={() => {
                setAboutOpen(!aboutOpen);
                setAdmissionOpen(false);
              }}
            >
              <div className="flex justify-between w-full items-center">
                About <ChevronDown size={20} />
              </div>
              {aboutOpen && (
                <ul className="ml-4 mt-2 space-y-2 text-gray-600">
                  <li>
                    <NavLink to="/project">Our Projects</NavLink>
                  </li>
                  <li>
                    <NavLink to="/aim">Our Aim</NavLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Admission Dropdown */}
            <li
              className="w-full cursor-pointer"
              onClick={() => {
                setAdmissionOpen(!admissionOpen);
                setAboutOpen(false);
              }}
            >
              <div className="flex justify-between w-full items-center">
                Admission <ChevronDown size={20} />
              </div>
              {admissionOpen && (
                <ul className="ml-4 mt-2 space-y-2 text-gray-600">
                  <li>
                    <NavLink to="/faq">Question & Ans</NavLink>
                  </li>
                  <li>
                    <NavLink to="/adform">Admission Form</NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink to="/career">Career</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <button className="border-2 border-green-600 text-green-600 px-4 py-2 rounded-full hover:bg-green-600 hover:text-white transition">
              Contact Us
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
