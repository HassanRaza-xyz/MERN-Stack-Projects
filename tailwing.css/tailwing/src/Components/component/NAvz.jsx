import PropertyButton from "./Button/PorpertyButton";

const Headerr = () => {
  return (
    <div>
      <div className="w-full border-b border-gray-300 bg-white text-gray-400">
        <div className="hidden lg:flex justify-between items-center text-sm px-4 py-4 max-w-7xl mx-auto">
          <div className="h-6 flex space-x-7">
            <div className="flex text-base gap-1">  
              <span>
                <img src="/email.svg" alt="Email" className="mr-2 h-5" />
              </span>
              <span>info@company.com</span>
            </div>
            <div className="border-1 h-6"></div>
            <div className="flex items-center gap-2 text-base">
              <img src="/map.svg" alt="Map" />
              <span>Sunny Isles Beach, FL 33160</span>
            </div>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.facebook.com" target="_blank">
              <img className="w-7 h-7 hover:bg-gray-400" src="/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <img className="w-7 h-7 hover:bg-gray-400" src="/twitter.svg" alt="Twitter" />
            </a>
            <a href="https://www.messenger.com" target="_blank">
              <img className="w-7 h-7 hover:bg-gray-400" src="/messenger.svg" alt="Messenger" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img className="w-7 h-7 hover:bg-gray-400" src="/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>  
      </div>

      <div className="container mx-auto px-2 ">
        <div className="flex items-center justify-between px-1 py-6">
          <div className="text-3xl font-bold text-black">VILLA</div>

          <ul className="hidden ml-96 lg:flex  space-x-16 items-end font-medium">
            <li className="text-orange-500 cursor-pointer ">Home</li>
            <li className="hover:text-orange-500  transition-colors cursor-pointer duration-700">Properties</li>
            <li className="hover:text-orange-500  transition-colors duration-700 cursor-pointer "  >Property Details</li>
            <li className="hover:text-orange-500  transition-colors duration-700 cursor-pointer ">Contact Us</li>
          </ul>
<PropertyButton pbutton="Schedule a visit  "
className = "bg-[#1E1E1E] sm:hidden lg:flex justify-center   rounded-full text-white p-2 w-44 font-bold hover:bg-orange-500 transition-colors duration-700 "/>

        </div>
      </div>
    </div>
  );
};

export default Headerr;

<PropertyButton pbutton="Schedule a visit "
className = "bg-amber-50" />