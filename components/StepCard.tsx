import React from "react";
import Image from "next/image";

type StepCardProps = {
  title: string;
  subtitle: string;
  description: string;
  iconSrc: string;
  iconAlt?: string;
};

const StepCard = ({
  title,
  subtitle,
  description,
  iconSrc,
  iconAlt = "Icon",
}: StepCardProps) => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-col border-4 rounded-xl border-sky-100 border-opacity-50 p-8 lg:flex-row flex-grow w-full md:items-center">
        <div className="relative w-12 h-12 md:mr-8 md:mb-0 mb-4 rounded-full flex-shrink-0">
          <Image
            src={iconSrc}
            alt={iconAlt}
            fill
            className="object-contain p-0 m-0"
          />
        </div>
        <div className="flex-grow flex flex-col gap-4">
          <h2 className="text-zinc-700 text-h5 font-semibold">{title}</h2>
          <p className="leading-relaxed text-gray-500 text-body-lg font-semibold flex-grow">
            {subtitle}
          </p>
          <p className="leading-relaxed text-gray-500 text-body-sm font-medium flex-grow">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
