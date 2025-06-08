import React from "react";
import Image from "next/image";

type FeatureCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
};

const FeatureCard = ({
  title,
  description,
  imageUrl,
  imageAlt = "Image",
}: FeatureCardProps) => {
  return (
    <div className="lg:flex lg:gap-40 items-center">
      {/* Text Block */}
      <div className="mt-8 lg:mt-0 lg:w-1/2">
        <h2 className="text-h4 font-bold text-zinc-700 lg:text-h2">{title}</h2>
        <p className="my-5 text-h5 font-medium text-gray-500 lg:mt-10 lg:text-h5">
          {description}
        </p>
      </div>

      {/* Image Block */}
      <div className="relative mt-8 lg:mt-0 lg:w-1/2 h-[300px] md:h-[400px] lg:h-[650px] w-full flex justify-end">
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            priority
            // loading="lazy"  // Uncomment if you want lazy loading instead of eager
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
