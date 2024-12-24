'use client'

import React, { createContext, useState, ReactNode, useContext } from 'react';

interface ImageContextType {
  imageSrc: string;
  toggleImage: () => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

interface ImageProviderProps {
  children: ReactNode;
}

export const ImageProvider = ({ children }: ImageProviderProps) => {
  const [imageSrc, setImageSrc] = useState<string>('/dni3.jpeg');

  const toggleImage = () => {
    setImageSrc((prevSrc) => (prevSrc === '/dni3.jpeg' ? '/dni2.jpeg' : '/dni3.jpeg'));
  };

  return (
    <ImageContext.Provider value={{ imageSrc, toggleImage }}>
      {children}
    </ImageContext.Provider>
  );
};

// Custom hook to use the ImageContext
export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};
