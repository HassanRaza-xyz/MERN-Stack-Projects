import React, { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

const Threecols = () => {
  const buildingsRef = useRef(null);
  const yearsRef = useRef(null);
  const awardsRef = useRef(null);

  useEffect(() => {
    const options = { duration: 18, separator: "," };

    const buildings = new CountUp(buildingsRef.current, 34, options);
    const years = new CountUp(yearsRef.current, 12, options);
    const awards = new CountUp(awardsRef.current, 24, options);

    buildings.start();
    years.start();
    awards.start();
  }, []);

  return (
    <div className="mt-40 mb-30">
      <div className="grid gap-12 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-28">
        <div>
          <div className="bg-[#FFEEE9] gap-8 flex p-7 rounded-2xl lg:mx-14 text-orange-600 font-bold text-5xl">
            <span ref={buildingsRef}>0</span>
            <div className="text-lg text-black">
              Buildings <br /> Finished Now
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#FFEEE9] flex gap-8 p-7 rounded-2xl text-orange-600 font-bold text-5xl lg:mx-14">
            <span ref={yearsRef}>0</span>
            <div className="text-lg text-black">
              Years <br /> Experience
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#FFEEE9] gap-8 flex p-7 lg:mx-14 font-bold text-5xl text-orange-600 rounded-2xl">
            <span ref={awardsRef}>0</span>
            <div className="text-lg text-black">
              Awards <br /> Won 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Threecols;
