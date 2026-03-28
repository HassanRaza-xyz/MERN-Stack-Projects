import React, { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero({
  logo = "/lgo.png",
  brand = "Wisent",
  menuItems = ["Technology", "Team", "Blog", "API & Docs"],
  backgroundImage = "/water.png",
  title = "NEW ERA OF AI IS HERE",
  description = "Unprecedented level of control over models, elimination of hallucinations and malicious content. Available for everyone",
  buttonText = "Get Started",
  buttonIcon = "/current.png",
  finalText = "THIS IS THE FUTURE — WELCOME TO WISENT",
}) {
  const [open, setOpen] = useState(false);
  const textContainerRef = useRef(null);
  const fakeTextRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".fade-text");

    sections.forEach((section, i) => {
      gsap.fromTo(
        section,
        { opacity: 1, scale: 1 },
        {
          opacity: 0,
          scale: 0.92,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: `top+=${i * 1} top`,
            end: `top+=${(i + 1) * 120} top`,
            scrub: 5,
          },
        }
      );
    });

    gsap.fromTo(
      fakeTextRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: fakeTextRef.current,
          start: "top bottom-=600",
          end: "top center",
          scrub: 10,
        },
      }
    );
  }, []);

  return (
    <div className="relative h-[500vh] bg-black">
      <div
        className="sticky top-0 h-screen w-full bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="inset-0 bg-black/30 z-0 absolute w-full h-full" />

        <header className="relative z-10 max-w-7xl mx-auto flex justify-between items-center px-6 py-6 md:px-12">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            <h1 className="text-xl md:text-2xl font-semibold">{brand}</h1>
          </div>

          <div className="flex items-center gap-4">
            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 10 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-3 text-sm font-medium bg-white/10 px-4 py-1 rounded-2xl"
                >
                  {menuItems.map((item) => (
                    <li
                      key={item}
                      className="px-1 py-1 rounded-2xl cursor-pointer transition-all duration-700"
                    >
                      {item}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>

            <button
              onClick={() => setOpen(!open)}
              className="w-9 h-9 flex items-center justify-center cursor-pointer bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Menu size={15} className="text-white" />
            </button>
          </div>
        </header>

        <div className="z-10 items-center relative w-full h-full flex flex-col justify-center">
          <div
            ref={textContainerRef}
            className="grid max-w-6xl mx-auto md:grid-cols-[0.6fr_0.4fr] sm:gap-20 gap-1"
          >
            <motion.h2 className="fade-text sm:text-7xl text-[38px] px-2 font-medium leading-tight text-white/70">
              {title}
            </motion.h2>

            <motion.div className="group fade-text">
              <p className="mt-2 text-white px-2 text-sm md:text-xl">
                {description}
              </p>

              <button className="mt-9 flex bg-gradient-to-t from-[#ffffffc2] to-[#e5e5e558] justify-between w-full gap-2 border border-t-gray-400 border-b-gray-200 rounded-xl px-4 cursor-pointer text-sm font-medium text-white py-1 transition-all duration-700 transform group">
                <span className="group-hover:text-gray-300 transition-all duration-700">
                  {buttonText}
                </span>
                <img
                  className="w-6 h-6 bg-black rounded-lg transition-all duration-700 group-hover:brightness-90"
                  src={buttonIcon}
                  alt="Button Icon"
                />
              </button>
            </motion.div>
          </div>

          <div
            ref={fakeTextRef}
            className="text-center opacity-0 mt-10 text-white text-2xl font-bold"
          >
            {finalText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
