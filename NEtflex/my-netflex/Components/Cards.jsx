const Cards = () => {
  return (
    <div className="container mt-10 max-w-[80vw] mx-auto ">
      <h1 className="text-2xl mb-4 font-bold text-white">
        More Reasons to Join
      </h1>
      <div className="grid mt-1 gap-4 w-full  relative  lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <div className=" bg-gradient-to-br from-[#1A2246] to-[#210E17] rounded-2xl relative ">
          <div className="px-4 py-8 lg:h-80 h-70  ">
            <p className=" text-white text-2xl    font-semibold">
              Enjoy on your TV
            </p>
            <p className="text-[#FFFFFFB3] font-sans text-[16px] font-semibold ">
              <br /> Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple
              TV, Blu-ray players, and many more.
            </p>
            <img
              className="absolute w-15 h-15 rounded-full  bottom-6 right-4 "
              src="n1.PNG"
              alt=""
            />
          </div>
        </div>
        <div className=" bg-gradient-to-br from-[#1A2246] to-[#210E17] rounded-2xl relative ">
          <div className="px-4 py-8 lg:h-80 h-70 ">
            <p className=" text-white text-2xl    font-semibold">
              Download your shows to watch offline
            </p>
            <p className="text-[#FFFFFFB3] font-sans text-[16px] font-semibold ">
              <br />
              Save your favorites easily and always have something to watch.
            </p>
          </div>
          <img
            className="absolute w-15 h-15 rounded-full  bottom-6 right-4  "
            src="n2.png"
            alt=""
          />
        </div>
        <div className=" bg-gradient-to-br from-[#1A2246] to-[#210E17] rounded-2xl relative">
          <div className="px-4 py-8 lg:h-80 h-70 ">
            <p className=" text-white text-2xl    font-semibold">
              Watch everywhere
            </p>
            <p className="text-[#FFFFFFB3] font-sans text-[16px] font-semibold ">
              <br />
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <img
            className="absolute w-15 h-15  bottom-6 right-4 rounded-full "
            src="n3.PNG"
            alt=""
          />
        </div>
        <div className=" bg-gradient-to-br from-[#1A2246] to-[#210E17] rounded-2xl relative">
          <div className="px-4 py-8 lg:h-80 h-75   ">
            <p className=" text-white text-2xl    font-semibold">
              Create profiles for kids
            </p>
            <p className="text-[#FFFFFFB3] font-sans text-[16px] font-semibold ">
              <br />
              Send kids on adventures with their favorite characters in a space
              made just for them — free with your membership.
            </p>
          </div>
          <img
            className="absolute w-15 h-15 rounded-full bottom-6 right-4  "
            src="n4.PNG"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Cards;
