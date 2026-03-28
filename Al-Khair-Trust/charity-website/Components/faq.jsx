import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: 'What is AKhair Trust and What does it do?',
    answer:
      'Al-Khair Trust is a registered charity organization dedicated to humanitarian aid and development projects worldwide. We focus on providing assistance in areas such as education, healthcare, emergency relief, and community development.',
  },
  {
    question: 'Where does Al-Khair Trust operate',
    answer:
      'Al-Khair Trust operates both locally and internationally, with projects spanning across various cities. Our aim is to reach communities in need wherever they may be.',
  },
  {
    question: 'How can i Contribute to Al-Khair Trust Mission',
    answer:
      'There are several ways to contribute to Al-Khair Trusts mission. You can make a donation through our website, participate in fundraising events, sponsor a specific project, or even volunteer your time and skills to support our activities. Every contribution, big or small, makes a significant difference in the lives of those we serve.',
  },
  {
    question: 'How does Al-Khair Trust ensure  accountability in its operations?',
    answer:
      'Transparency and accountability are core values at Al-Khair Trust. We maintain detailed records of all financial transactions and regularly publish reports to provide our donors and stakeholders with insights into how their contributions are being utilized. Additionally, we adhere to strict governance standards and undergo regular audits by independent third-party firms to ensure the highest level of accountability.',
  },
  {
    question: 'What types of projects does Al-Khair Trust prioetize',
    answer:
      'Al-Khair Trust prioritizes projects that have a sustainable impact on communities in need. This includes initiatives focused on education, healthcare infrastructure development, clean water access, livelihood support, and emergency relief. We assess the needs of each community carefully and tailor our projects to address their specific requirements effectively.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative">
      <img
        src="curve.png"
        alt=""
        className="absolute top-0  left-0 w-full h-auto opacity-60 pointer-events-none -z-10"
      />

      <div className="max-w-3xl mx-auto py-12 px-4 text-center relative z-10">
        <h4 className="text-[#007F6D] font-semibold text-2xl sm:text-3xl">
          Need Help?
        </h4>
        <h2 className="sm:text-[40px] text-2xl font-bold text-[#1D1D1D] mt-1">
          The Answers to All Your Questions
        </h2>
        <div className="h-1 w-10 bg-teal-600 mx-auto mt-4 mb-5 sm:mb-10" />

        <div className="sm:space-y-4 space-y-2 text-left">
          {faqData.map((faq, index) => (
            <div key={index} className="border-none">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center text-left px-4 py-4 text-sm sm:text-xl font-semibold rounded-xl ${
                  openIndex === index
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-6 h-6 cursor-pointer stroke-[3]" />
                ) : (
                  <Plus className="w-6 h-6 cursor-pointer stroke-[3] text-[#4DC3B2]" />
                )}
              </button>
              {openIndex === index && faq.answer && (
                <div className="bg-white px-4 pt-2 pb-4 font-normal text-xs sm:text-base text-[#6F7775] rounded-b-xl">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
