const Aim = () => {
  return (
    <div>
      <div className="w-full mt-10 sm:mt-30 px-6 sm:py-16 sm:px-16 mb-4 sm:mb-10 bg-[#F4F1F1]">
        <div className=" mx-auto max-w-5xl ">
          <div className="text-center ">
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#007F6D]">
              Our Aim
            </h1>
          </div>
          <ol className="list-decimal pl-5 mt-10 font-medium text-[#6F7775] text-base sm:text-xl">
            <li>
              {" "}
              The Trust is purely a non-commercial organization established for
              the welfare & management of Mosque & other religious, Health,
              Education related institutions.
            </li>

            <li>
              {" "}
              To work for social, educational and religious harmony among the
              people as and where required.
            </li>
            <li>
              To make arrangements for the betterment of the general public,
              without discrimination of language, color, cast and free from all
              sorts of political motives.
            </li>
            <li>
              {" "}
              To  make arrangements for the promotion of educational activities,
              imparting knowledge and wisdom, particularly, establishing health
              facilities, diagnostic labs and dispensaries. 
            </li>
            <li>
              To make awareness about education in the society for
              welfare/charitable nature.
            </li>
            <li>
               To make arrangements for the religious as well as modern
              education to male and female students.
            </li>
            <li>
              To make arrangements for the education of poor, needy and orphans.
            </li>
          </ol>{" "}
          <div className="text-center">
            <button className="mt-10 cursor-pointer bg-teal-600 text-white sm:px-7 sm:py-3 px-4 py-2 font-bold text-base sm:text-xl rounded-lg hover:bg-teal-700">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 sm:mt-25   mb-10 grid sm:grid-cols-2 grid-cols-1 items-start gap-4">
        <div className="flex-1 sm:px-0 px-6">
          <h3 className="text-[#007F6D] font-semibold text-2xl sm:text-3xl">
            Career
          </h3>
          <p className="sm:text-[40px] text-2xl mt-4 font-semibold text-[#1D1D1D]">
            Passionate Educators, <br /> Join Us At Alkhair Trust!{" "}
          </p>

          <p className="sm:text-2xl text-xl mt-2 font-normal text-[#6F7775]">
            where your expertise will shape the future of aspiring learners.
            Make a positive impact and foster a love for learning with us. Apply
            now to be part of our educational journey and help transform lives
            through knowledge.
          </p>
          <button className="mt-5  bg-teal-600 text-[#FFFFFF] sm:px-8 sm:py-3 px-4 py-2 cursor-pointer font-bold text-xl rounded-lg hover:bg-teal-700">
            Apply
          </button>
        </div>
        <div className="sm:px-0 px-6">
          <img
            src="/6.png"
            alt="Kids playing"
            className="rounded-lg  object-cover shadow sm:w-[587px] sm:h-[413px] "
          />
        </div>
      </div>
    </div>
  );
};
export default Aim;
