import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card } from './ui/card';

const ACCESS_KEY = 'nUXJ7zUiXb2Y6s0ar-9Db6buSzzOA3wTIw-ay2XOJz4';

interface UnsplashImage {
  id: string;
  urls: {
    full: string;
  };
  alt_description: string;
}

const BlurBackground = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=green-blur-background&orientation=landscape&client_id=${ACCESS_KEY}`
        );
        setImages(response.data.results);
      } catch (error) {
        console.error('Error fetching images from Unsplash', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000); // Change image every 10 seconds
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {images.length > 0 && (
        <Image
          src={images[currentImageIndex].urls.full}
          alt={images[currentImageIndex].alt_description || 'Interior Design'}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      )}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center p-4 backdrop-filter backdrop-blur-md">
        <h3 className="scroll-m-20 text-4xl font-semibold tracking-tight text-green-600">
          Discover
        </h3>
        <h2 className="scroll-m-20 border-b pb-2 text-7xl font-semibold tracking-tight first:mt-0">
          Our Features
        </h2>
        <p className="text-4xl text-muted-foreground">
          Our commitment to quality and services ensure our clients are happy.
        </p>
        <p className="text-4xl text-muted-foreground">
          We're happy to make you feel more comfortable in your home.
        </p>
      </div>
    </div>
  );
};

export default BlurBackground;
