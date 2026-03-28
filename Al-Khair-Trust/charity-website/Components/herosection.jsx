const HeroSection = () => {
  return (
    <div
      className="relative sm:mt-20  bg-[url('/map.png')] bg-no-repeat bg-cover bg-center py-12 px-4 sm:px-6"
    >
      <div className="absolute  bg-white/80 backdrop-blur-sm z-0" />

      <section className="relative z-10  sm:pt-10 pb-5 sm:pb-20 font-outfit">
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center">
          
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-2xl md:text-[40px] font-semibold text-[#1D1D1D] leading-tight">
              Presenting a visionary <br /> trust, passionately offering <br />
              free education to <span className="text-[#007F6D]">100+</span> <br /> students
            </h1>
            <p className="sm:text-xl text-sm p-2 sm:p-0 font-normal text-[#6F7775] max-w-lg mx-auto md:mx-0">
              We invite families with needy children to enroll and be a part of our nurturing learning
              environment. Additionally, we welcome passionate individuals to join us as paid teachers,
              contributing to the educational journey of these children. Together, let's build a brighter
              future through education and opportunity.
            </p>
            <button className="bg-[#00A991] text-white cursor-pointer hover:bg-teal-700 sm:px-8 sm:py-3.5 px-4 py-2 rounded-lg text-sm sm:text-xl font-bold">
             
            </button>
          </div>

          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center md:justify-end">
            <img
              src="/1.png"
              alt="Children"
              className="sm:w-full w-5/6 max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
