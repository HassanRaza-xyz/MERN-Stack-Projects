import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="my-5 p-2 mb-40 relative">
      <button
        ref={prevRef}
        className="absolute top-1/2 z-50 left-10  bg-[#FFFFFF33] text-white p-3 h-14 w-14 rounded-full shadow-lg hover:bg-[#fff0f09f] hover:text-white transition-all"
        >
        <button className='font-semibold -translate-y-[2px] text-4xl'> &lt; </button>
</button>
      <button
        ref={nextRef}
        className="absolute top-1/2 z-50  right-10  bg-[#FFFFFF33] text-white p-3 rounded-full h-14 w-14 shadow-lg hover:bg-[#fff0f09f] hover:text-white transition-all"
      >
        <button className='font-semibold -translate-y-[2px] text-4xl'> &gt; </button>
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
      >
        
        <SwiperSlide>
          <div className="relative">
            <img src="/banner-01.jpg" alt="Slide 1" className="object-cover w-full" />
            <div className="absolute lg:top-40 lg:left-80 text-white p-8">
              <h2 className="text-lg px-4 font-medium py-1.5 inline text-black bg-white">
                Toronto, <span className="text-orange-500">Canada</span>
              </h2>
              <h2 className="font-bold text-7xl mt-10">
                HURRY! <br />GET THE BEST <br /> VILLA FOR <br />YOU
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div className="relative">
            <img src="/banner-02.jpg" alt="Slide 2" className="object-cover w-full" />
            <div className="absolute lg:top-40 lg:left-80 text-white p-8">
              <h2 className="text-lg font-medium px-4 py-2 inline text-black bg-white">
                Melbourne, <span className="text-orange-500">Australia</span>
              </h2>
              <h2 className="font-bold text-7xl mt-10">
                BE QUICK! <br />GET THE BEST <br /> VILLA IN <br />TOWN
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img src="/banner-03.jpg" alt="Slide 3" className="object-cover w-full" />
            <div className="absolute font-medium lg:top-40 lg:left-80 text-white p-8">
              <h2 className="text-lg px-4 py-2 inline text-black bg-white">
                MIAMI, <span className="text-orange-500">SOUTH FLORIDA</span>
              </h2>
              <h2 className="font-bold text-7xl mt-10">
                ACT NOW! <br />GET THE <br /> HIGHEST <br />LEVEL <br /> PENTHOUSE
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
