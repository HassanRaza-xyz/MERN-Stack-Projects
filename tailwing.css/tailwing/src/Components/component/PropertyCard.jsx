import Button from "./Button/Button";
import PropertyButton from "./Button/PorpertyButton";
const Propertycard = (props) => {
  return (
    <div className="bg-white  mt-5 max-w-7xl  mx-auto">
      <div className="mb-10 lg:ml-20 text-center lg:text-left">
        <p className="text-sm text-orange-600 font-bold uppercase">| Best Deal{props.title}</p>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Find Your Best <br className="hidden lg:block" /> Deal Right Now!
        </h1>
        <div className="space-x-0 space-y-4 lg:space-y-0 lg:space-x-4 flex flex-col lg:flex-row justify-center lg:justify-end items-center">
         
      <Button button="Villa House "/>
      <Button button="Beach House "/>
      <Button button="Apartment "/>
     
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mb-30 lg:grid-cols-3 gap-12">
        <div className="w-full px-4 lg:px-1 lg:ml-2">
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 space-y-6 md:space-y-8">
            <div className="flex justify-between border-b pb-2 border-gray-200">
              <span className="text-gray-400">Total Flat Space</span>
              <span className="font-extrabold text-xl">185 m2</span>
            </div>
            <div className="flex justify-between border-b pb-2 border-gray-200">
              <span className="text-gray-400">Floor number</span>
              <span className="font-extrabold text-xl">26th</span>
            </div>
            <div className="flex justify-between border-b pb-2 border-gray-200">
              <span className="text-gray-400">Number of rooms</span>
              <span className="font-extrabold text-xl">4</span>
            </div>
            <div className="flex justify-between border-b pb-2 border-gray-200">
              <span className="text-gray-400">Parking Available</span>
              <span className="font-extrabold text-2xl">Yes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Payment Process</span>
              <span className="font-extrabold text-xl font-sans">Bank</span>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <img src="/deal-01.jpg" alt="Living Room" className=" lg:px-1 px-4  " />
        </div>

        <div className="w-full px-4 lg:px-1">
          <h3 className="font-semibold text-lg mb-4 text-center lg:text-left">Extra Info About Property</h3>
          <p className="text-gray-600 mb-4 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
          </p>
          <p className="text-gray-600 mb-6 text-justify">
            When you need free CSS templates, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolor obcaecati at amet neque. Illum fuga adipisci quos minima repellat! you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.
          </p>
          <div className="flex justify-center lg:justify-start">
            
            <button className="bg-[#1E1E1E] text-white font-bold duration-700 transition-colors mx-10 lg:mx-25 lg:w-1/2 w-2/3 rounded-full mt-8 p-2 cursor-pointer" disabled >Schedule a visit</button>
                     </div>
        </div>
      </div>
    </div>
  );
};

export default Propertycard;
