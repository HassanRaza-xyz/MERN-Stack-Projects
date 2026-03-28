import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <div className="my-5">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
           <div className='relative'>
          <img  src="/banner-01.jpg" alt="Slide 1" className='object-cover'  />
          <div className='absolute lg:top-40 lg:left-80   text-white  p-8'>
        <h2 className='text-lg p-2 inline text-black bg-white '>Toronto ,<span className='text-orange-500'> Canada</span></h2>
        <h2 className='font-bold text-7xl mt-10'>HURRY! <br />GET THE BEST <br /> VILLA FOR <br />YOU
        </h2>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
          <img src="/banner-02.jpg" alt="Slide 2" />
          <div className='absolute lg:top-40 lg:left-80 text-white p-8 '>
               <h2 className='text-lg p-2 inline text-black bg-white '>Melburne,<span className='text-orange-500'> Australia</span></h2>
        <h2 className='font-bold text-7xl mt-10'>BE QUICK! <br />GET THE BEST <br /> VILLA IN <br />TOWN
</h2>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>  <div className='relative'>
          <img src="/banner-03.jpg" alt="Slide 2" />
          <div className='absolute font-normal lg:top-40 lg:left-80 text-white p-8 '>
               <h2 className='text-lg p-2 inline text-black bg-white '>MIAMI ,<span className='text-orange-500'>SOUTH FLORIDA</span></h2>
        <h2 className='font-bold text-7xl mt-10'>ACT NOW! <br />GET THE <br /> HIGHEST <br />LEVEL <br />  PENTHOUSE 
</h2>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
