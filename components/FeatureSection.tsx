import FeatureCard from "./FeatureCard";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const features = [
  {
    title: "Pharmacy bag pickup reminder",
    description:
      "Timely medication alerts with clear packaging and personalized dosing information",
    imageUrl: "/images/feature-1.png",
  },
  {
    title: "PillSync pharmacist bot",
    description:
      "Our PillSyncBot offers smart medication guidance and answers your questions",
    imageUrl: "/images/feature-2.png",
  },
  {
    title: "PillSync device connection prompt",
    description:
      "Visual guidance ensures an easy and secure connection to our PillSync device",
    imageUrl: "/images/feature-3.png",
  },
];

export default function FeatureSection() {
  return (
    <section id="product" className="mx-auto max-w-7xl pt-8 lg:pt-16">
      <Swiper
        grabCursor
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        style={{
          paddingBottom: "3rem",
        }}
        className="[&_.swiper-pagination-bullet]:bg-teal-500"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="px-0 md:px-0">
              <FeatureCard {...feature} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
