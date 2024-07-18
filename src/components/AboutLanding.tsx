'use client'

import React from 'react';
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { AboutAccordion } from './AboutAccordion';

const ACCESS_KEY = "nUXJ7zUiXb2Y6s0ar-9Db6buSzzOA3wTIw-ay2XOJz4";


interface UnsplashImage {
  id: string;
  urls: {
    full: string;
  };
  alt_description: string;
}


const  AboutLandingSection = () => {
  const [image, setImage] = useState<UnsplashImage | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=black-interior&orientation=landscape&client_id=${ACCESS_KEY}`
        );
        const images = response.data.results;
        if (images.length > 0) {
          setImage(images[0]);
        }
      } catch (error) {
        console.error('Error fetching image from Unsplash', error);
      }
    };

    fetchImage();
  }, []);



  return (
    <>
          <div className="relative h-screen w-full">
        {/* {image && (
          <Image
            src={image.urls.full}
            alt={image.alt_description || 'Green Interior Design'}
            layout="fill"
            objectFit="cover"
            className="blur-md z-0"
          />
        )} */}
        <div className="relative z-20 text-white text-left p-4 hover:text-opacity-100 text-opacity-50 transition duration-300 ease-in-out flex flex-col items-center justify-center h-full">
          <h2 className="scroll-m-20 border-b pb-2 text-9xl font-semibold tracking-tight first:mt-0">
            About Us
          </h2>
          <div className='flex flex-row my-5 mx-20'>
            <div className='flex flex-col w-1/2 pr-10'>
              <h4 className="scroll-m-20 text-6xl font-semibold tracking-tight text-left text-green-500">
                Welcome to Jawabu Interiors:
              </h4>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl hover:text-green-500">
                Jawabu Interiors is a sole proprietorship owned and operated by Yvonne Mutisya as the sole Director; supported by Architects, 
                Quantity Surveyors, a Project Manager, Finance Manager, Business Development Manager, an Office Administrator, Lead Technician, Site Managers, Fleet Manager and an Accountant. 
                This team has been brought on board to supplement the director’s duties and propagate the achievement of the stipulated goals of the company. 
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl hover:text-green-500">
                We anticipate hiring more staff in future to keep up with the competitive edge of the market to realize future expansion across the border.
                We offer comprehensive Interior Design Services for Commercial and Corporate Premises and Residential houses in Kenya and even beyond. 
                We also provide access to products to complement the design consulting services including furniture, both new and antique, decorator fabric, and home and office accessories. 
                Our products and services are tailored to seamlessly meet our target market desires and which is affordable in a way that is unique from concept to implementation.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl hover:text-green-500">
                We also provide access to products to complement the design consulting services including furniture, both new and antique, decorator fabric, and home and office accessories. 
                Our products and services are tailored to seamlessly meet our target market desires and which is affordable in a way that is unique from concept to implementation.
              </p>
            </div>
            <div className='flex flex-col w-1/2 mt-52'>
              <AboutAccordion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutLandingSection;
