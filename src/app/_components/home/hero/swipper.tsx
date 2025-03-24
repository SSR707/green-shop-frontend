"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";
import CustomHero from "@/components/custom-hero/custom-hero";
const Swipper = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-[450px] bg-gray-100  "
      >
        <SwiperSlide>
          <CustomHero />
        </SwiperSlide>
        <SwiperSlide>
          <CustomHero />
        </SwiperSlide>
        <SwiperSlide>
          <CustomHero />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipper;
