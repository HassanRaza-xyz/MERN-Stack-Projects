import PropertyButton from "../Button/PorpertyButton";
const Cards = (props) => {
  return (
    <div className="mb-30">
      <div className="text-center">
        <h6 className="text-orange-600 font-bold">{props.title}</h6>
        <h2 className="font-bold  text-5xl">
         {props.desc}
         <h2>{props.desk}</h2>
        </h2>
      </div>

      <div className="grid  grid-col-1  sm:grid-cols-2 lg:grid-cols-3 gap-9  p-4 sm:rounded-2xl lg:px-28 sm:p-8 ">
        <div className="bg-gray-100 rounded-3xl shadow-2xl p-4 lg:p-8  overflow-hidden">
          <img
            className="object-cover h-60 mb-10  rounded-2xl w-full "
            src="/property-01.jpg"
            alt=""
          />

          <div className="   justify-end">
            <div className="flex mb-8 justify-between">
              <h2 className=" font-normal p-1  lg:text-lg bg-[#fbd9cf] inline lg:rounded-lg ">
                Luxury Villa{" "}
              </h2>
              <h2 className="  font-extrabold  text-xl text-orange-600  ">
                $2.2545.000{" "}
              </h2>
            </div>
            <div className="">
              <h2 className="  font-bold text-2xl text-[#1E1E1E]">
                18 ot Street Miami, OR 97219
              </h2>

              <p className="text-[#4A4A4A] border-b text-lg border-gray-300">
                Bedrooms: <b className="text-[#1E1E1E]">6</b> &nbsp; Bathrooms: <b className="text-[#1E1E1E]">8</b>
                <br />
                Area: <b className="text-[#1E1E1E]">350m²</b> &nbsp; Floor: <b className="text-[#1E1E1E]">6</b>
                <br />
                Parking: <b className="text-[#1E1E1E]">9 spots</b>
              </p>
            </div>
           <PropertyButton pbutton="Schedule a visit"
            className= "rounded-full  w-2/3 mt-8 transition-colors duration-700 hover:bg-orange-600 p-2 font-bold lg:w-1/2 mx-10 lg:mx-18  bg-[#1E1E1E] text-LG text-white"     />

          </div>
        </div>

        <div className="bg-gray-100 rounded-3xl shadow-2xl p-4 lg:p-8   ">
          <img
            src="/property-02.jpg"
            className="h-60  mb-10 w-full object-cover rounded-2xl "
            alt="banner pic"
          />

          <div className="   justify-end">
            <div className="flex mb-8  justify-between">
              <h2 className=" font-normal  p-1 lg:text-lg bg-[#fbd9cf] inline lg:rounded-lg ">
                Beach House{" "}
              </h2>
              <h2 className="  font-extrabold text-xl text-orange-600  ">
                $3.245.000{" "}
              </h2>
            </div>
            <h2 className=" text-2xl font-bold text-[#1E1E1E]">
              54 Street Florida, OR 27001{" "}
            </h2>
            <p className="border-b text-[#4A4A4A] text-lg border-gray-300">
              Bedrooms: <b className="text-[#1E1E1E]">6</b> &nbsp; Bathrooms: <b className="text-[#1E1E1E]">5</b>
              <br />
              Area: <b className="text-[#1E1E1E]">450m²</b> &nbsp; Floor: <b className="text-[#1E1E1E]">2</b>
              <br />
              Parking: <b className="text-[#1E1E1E]">4 spots</b>
            </p>
<PropertyButton pbutton="Schedule a visit"
className = "bg-[#1E1E1E] text-white font-bold transition-colors duration-700 hover:bg-orange-600 w-2/3 rounded-full p-2 lg:w-1/2 mt-8 flex justify-center mx-10 lg:mx-18  "/>
          </div>
        </div>

        <div className="bg-gray-100 rounded-3xl shadow-lg p-4 lg:p-8 ">
          <img
            src="/property-03.jpg"
            alt="baner-pic"
            className="h-60 mb-10  object-cover rounded-2xl w-full"
          />

          <div className="   justify-end">
            <div className="flex mb-8 justify-between">
              <h2 className=" font-normal  p-1 lg:text-lg bg-[#fbd9cf] inline lg:rounded-lg ">
                Pent House{" "}
              </h2>
              <h2 className="  font-extrabold  text-xl text-orange-600  ">
                $1.3545.000{" "}
              </h2>
            </div>
            <h2 className=" text-2xl font-bold text-[#1E1E1E]">
              26  Street Miami, OR 38540
            </h2>

            <p className=" border-b text-lg text-[#4A4A4A] border-gray-300">
              Bedrooms: <b className="text-[#1E1E1E]">8</b> &nbsp; Bathrooms: <b className="text-[#1E1E1E]">8</b>
              <br />
              Area: <b className="text-[#1E1E1E]">545m²</b> &nbsp; Floor: <b className="text-[#1E1E1E]">3</b>
              <br />
              Parking: <b className="text-[#1E1E1E]">6 spots</b>
            </p>
           <PropertyButton pbutton="Schedule a visit"
           className ="bg-[#1E1E1E] text-white font-bold duration-700 transition-colors hover:bg-orange-500 mx-10 lg:mx-25 lg:w-1/2 w-2/3 rounded-full mt-8 p-2 "/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
