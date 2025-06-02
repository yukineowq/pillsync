import React from "react";
import Image from "next/image";

interface StepCardProps {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt?: string;
}

export default function StepCard({
  title,
  description,
  iconSrc,
  iconAlt = "Icon",
}: StepCardProps) {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-col border-4 rounded-xl border-sky-100 border-opacity-50 p-8 lg:flex-row flex-grow w-full">
        <div className="w-16 h-16 md:mr-8 md:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">
          <Image src={iconSrc} alt={iconAlt} width={48} height={48} />
        </div>
        <div className="flex-grow flex flex-col">
          <h2 className="text-zinc-700 text-h5 font-semibold mb-3">{title}</h2>
          <p className="leading-relaxed text-gray-500 text-body-lg font-medium flex-grow">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
