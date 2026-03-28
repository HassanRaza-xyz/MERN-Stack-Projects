import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HassanUltimateTail = () => {
  const letterRefs = useRef([]);
  const particleContainer = useRef(null);

  useEffect(() => {
    // Neon breathing glow effect
    letterRefs.current.forEach((el, idx) => {
      gsap.to(el, {
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        duration: 1 + idx * 0.2,
        ease: "sine.inOut",
      });
    });

    // Mouse move handler for tail
    const handleMouseMove = (e) => {
      letterRefs.current.forEach((el, idx) => {
        gsap.to(el, {
          x: e.clientX - window.innerWidth / 2 + idx * 70,
          y: e.clientY - window.innerHeight / 2,
          scale: 1.5 - idx * 0.1,
          rotation: (e.movementX + e.movementY) * 0.5,
          opacity: 1 - idx * 0.1,
          duration: 0.4 + idx * 0.12,
          ease: "power3.out",
        });

        // Spawn ghost particles for trailing effect
        if (particleContainer.current) {
          const particle = document.createElement("div");
          particle.className =
            "absolute text-green-400 text-4xl font-bold opacity-40 pointer-events-none";
          particle.innerText = el.innerText;
          particle.style.top = `${e.clientY}px`;
          particle.style.left = `${e.clientX}px`;
          particleContainer.current.appendChild(particle);

          gsap.to(particle, {
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: "power1.out",
            onComplete: () => particle.remove(),
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const word = "HASSAN".split("");

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black overflow-hidden z-0">
      {/* Particle container for ghost sparks */}
      <div ref={particleContainer} className="absolute w-full h-full"></div>

      {/* Main neon glowing letters */}
      {word.map((char, i) => (
        <div
          key={i}
          ref={(el) => (letterRefs.current[i] = el)}
          className="absolute text-green-400 text-8xl font-extrabold select-none
                     drop-shadow-[0_0_60px_#00ff00]"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {char}
        </div>
      ))}
    </div>
  );
};

export default HassanUltimateTail;
