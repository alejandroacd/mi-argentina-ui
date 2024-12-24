'use client'
import React, { useState, useEffect } from 'react';
import { useImageContext } from '../app/context/CardFlipContext'; // Adjust the path accordingly
import Image from 'next/image';

export default function IdCard() {
  const { imageSrc } = useImageContext(); // Access image source from context
  const [opacity, setOpacity] = useState(1);

  const handleImageTransition = () => {
    setOpacity(0); // Set opacity to 0 before the transition
    setTimeout(() => setOpacity(1), 100); // Reset opacity to 1 after 300ms
  };

  // Trigger the opacity change on image source update
  useEffect(() => {
    handleImageTransition();
  }, [imageSrc]);

  return (
    <div className="px-1">
      <h2 className="text-lg mb-4 tracking-tighter text-[#272727]">Alejandro Ali Contreras Diaz</h2>
      <div className="rounded-lg shadow-lg p-4">
        {/* Apply fade effect with transition */}
        <div className={`w-full h-full relative transition-opacity duration-500 ${opacity === 0 ? 'opacity-0' : 'opacity-100'}`}>
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
