import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white   text-gray-700">
      <div className="max-w-5xl mx-auto px-6 sm:px-0 mt-10 sm:mt-30 py-12 grid grid-cols-1 md:grid-cols-4 gap-12 border-b">
        <div>
          <div className="flex gap-2">
            <img src="/Group 2355.png" alt="Logo" className="w-8 h-8" />
            <h2 className="text-[#1D1D1D] font-semibold text-2xl mb-4">
              Alkhairtrust
            </h2>
          </div>
          <p className="text-base leading-6 text-[#6F7775]">
            Illuminating Minds, Impacting Lives: Alkhairtrust - Empowering the
            Future of a Hundred Children.{" "}
          </p>
          <div className="flex gap-4 mt-4 text-teal-700 text-xl">
            <a href="https://www.twitter.com" target="_black ">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_black ">
              <FaInstagram/>
            </a>
            <a href="https://www.facebook.com" target="_black ">
              <FaFacebookF/>
            </a>
            <a href="https://www.youtube.com" target="_black ">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg mb-6 font-semibold text-gray-800">Menu</h3>
          <ul className="space-y-2 text-[#6F7775] text-base font-normal">
            <li>
              <a href="#" className="hover:text-teal-600">
                Admission Form
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600">
                Academic Structure
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600">
                Campus Life
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg mb-6 font-semibold text-gray-800">About Us</h3>
          <ul className="space-y-2 text-[#6F7775] text-base font-normal">
            <li>
              <a href="#" className="hover:text-teal-600">
                Our Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600">
                Our Aim
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h1 className="text-xl mb-4 font-semibold text-[#1D1D1D]">
            Contact Info
          </h1>

          <div className="flex items-center  gap-3">
            <div className="bg-teal-700 cursor-pointer flex justify-center items-center w-8 h-8 rounded-full text-2xl ">
              {" "}
              <MdPhone className="w-4 h-4  cursor-pointer text-white " />
            </div>
            <span>+92 300 1234567</span>
          </div>
          <div className="flex items-center  gap-3">
            <div className="bg-teal-700 flex justify-center cursor-pointer items-center w-8 h-8 rounded-full text-2xl ">
              {" "}
              <MdEmail className="w-4 h-4 cursor-pointer text-white " />
            </div>
            <span>info@Alkhairtrust.com</span>
          </div>
          <div className="flex items-center  gap-3">
            <div className="bg-teal-700 flex justify-center cursor-pointer  items-center w-8 h-8 rounded-full text-2xl ">
              {" "}
              <MdLocationOn className="w-4 cursor-pointer h-4 text-white " />
            </div>
            <span>CHak no 105p RYK</span>
          </div>
        </div>
      </div>

      <div className="bg-teal-700 text-white text-center font-normal py-4 text-base">
        Alkhairtrust © 2024. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

<div  className="Hassan">
  hassan raza 17
</div>