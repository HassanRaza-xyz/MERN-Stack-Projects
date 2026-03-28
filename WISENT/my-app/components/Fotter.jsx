import React from "react";
import { FaXTwitter, FaLinkedin, FaTiktok, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white px-4 py-6 mt-15"
      style={{ backgroundImage: "url('/footer.png')" }}
    >
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-xl font-medium leading-tight mb-2 text-[#121212]">
              Stay in the loop. Never miss out.
            </h2>
            <p className="text-[#424846] text-base font-normal">
              Subscribe to our newsletter and unlock Wisent insights.
            </p>
          </div>

          <div className="flex gap-2   ">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 sm:w-70 w-45 flex rounded-xl
    bg-gradient-to-b from-[#ffffffcc] to-[#e5e5e588]
    text-black text-sm focus:outline-none
    backdrop-blur-sm
    shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.05),inset_6px_0_4px_rgba(167,167,167,0.1),inset_-6px_0_4px_rgba(167,167,167,0.1)]"
            />
            <button className="px-4 py-2 cursor-pointer rounded-xl bg-black hover:text-gray-300 transition-all duration-700 text-sm font-medium text-white  sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t pt-6 border-[#00000080] max-w-7xl mx-auto  px-1 sm:px-4">
        <div className="flex flex-col md:flex-row justify-between  items-center md:items-start gap-6">
          <ul className="grid   grid-cols-2 sm:flex sm:flex-wrap gap-2">
            {["Terms of Services", "Contact", "Career", "Privacy Policy"].map(
              (label) => (
                <li
                  key={label}
                  className="group  justify-center  bg-[#f0f0f066] cursor-pointer text-[#121212] sm:text-sm text-xs font-medium gap-2 px-1 sm:px-5 py-1 rounded-2xl flex items-center transition-all duration-300 hover:text-gray-500"
                >
                  {label}
                  <img
                    className="h-4 w-4 transition-all duration-300 group-hover:grayscale group-hover:opacity-60"
                    src="external-link.svg"
                    alt="GO Link"
                  />
                </li>
              )
            )}
          </ul>

          <div className="flex gap-3 justify-center md:justify-end text-[#121212] text-3xl w-full md:w-auto">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="hover:te xt-gray-600 rounded-lg p-1.5 bg-gray-300 transition-all duration-300 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-gray-600 rounded-lg p-1.5 bg-gray-300 transition-all duration-300 cursor-pointer" />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="hover:text-gray-600 rounded-lg p-1.5 bg-gray-300 transition-all duration-300 cursor-pointer" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-600 rounded-lg p-1.5 bg-gray-300 transition-all duration-300 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <img
          src="/Wisent.png"
          alt="Wisent Logo"
          className="pointer-events-none select-none"
        />
      </div>
    </footer>
  );
};

export default Footer;
