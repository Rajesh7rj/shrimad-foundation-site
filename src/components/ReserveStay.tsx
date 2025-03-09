"use client"
import React from 'react';

type ReserveStayProps = {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
};

const ReserveStay: React.FC<ReserveStayProps> = ({
  heading,
  description,
  buttonLabel,
  buttonLink,
}) => {
  return (
    <div id="reserve-your-stay" className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div
        className={`absolute inset-0  bg-cover bg-center`}
      ></div>
      <div className="relative container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-[#A10C22] mb-4">{heading}</h2>
        <p className="text-lg text-gray-700 mb-6">{description}</p>
        <a
          href={buttonLink}
          target="_blank"
          className="bg-[#A10C22] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#8B0A1E] transition"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default ReserveStay;
