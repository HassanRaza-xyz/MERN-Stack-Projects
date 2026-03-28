const Ytpic = () => {
  return (
    <div className="relative mt-[-190px]">
      <div className="flex justify-center">
        <div className="relative">
          <img src="video-frame.jpg" alt="" className="w-full p-8 lg:w-full lg:h-auto max-w-full object-cover" />

          <a
            className="absolute left-1/2 top-1/2
                        -translate-x-1/2 -translate-y-1/2
                       lg:w-12 lg:h-12 w-7 h-7
                       bg-white rounded-full inline-block text-center
                       text-[#f35525]  outline-[12px] sm:outline-[15px] outline-[#fe552580]
                       text-[16px] sm:text-[18px] transition-transform duration-300 hover:scale-110"
            href="https://www.youtube.com"
            target="_blank"
          >
            <i className="fa fa-play mt-4 ml-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ytpic;
