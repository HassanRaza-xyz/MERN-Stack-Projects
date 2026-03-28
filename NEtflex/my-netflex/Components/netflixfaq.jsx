// NetflixAccordion.jsx
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const questions = [
  "What is Netflix?",
  "How much does Netflix cost?",
  "Where can I watch?",
  "How do I cancel?",
  "What can I watch on Netflix?",
  "Is Netflix good for kids?",
];

const answers = [
  "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.   You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!.",
  "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.oky and the Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.",
  "Watch anywhere, anytime, on unlimited devices. Just log in to your account.",
  "Cancel anytime in just two clicks. No cancellation fees.",
  "You can watch TV shows, movies, documentaries, and much more.",
  "YYes, Netflix offers a Kids section with parental controls.",
];

const NetflixAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="bg-black text-[#FFFFFF] max-w-[80vw]  mx-auto py-10 ">
      <h2 className="text-2xl  font-semibold mb-6">
        Frequently Asked Questions
      </h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-2 ">
          <button
            onClick={() => toggle(i)}
            className="w-full bg-[#312f2f] border-b  border-black  hover:bg-gray-700 transition-all flex justify-between items-center text-lg  lg:text-[24px] p-[24px]  "
          >
            <span> {q}</span>
            <span className="text-[24px] text-white">
              {openIndex === i ? <FaMinus /> : <FaPlus />}
            </span>{" "}
          </button>
          {openIndex === i && (
            <div className="bg-[#312f2f]   px-6 py-4 text-[24px] text-gray-300">
              {answers[i]}
            </div>
          )}
        </div>
      ))}
     <p className="text-white flex justify-center mt-20">Ready to watch? Enter your email to create or restart your membership.
</p>

<div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-4 px-4">
  <input
    className="p-4 lg:w-[549px] w-full bg-[#0F0F0F] border border-[#5E5E5E] rounded-lg text-white"
    type="text"
    placeholder="Email Address"
  />
  <button
    className="bg-red-600 hover:bg-red-700 text-white rounded-lg lg:px-8 px-2 py-1 lg:py-4 lg:text-2xl text-lg font-semibold w-2/3 lg:w-auto"
  >
    Get Started &gt;
  </button>
</div>

    </div>
  );
};

export default NetflixAccordion;


