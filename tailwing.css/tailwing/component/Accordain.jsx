import { useState } from "react";

const Accordian = () => {
  const [openIndex, setopenIndex] = useState(null);

  const AccordianData = [
    {
      question: "What is this property?",
      answer: "This is a beautiful villa with sea view and modern facilities.",
    },
    {
      question: "Whis is the parking space? ",
      answer:
        "This is a beautiful villa with sea view and modern facilities and offcourse parking is avaliable.",
    },
    {
      question: "Why to choose this Villa?  ",
      answer:
        "This is a beautiful villa with sea view and modern facilities and offcourse parking is avaliable.",
    },
  ];

  return (
    <div className="bg-white mt-10  max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-8 ">
      <div className="relative">
        <img className="rounded-2xl px-8" src="/featured.jpg" alt="Villa pic" />
        <div className="relative">
          <div className="bg-orange-400 lg:w-20 lg:h-20 w-15 h-15 rounded-full shadow-2xl flex justify-center relative bottom-8 lg:bottom-10  lg:right-2">
            <img
              className="absolute lg:w-12 lg:h-12 w-10 h-10 bottom-2 lg:bottom-4 "
              src="/info-icon-01.png"
              alt="Icon"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="mb-10 px-4 lg:px-1">
          <p className="text-orange-600 font-bold">| Featured</p>
          <h2 className="font-bold text-3xl lg:text-5xl  leading-tight ">
            Best <br /> Aparatment & <br /> Sea View
          </h2>
        </div>

        <div className="max-w-xl px-4 lg:px-1 mx-auto mt-15 border-b border-gray-200 ">
          {AccordianData.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => setopenIndex(openIndex === index ? null : index)}
                className="bg-[#FAFAFA] p-4 w-full text-[#1e1e1e] text-left  border-b text-lg  border-gray-200 font-semibold"
              >
                {item.question}
              </button>

              {openIndex === index && (
                <div className="bg-gray-50 p-4 text-gray-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white   shadow-2xl rounded-2xl lg:w-4/5 p-4    ">
        <div className="flex gap-2 lg:gap-6 mt-10 mb-10  border-gray-200">
        <img className="w-8 h-8 lg:w-16 lg:h-16 " src="info-icon-01.png" alt="" />
        <div className="">
          <p className=" font-semibold lg:text-4xl">250M2</p>
          <p className="text-sm w-30 ">Total flat surface </p>
        </div>
        </div>

        <div className="flex  gap-2 lg:gap-6 mt-15"> 
           <img className="w-8 h-8 lg:w-16  lg:h-16" src="info-icon-02.png" alt="" />
        <div className="">
          <p className=" font-semibold lg:text-4xl">Payment </p>
          <p className="text-sm w-30 ">Payment Process </p>
        </div>
        </div>
          <div className="flex gap-2 lg:gap-6 mt-15"> 
           <img className="w-8 h-8 lg:w-16  lg:h-16" src="info-icon-03.png" alt="" />
        <div className="">
          <p className=" font-semibold lg:text-4xl">Contract</p>
          <p className="text-sm w-30 ">Contract Ready </p>
        </div>
        </div>
          <div className="flex  gap-2 lg:gap-6 mt-15"> 
           <img className="w-8 h-8 lg:w-16  lg:h-16" src="info-icon-04.png" alt="" />
        <div className="">
          <p className=" font-semibold lg:text-4xl">Security</p>
          <p className="text-sm w-30 ">Security 24/7 </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
