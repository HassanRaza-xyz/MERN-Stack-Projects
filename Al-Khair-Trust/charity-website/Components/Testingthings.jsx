const Test = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div
        className="w-64 h-64 bg-cover bg-center transition-transform duration-500 hover:scale-110 mask-circle"
        style={{
          backgroundImage: "url('/1.png')",
          WebkitMaskImage:
            "radial-gradient(circle, black 70%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "cover",
          maskImage: "radial-gradient(circle, black 70%, transparent 100%)",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "cover",
        }}
      ></div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-10 bg-gray-200 min-h-screen">
        <div
          className="w-40 h-40 bg-cover bg-center rounded-xl transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-6 mask-circle"
          style={{
            backgroundImage: "url('/1.png')",
            WebkitMaskImage:
              "radial-gradient(circle, black 70%, transparent 100%)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "cover",
            maskImage: "radial-gradient(circle, black 70%, transparent 100%)",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "cover",
          }}
        ></div>

        <div
          className="w-40 h-40 bg-cover bg-center rounded-xl transition-all duration-500 ease-in-out hover:brightness-125"
          style={{ backgroundImage: "url('/1.png')" }}
        ></div>

        <div
          className="w-40 h-40 bg-cover bg-center rounded-xl transition-all duration-500 ease-in-out hover:blur-sm"
          style={{ backgroundImage: "url('/1.png')" }}
        ></div>

        <div
          className="w-40 h-40 bg-cover bg-center rounded-xl transition-all duration-500 ease-in-out hover:scale-125 hover:shadow-xl"
          style={{ backgroundImage: "url('/1.png')" }}
        ></div>

        <div
          className="w-40 h-40 bg-cover bg-center rounded-xl transition-all duration-500 ease-in-out hover:rotate-12"
          style={{ backgroundImage: "url('/1.png')" }}
        ></div>

        <div
          className="w-40 h-40 bg-cover bg-center rounded-xl transition-all duration-500 ease-in-out hover:opacity-70"
          style={{ backgroundImage: "url('/1.png')" }}
        ></div>

        <div
          className="w-40 h-40 bg-cover bg-center rounded-xl transition-all duration-500 ease-in-out hover:-rotate-12"
          style={{ backgroundImage: "url('/1.png')" }}
        ></div>

        <div
          className="w-40 h-40 bg-cover bg-center rounded-xl transition-all duration-500 ease-in-out hover:translate-y-2"
          style={{ backgroundImage: "url('/1.png')" }}
        ></div>

        <div
          className="w-40 h-40 bg-cover bg-center rounded-xl transition-all duration-500 ease-in-out animate-spin-slow"
          style={{ backgroundImage: "url('/1.png')" }}
        ></div>

        <div
          className="w-40 h-40 bg-cover bg-center rounded-xl transition-all duration-500 ease-in-out hover:scale-125 hover:shadow-2xl"
          style={{ backgroundImage: "url('/1.png')" }}
        ></div>
      </div>
    </div>
  );
};
export default Test;
