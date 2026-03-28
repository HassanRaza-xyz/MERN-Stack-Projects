import React from 'react';

const OrphanProject = () => {
  return (
    <div className="bg-white text-gray-800 ">
      <div className="max-w-5xl mx-auto mt-1 sm:mt-30">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div className='relative sm:p-0 px-12 '>
          <img
            src="/5.png"
            alt="Child studying"
            className="rounded-lg shadow-md w-[368px] object-cover h-[318px]  sm:p-0 sm:w-[568px] sm:h-[518px] "
          />
           <img
              className="absolute sm:w-18 sm:h-18 w-14 h-14 rounded-full left-5  top-15 sm:-left-9 "
              src="/icon solidarity.svg"
              alt=""
            /></div>
          <div className='sm:p-0 px-4'>
            <h2 className="text-teal-600 font-semibold text-2xl sm:text-3xl">Our Project</h2>
            <h3 className="text-[#1D1D1D] font-bold text-xl sm:text-2xl mt-2">
              Orphans and needy are among the most <span className='border-b-3 py-2 border-[#00A991]'> vulne
             </span>rable members of society.
            </h3>
            <p className="mt-6 font-medium text-sm sm:text-xl tracking-[0.01em] text-[#6F7775]">
              In developing nations where children may already suffer the effects of war, poverty, and natural disaster,
              losing one or both parents is often synonymous with losing their lifeline.
            </p>
            <p className="mt-6  font-medium text-sm sm:text-xl  text-[#6F7775]">
          These orphans are left to fend for themselves - sometimes from a very young age - and are susceptible to hunger, disease and exploitation. Their access to education is limited, their security threatened, and their futures bleak. Not to mention the severe grief and trauma that they will burden for the rest of their lives.
            </p>
            <button className="mt-5 bg-teal-600 text-white sm:px-6 sm:py-3.5 px-2 py-2 font-semibold text-sm sm:text-xl cursor-pointer rounded-lg hover:bg-teal-700">Read More</button>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] mt-10   sm:mt-30 sm:py-15 sm:px-15 max-w-5xl mx-auto rounded-4xl">
        <h3 className="text-[#007F6D] text-center text-xl sm:text-3xl  font-semibold mb-2">Saheeh al-Bukhari</h3>
        <p className="text-center font-semibold text-xl sm:text-2xl  text-[#1D1D1D]">Quote by the Prophet (PBUH):</p>
        <p className="text-center mt-4 text-[#6F7775] px-4 sm:px-0 font-medium text-lg sm:text-2xl  max-w-4xl mx-auto">
          "I and the person who looks after an orphan and provides for him, will be in Paradise like this," putting his
          index and middle fingers together. [Bukhari]
        </p>
        <p className="text-center mt-4 text-[#6F7775] px-4 sm:px-0 font-medium text-lg sm:text-2xl  max-w-4xl mx-auto">
          "Blessed is the wealth of the Muslim, from which he gives to the poor, the orphan and the wayfarer." [Muslim]
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-25  mb-10 grid sm:grid-cols-2 grid-cols-1 items-start gap-4">
        <div className="flex-1 sm:p-0 px-4">
          <h3 className="text-[#007F6D] font-semibold text-2xl sm:text-3xl">Our Vision</h3>
          <p className="sm:text-2xl text-xl mt-2 font-medium text-[#1D1D1D]">
            Creation of  internationally recognized Islamic educational institution to play a key role in <span className='border-b-3 py-4   border-[#00A991]'> build</span>ing a
            peaceful Islamic welfare society.
          </p>

          <h3 className="text-[#007F6D] font-semibold text-2xl sm:text-3xl mt-6">Our Mission</h3>
          <p className="text-xl sm:text-2xl mt-2 font-medium text-[#1D1D1D]">
            Creation of an internationally recognized Islamic educational institution to play a key role in building a
            peaceful Islamic welfare society… we strive hard to nurture young leaders who will serve as role models for
            their communities and strengthen relationships between the Muslim <span className='border-b-3 py-4 border-[#00A991]'>world </span> and other civilizations and cultures.
          </p>
        </div>
        <div className='sm:px-0 px-6'>
        <img
          src="/6.jpg"
          alt="Kids playing"
          className="rounded-lg mt-5 shadow sm:w-[570px] sm:h-[416px]  object-cover"
        /></div>
      </div>
    </div>
  );
};
export default OrphanProject;
