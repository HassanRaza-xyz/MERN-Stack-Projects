import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const cards = [
  { id: 1, img: "ee.jpg" },
  { id: 2, img: "ww.jpg" },
  { id: 3, img: "flx1.jpg" },
  { id: 4, img: "flx2.jpg" },
  { id: 5, img: "flx3.jpg" },
  { id: 6, img: "net.jpg" },
  { id: 7, img: "ws.jpg" },
  { id: 8, img: "ww.jpg" },
  { id: 9, img: "flx3.jpg" },
  { id: 10, img: "ee.jpg" },
];

const CardSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="max-w-[80vw]  mx-auto py-16  relative overflow-visible">
      <div className="text-2xl -ml-4 text-white mb-4 mt-4">Trending Now</div>

      <button
        ref={prevRef}
        className={`absolute -left-8 top-[55%] -translate-y-1/2 w-6 h-34 bg-gray-800 text-white text-xl  rounded-lg hover:bg-gray-900 z-50 transition-opacity duration-300 ${
          activeIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        &lt;
      </button>

      <button
        ref={nextRef}
        className={`absolute -right-8  top-[55%] -translate-y-1/2 w-6 h-34 bg-gray-800 text-white text-xl rounded-lg hover:bg-gray-900 z-50 transition-opacity duration-300 ${
          isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        &gt;
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        breakpoints={{
          320: { slidepreview: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          setIsEnd(swiper.isEnd);
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="relative overflow-visible group transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div
                className="absolute -left-5 bottom-1 z-30 text-[105px]  font-bold text-[#0a0a0a]  transition-transform duration-300"
                style={{ WebkitTextStroke: "1px white" }}
              >
                {card.id}
              </div>

              <img
                src={card.img}
                alt={`Card ${card.id}`}
                className="h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};  

export default CardSlider;
