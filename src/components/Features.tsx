'use client';

//finished//

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
import DarkGreen from "../../public/DarkGreen.jpg"

const ACCESS_KEY = 'nUXJ7zUiXb2Y6s0ar-9Db6buSzzOA3wTIw-ay2XOJz4';

interface UnsplashImage {
  id: string;
  urls: {
    full: string;
  };
  alt_description: string;
}

const FeaturesSection = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=black-interior-design&orientation=landscape&client_id=${ACCESS_KEY}`
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
      <div className="relative p-10 mt-10 sm:mt-20 flex flex-col justify-center text-white text-center">
  <div className='mt-2 mb-4'>
    <h3 className="text-2xl font-abel font-light tracking-wide text-lime-500 text-center">
      Discover
    </h3>
    <h2 className="border-b pb-2 text-5xl font-abel font-light tracking-wide text-center leading-snug">
      Our Features
    </h2>
    <p className="text-3xl font-abel font-light tracking-wide text-muted-foreground text-center mt-2 leading-relaxed">
      Our commitment to quality and services ensures our clients are happy.
    </p>
    <p className="text-3xl font-abel font-light tracking-wide text-muted-foreground text-center mt-2 leading-relaxed">
      We're happy to make you feel more comfortable in your home.
    </p>
  </div>
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 text-white text-center items-center font-abel font-light tracking-wide">
          <div className="flex flex-col items-center mx-8 sm:mx-20 lg:mx-40 mt-10">
            <Image src={paintbrush} alt="paintbrush" width={40} height={40} className="sm:w-50 sm:h-50" />
            <div className="mt-6 sm:mt-8">
              <h4 className="text-base sm:text-lg lg:text-xl font-abel font-light tracking-wide">Interior Expertise</h4>
              <p className="leading-6 mt-2 text-sm sm:text-base lg:text-lg font-abel font-light tracking-wide">
                Expert interior design tailored to your lifestyle.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={trophy} alt="trophy" width={40} height={40} className="sm:w-50 sm:h-50" />
            <div className="mt-4">
              <h4 className="text-lg font-abel font-light tracking-wide sm:text-xl">Award Winning</h4>
              <p className="leading-6 mt-2 text-sm sm:text-base font-abel font-light tracking-wide">
                Recognized for our excellence and innovation.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={chat} alt="chat" width={40} height={40} className="sm:w-50 sm:h-50" />
            <div className="mt-4">
              <h4 className="text-lg font-abel font-light tracking-wide sm:text-xl">Free Consultation</h4>
              <p className="leading-6 mt-2 text-sm sm:text-base font-abel font-light tracking-wide">
                Get expert advice without any cost.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={wallet} alt="wallet" width={40} height={40} className="sm:w-50 sm:h-50" />
            <div className="mt-4">
              <h4 className="text-lg font-abel font-light tracking-wide sm:text-xl">Reasonable Prices</h4>
              <p className="leading-6 mt-2 text-sm sm:text-base font-abel font-light tracking-wide">
                Quality services at affordable prices.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={work} alt="work" width={40} height={40} className="sm:w-50 sm:h-50" />
            <div className="mt-4">
              <h4 className="text-lg font-abel font-light tracking-wide sm:text-xl">Guaranteed Works</h4>
              <p className="leading-6 mt-2 text-sm sm:text-base font-abel font-light tracking-wide">
                We stand by our work with a satisfaction guarantee.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={envelope} alt="envelope" width={40} height={40} className="sm:w-50 sm:h-50" />
            <div className="mt-4">
              <h4 className="text-lg font-abel font-light tracking-wide sm:text-xl">9-5 Support</h4>
              <p className="leading-6 mt-2 text-sm sm:text-base font-abel font-light tracking-wide">
                We're here for you anytime, day during office hours.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FeaturesSection;
