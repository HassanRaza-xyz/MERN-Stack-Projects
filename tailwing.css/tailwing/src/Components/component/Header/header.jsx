import PropertyButton from "../Button/PorpertyButton";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <div>
      <div className="w-full border-b border-gray-300 bg-white text-gray-400">
        <div className="hidden lg:flex justify-between items-center text-sm px-4 py-4 max-w-7xl mx-auto">
          <div className="h-6 flex space-x-7">
            <div className="flex text-base gap-2 ">  
              <span>
<i className="fa fa-envelope text-orange-600 text-2xl
 "></i>
              </span>
              <span>info@company.com</span>
            </div>
            <div className="border-1 h-6"></div>
            <div className="flex items-center gap-2 text-base">
<i className="fa fa-map text-orange-600 text-2xl"></i>
              <span>Sunny Isles Beach, FL 33160</span>
            </div>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.facebook.com" target="_blank">
<i className="fab fa-facebook p-2  w-[35px] h-[35px] bg-[#cdcdcd]  rounded-full flex  text-center hover:bg-orange-600 text-white text-[18px] transition-all duration-500"></i>     
       </a>
            <a href="https://www.twitter.com" target="_blank">
<i className="fab fa-twitter p-2 inline-block w-[35px] h-[35px] bg-[#cdcdcd]  rounded-full text-center  hover:bg-orange-600 text-white text-[18px] transition-all duration-500"></i>     
            </a>
            <a className="" href="https://www.linkedin.com" target="_blank">
<i className="fab fa-linkedin p-2 inline-block  w-[35px] h-[35px] bg-[#cdcdcd]  rounded-full text-center  hover:bg-orange-600 text-white text-[18px] transition-all duration-500"></i>     
            </a>
        <a href="https://www.instagram.com" target="_blank"> 
<i className="fab fa-instagram p-2 inline-block w-[35px] h-[35px] bg-[#cdcdcd]  rounded-full  text-center  hover:bg-orange-600 text-white text-[18px] transition-all duration-500"></i>     
            </a>
          </div>
        </div>  
      </div>

      <div className="container mx-auto px-2 ">
        <div className="flex items-center justify-between px-1 py-6">
          <div className="text-[28px] font-extrabold text-black">VILLA</div>

          <ul className="hidden ml-96 lg:flex  space-x-16 items-end font-medium">
        <li>
   <NavLink  to="/" className={({isActive}) => isActive ? "text-orange-600  " : "text-gray-700 hover:text-orange-600 transi duration-500"}>Home</NavLink>
  </li>
  <li>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive
          ? "text-orange-500 font-[15px] "
          : "text-gray-700 hover:text-orange-500 transition-colors duration-700"
      }
    >
      Properties
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/details"
      className={({ isActive }) =>
        isActive
          ? "text-orange-500 text-[15px] font-medium  "
          : "text-gray-700 hover:text-orange-500 transition-colors duration-700"
      }
    >
      Property Details
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        isActive
          ? "text-orange-500 font-bold "
          : "text-gray-700 hover:text-orange-500 transition-colors duration-700"
      }
    >
      Contact Us
    </NavLink>
  </li> </ul>
<PropertyButton pbutton="Schedule a visit  "
className = " bg-[#1E1E1E] sm:hidden lg:flex justify-center   rounded-full text-white p-2 w-44 hover:bg-orange-500 transition-colors duration-700 "/>

        </div>
      </div>
    </div>
  );
};

export default Header;


