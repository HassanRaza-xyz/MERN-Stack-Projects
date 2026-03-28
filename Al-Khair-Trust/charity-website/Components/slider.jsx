import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/1.png",
    caption:
      "Al Khair Educational Institute For Orphan Children A Project of Al Khair Trust",
  },
  { src: "/2.png", caption: "Comprehensive personal development approach" },
  { src: "/3.png", caption: "Every Child Matters" },
  { src: "/6.png", caption: "Learning With Joy" },
  { src: "/5.png", caption: "Support Through Education" },
  { src: "/6.png", caption: "Supportive community environment." },
  { src: "/6.jpg", caption: "Hope and Knowledge" },
  { src: "/2.png", caption: "Sustainable Social Transformation" },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
  };

  const handleMouseUp = (e) => {
    if (startX === null) return;
    const diff = e.clientX - startX;

    if (diff > 50) prevSlide();
    else if (diff < -50) nextSlide();

    setStartX(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="relative w-full bg-white sm:mt-22  py-6 select-none"
    >
      <div className="max-w-5xl mx-auto relative overflow-hidden shadow-lg">
        <img
          src={images[currentIndex].src}
          alt="Slide"
          className="w-full h-60 sm:h-[550px] object-cover"
        />

        <div className="absolute bottom-6 sm:bottom-10 w-full flex flex-col items-center px-4 sm:px-6 space-y-3 sm:space-y-4">
          <p className="text-white text-sm sm:text-2xl font-semibold leading-snug text-center">
            {images[currentIndex].caption}
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-sm sm:text-xl text-white font-semibold px-5 sm:px-7 py-2 sm:py-3 rounded-lg">
            Get Admission
          </button>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 cursor-pointer sm:left-12 transform -translate-y-1/2 text-gray-300 hover:text-white rounded-full"
        >
          <ChevronLeft size={36} className="sm:size-15" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 cursor-pointer sm:right-12 transform -translate-y-1/2  text-gray-300 hover:text-white rounded-full"
        >
          <ChevronRight size={36} className="sm:size-15" />
        </button>

        <div className="absolute bottom-2 sm:bottom-6 w-full flex justify-center space-x-1 text-xl sm:text-6xl">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer transition-all ${
                currentIndex === index ? "text-white" : "text-white/30"
              }`}
            >
              _
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
