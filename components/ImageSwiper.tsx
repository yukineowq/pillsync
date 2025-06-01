import React from "react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function ImageSwiper() {
  return (
    <Swiper
      grabCursor
      navigation={false}
      pagination={true}
      autoplay={true}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      style={{
        paddingBottom: "3rem",
      }}
      className="[&_.swiper-pagination-bullet]:bg-teal-500"
    >
      <SwiperSlide>
        <div className="relative group w-full h-full">
          {/* Image */}
          <Image
            src="/images/elderly-image.png"
            alt="Elderly Image"
            width={1456}
            height={816}
            className="w-full h-auto object-cover"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-10 py-5 lg:px-20 lg:py-10 bg-zinc-50 border-8 border-sky-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-h5 lg:text-h3 font-bold text-zinc-700 mb-8">
              For elderly members
            </div>
            <div className="text-h5 lg:text-h3 font-regular text-zinc-700">
              Friendly reminder to take a prescribed dose on PillSync
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative group w-full h-full">
          {/* Image */}
          <Image
            src="/images/children-image.png"
            alt="Children Image"
            width={1456}
            height={816}
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-10 py-5 lg:px-20 lg:py-10 bg-zinc-50 border-8 border-sky-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-h5 lg:text-h3 font-bold text-zinc-700 mb-8">
              For children
            </div>
            <div className="text-h5 lg:text-h3 font-regular text-zinc-700">
              Friendly reminder to take a prescribed dose on PillSync
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative group w-full h-full">
          {/* Image */}
          <Image
            src="/images/parents-image.png"
            alt="Parents Image"
            width={1456}
            height={816}
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-10 py-5 lg:px-20 lg:py-10 bg-zinc-50 border-8 border-sky-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-h5 lg:text-h3 font-bold text-zinc-700 mb-8">
              For parents
            </div>
            <div className="text-h5 lg:text-h3 font-regular text-zinc-700">
              Friendly reminder to take a prescribed dose on PillSync
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
