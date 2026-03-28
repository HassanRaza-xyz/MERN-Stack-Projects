import React, { useEffect, useState } from 'react';

function Appp() {
  const [animate, setAnimate] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);

  const stats = [
    { label: 'Less hallucinations', value: 72, height:311, heightMobile: 150 },
    { label: 'Coding ability boost', value: 63, height: 295, heightMobile: 135 },
    { label: 'Math ability boost', value: 56, height: 253, heightMobile: 120 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stats-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        setAnimate(true);

        stats.forEach((stat, i) => {
          let start = 0;
          const increment = Math.ceil(stat.value / 20);
          const delay = 20;

          const updateCount = () => {
            start += increment;
            if (start >= stat.value) start = stat.value;

            setCounts((prev) => {
              const updated = [...prev];
              updated[i] = start;
              return updated;
            });

            if (start < stat.value) {
              setTimeout(updateCount, delay);
            }
          };

          setTimeout(updateCount, i * 150);
        });
      } else {
        setAnimate(false);
        setCounts([0, 0, 0]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  return (
    <div
      id="stats-section"
      className={`max-w-7xl mx-2 sm:mx-10 mt-10 rounded-xl bg-cover bg-center relative p-2 ${
        isMobile ? 'h-[700px]' : 'h-[571px]'
      }`}
      style={{ backgroundImage: "url('/2.png')" }}
    >
      <span className="bg-black rounded-full text-[#DEE4E2] px-2 py-1 absolute left-4 top-4 sm:left-5 sm:top-6 text-xs sm:text-sm">
        Effect
      </span>

      <div className="w-full h-full flex flex-col justify-between text-white px-2 sm:px-4 py-6">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-normal max-w-full sm:max-w-4xl sm:ml-20 md:ml-60 mt-5 sm:mt-0 leading-snug text-center sm:text-left">
          Unparalleled capabilities through <br /> representation engineering
        </h1>

        <div className="w-full absolute bottom-4 sm:right-4 right-0 flex flex-col sm:flex-row gap-6 sm:gap-4 items-center sm:items-end justify-center sm:justify-end px-2 sm:px-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-[#121212] bg-opacity-80 rounded-xl shadow-xl overflow-hidden flex items-end"
              style={{
                width: '90vw',
                maxWidth: '320px',
                height: `${
                  animate
                    ? isMobile
                      ? stat.heightMobile
                      : stat.height
                    : 0
                }px`,
                transition: 'height 1.8s ease-out',
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <span className="absolute top-4 left-4 text-3xl sm:text-6xl md:text-7xl font-normal text-[#C5FFC8]">
                {counts[index]}%
              </span>
              <p className="absolute bottom-3 right-3 text-sm sm:text-base md:text-lg font-normal text-[#C5FFC8] text-right leading-tight max-w-[70%] sm:max-w-[200px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Appp;
