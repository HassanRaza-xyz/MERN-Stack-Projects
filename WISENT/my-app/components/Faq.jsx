import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Faqq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "Connect",
      content: "Integrate Wisent with your LLM provider via our simple API.",
    },
    {
      title: "Enhance",
      content: "Enhance your models capabilities with modular tools.",
    },
    {
      title: "Deploy",
      content: "Deploy your fine-tuned solution at scale.",
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="w-full bg-cover bg-center bg-no-repeat py-12 px-4 mx-auto max-w-7xl">
      <div className="space-y-10">
       
        <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] gap-8 sm:gap-14">
          <div>
            <span className="inline-block bg-[#121212] text-[#DEE4E2] text-sm font-medium px-4 py-1 rounded-full">
             Integration
            </span>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal leading-tight mb-2 text-[#121212]">
              Fine-tune in minutes, not months.
            </h2>
            <p className="text-[#333] text-base sm:text-lg md:text-xl font-normal">
              Our API uses representation engineering to give open source
              models specific capabilities, bypassing lengthy fine-tuning.
            </p>
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] gap-8 sm:gap-14">
          <div className="border-t border-gray-300 divide-y divide-gray-300 bg-transparent">
            {items.map((item, index) => (
              <div
                key={index}
                className="py-3 cursor-pointer transition"
                onClick={() => toggleItem(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl sm:text-2xl font-normal text-[#121212] px-2">
                    {item.title}
                  </h3>
                  <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-[#121212] text-white mr-2">
                    {openIndex === index ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 font-normal text-gray-700 text-base sm:text-lg md:text-xl px-2"
                    >
                      {item.content}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="hover:text-gray-400 bg-gradient-to-t from-[#ffffffc2] to-[#e5e5e558] text-sm transition-all duration-700 cursor-pointer">
              <button className="mt-6 flex items-center bg-gradient-to-t from-[#ffffffc2] to-[#e5e5e558] justify-between w-full gap-2 text-sm font-normal text-[#121212] bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg shadow-sm transition-all">
                Use our Wisent Cloud API
                <img
                  className="w-6 h-6 p-1 bg-black rounded-lg"
                  src="/cloud.png"
                  alt="Cloud"
                />
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="/3.png"
              alt="FAQ Visual"
              className="w-full max-w-[800px] h-auto object-cover rounded-2xl shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqq;
