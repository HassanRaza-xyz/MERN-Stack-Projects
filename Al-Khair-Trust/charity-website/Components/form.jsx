import React from 'react';

const Form = () => {
  return (
    <div
      className="relative mt-20 bg-[#F9F9F9] bg-[url('/line.png')] bg-no-repeat bg-center  py-12 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto backdrop-blur-0">
        <h2 className="text-center text-[#007F6D] text-2xl sm:text-3xl font-bold mb-10">
          Contact Us
        </h2>

        <form className="bg-white shadow-lg rounded-2xl mx-auto w-full max-w-2xl py-8 px-6 sm:px-10">
          <div className="mb-6">
            <label className="block text-[#02044A] font-medium text-lg sm:text-xl mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#02044A] font-medium text-lg sm:text-xl mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#02044A] font-medium text-lg sm:text-xl mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-[#F9F9FB] focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#008774] cursor-pointer text-white font-semibold py-2 sm:py-3 px-6 sm:px-10 rounded-lg hover:bg-teal-600 transition text-sm sm:text-base"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
