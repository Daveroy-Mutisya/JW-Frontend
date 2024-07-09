import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import chat from "../../public/chat.png";
import envelope from "../../public/envelope.png";
import trophy from "../../public/trophy.png";
import wallet from "../../public/wallet.png";
import paintbrush from "../../public/paintbrush.png";
import work from "../../public/work.png";

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
          `https://api.unsplash.com/search/photos?query=green-interior&orientation=landscape&client_id=${ACCESS_KEY}`
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
    <div className="relative h-screen w-full flex flex-col items-center justify-center">
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
      <div className="absolute inset-0 flex flex-col items-center pt-20 justify-center  z-20 text-white text-center p-4 backdrop-filter backdrop-blur-md">
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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-20 text-white text-center">
          <div className="flex flex-col items-center">
            <Image src={paintbrush} alt="paintbrush" width={50} height={50} />
            <div className="mt-4">
              <h4 className="text-xl font-semibold">Interior Expertise</h4>
              <p className="leading-7 mt-2">
                Expert interior design tailored to your lifestyle.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={trophy} alt="trophy" width={50} height={50} />
            <div className="mt-4">
              <h4 className="text-xl font-semibold">Award Winning</h4>
              <p className="leading-7 mt-2">
                Recognized for our excellence and innovation.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={chat} alt="chat" width={50} height={50} />
            <div className="mt-4">
              <h4 className="text-xl font-semibold">Free Consultation</h4>
              <p className="leading-7 mt-2">
                Get expert advice without any cost.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={wallet} alt="wallet" width={50} height={50} />
            <div className="mt-4">
              <h4 className="text-xl font-semibold">Reasonable Prices</h4>
              <p className="leading-7 mt-2">
                Quality services at affordable prices.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={work} alt="work" width={50} height={50} />
            <div className="mt-4">
              <h4 className="text-xl font-semibold">Guaranteed Works</h4>
              <p className="leading-7 mt-2">
                We stand by our work with a satisfaction guarantee.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={envelope} alt="envelope" width={50} height={50} />
            <div className="mt-4">
              <h4 className="text-xl font-semibold">24/7 Support</h4>
              <p className="leading-7 mt-2">
                We're here for you anytime, day or night.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlurBackground;
