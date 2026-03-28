import { Dice1 } from "lucide-react";

const Header = () => {
  return (
    <div className="relative mb-5 bg-black h-[100vh] w-full">
      <div className="absolute inset-0 opacity-30">
        <img src="/net.jpg" alt="" className="h-full lg:w-full object-cover" />
      </div>

      <div className="relative z-10">
        <nav className="flex items-center justify-between  py-6 max-w-[80vw] m-auto">
          <span>
            <img className="lg:w-40 w-25  " src="logo.svg" alt="logo" />
          </span>
          <div className="flex gap-4">
            <button className="bg-[#cc0101] hover:bg-red-700 font-normal text-sm  text-white p-2 px-4 rounded">
              Sign In
            </button>
          </div>
        </nav>
        <div className="text-white mx-0.5  text-[32px] lg:text-[60px] font-sans font-bold lg:font-black  lg:leading-18 leading-10 text-center lg:mt-25 mt-10 ">
          Unlimited movies, TV <br /> shows, and more
          <p className="lg:text-[20px]  text-sm font-sans leading-4 font-semibold mb-5 lg:mb-10 mt-6">
            Starts at Rs 250. Cancel anytime.
          </p>
          <p className="lg:text-[16px] text-[12px] leading-6 font-medium mx-1 mb-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex justify-center  flex-wrap gap-2">
            <input
              className="p-4 w-72 sm:w-96 bg-[#0F0F0F] text-lg font-normal rounded border border-[#5E5E5E] focus:outline-none"
              type="text"
              placeholder="Email address"
            />
            <button className=" font-semibold rounded bg-red-600 text-white px-1 lg:px-6 lg:py-3 py-1 text-2xl w-39 lg:w-50 hover:bg-red-700">
              Get Started &gt;
            </button>
          </div>
        </div>
        <div className="hidden lg:box-border lg:block mt-6.5 lg:mt-29.5 overflow-x-hidden relative h-24 relative-z-0">
          <div className="container mt-5">
            <div
              className="box-border border-t-pink-600 border-r-pink-500 border-l-pink-500 border-b-black text-white text-center w-full absolute h-full top-0 m-auto flex border-4"
              style={{
                borderTopLeftRadius: "150% ",
                borderTopRightRadius: "150% ",
                borderTopStyle: "solid",
                background:
                  "radial-gradient(100% 500% at 50% -420%, rgba(74, 97, 231, 0.5) 80%, rgba(0, 0, 0, 0.1) 100%), black",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
