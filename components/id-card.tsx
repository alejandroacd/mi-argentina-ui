'use client'
import React from 'react';
import { useImageContext } from '../app/context/CardFlipContext'; // Adjust the path accordingly
import Image from 'next/image';

export default function IdCard() {
  const { imageSrc, toggleImage } = useImageContext(); // Access image source from context


  return (
    <div className="px-1">
      <h2 className="text-lg mb-4 tracking-tighter text-[#272727]">Alejandro Ali Contreras Diaz</h2>
      <div className="rounded-lg shadow-lg p-4">
        {/* Apply fade effect with transition */}
        <div onClick={toggleImage} className={`w-full h-full relative transition-opacity duration-500`}>
          <Image
            src={imageSrc}
            alt="DNI"
            width={800}
            height={600}
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
}
