'use client'

//finished///
import React from 'react';
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";


const ACCESS_KEY = "nUXJ7zUiXb2Y6s0ar-9Db6buSzzOA3wTIw-ay2XOJz4";
const API_KEY = "Ad7AFtW0jqjI5XjhmaasmQ==n1FeKUSGrk3Hrqil";

interface UnsplashImage {
  id: string;
  urls: {
    full: string;
  };
  alt_description: string;
}

interface QuoteAPI {
  quote: string;
  author: string;
  category: string;
}

const LandingSection = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quotes, setQuotes] = useState<QuoteAPI[]>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=green-interior&orientation=landscape&client_id=${ACCESS_KEY}`
        );
        setImages(response.data.results);
      } catch (error) {
        console.error("Error fetching images from Unsplash", error);
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

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=success', {
          headers: {
            'X-Api-Key': API_KEY,
          },
        });
        setQuotes(response.data);
      } catch (error) {
        console.error("Error fetching quotes from API", error);
      }
    };

    fetchQuotes();
  }, []);

  useEffect(() => {
    if (quotes.length > 0) {
      const interval = setInterval(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 3600); // Change quote every 10 seconds
      return () => clearInterval(interval);
    }
  }, [quotes]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {images.length > 0 && (
        <Image
          src={images[currentImageIndex].urls.full}
          alt={images[currentImageIndex].alt_description || "Interior Design"}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      )}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-white text-left p-4 hover:text-opacity-100 text-opacity-50 transition duration-300 ease-in-out ">
        <h1 className="scroll-m-20 text-4xl font-abel font-bold tracking-thin lg:text-8xl">
          Quote of the hour:
        </h1>
        {quotes.length > 0 && (
          <div>
            <blockquote className="mt-6 border-l-2 pl-6 italic font-abel font-light tracking-wide text-4xl">
              {quotes[currentQuoteIndex].quote}
            </blockquote>
            <blockquote className="mt-6 border-l-2 pl-6 italic font-abel font-light tracking-wide text-4xl">
              {quotes[currentQuoteIndex].author}
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingSection;
