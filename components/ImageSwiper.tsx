import React from "react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const slides = [
  {
    src: "/images/kitchen-rendering.png",
    alt: "Kitchen Image",
    title: "Various PillSyncs, Working Side-by-Side",
    description:
      " Family members can easily stay connected and help remind one another to take medications on time — no matter where they are.",
  },
  {
    src: "/images/study-desk-rendering.png",
    alt: "Study Desk Image",
    title: "Anywhere from your desk",
    description: "Stay on schedule while staying productive — PillSync blends perfectly into your workspace.",
  },
  {
    src: "/images/bedroom-rendering.png",
    alt: "Bedroom Image",
    title: "Anywhere from your bedroom",
    description: "PillSync sits quietly by your bedside, delivering gentle reminders just when you need them.",
  },
  {
    src: "/images/living-room-rendering.png",
    alt: "Living Room Image",
    title: "Anywhere from your living room",
    description: "With a minimal look and smart functionality, PillSync keeps you on track without disrupting your style.",
  },
];

export default function ImageSwiper() {
  return (
    <Swiper
      grabCursor
      navigation={false}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      observer={true}
      observeParents={true}
      style={{
        paddingBottom: "3rem",
      }}
      className="[&_.swiper-pagination-bullet]:bg-teal-500"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative group w-full h-[400px] md:h-[600px] border">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start px-5 py-5 md:px-20 md:py-10 bg-zinc-50 border-8 border-sky-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-body-lg md:text-h4 font-bold text-zinc-700 mb-8">
                {slide.title}
              </div>
              <div className="text-body-lg md:text-h4 font-regular text-gray-500">
                {slide.description}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
