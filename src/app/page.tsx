// src/app/page.tsx
'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import logo2 from "../../public/logo2.png";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import ProjectCarousel2 from "@/components/ProjectCarousel2";

const ACCESS_KEY = "nUXJ7zUiXb2Y6s0ar-9Db6buSzzOA3wTIw-ay2XOJz4";

interface UnsplashImage {
  id: string;
  urls: {
    full: string;
  };
  alt_description: string;
}

export default function Home() {
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

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-#f0fdf4-900">
        <div className="flex items-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Jawabu
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-4 text-green-500">
            Interiors
          </h1>
        </div>
        <div>
          <NavBar />
        </div>
      </div>
      <section className="relative h-screen flex flex-col gap-2 justify-center items-center">
        {images.length > 0 && (
          <Image
            src={images[currentImageIndex].urls.full}
            alt={images[currentImageIndex].alt_description || "Interior Design"}
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        )}
        
      </section>
      <section className="relative h-screen flex flex-col gap-1 justify-center items-center">
        <div>
          <h3 className="scroll-m-20 text-4xl font-semibold tracking-tight text-green-600 text-center align-text-top">
            Our Philosophy
          </h3>
          <h2 className="scroll-m-20 border-b pb-2 text-7xl font-semibold tracking-tight first:mt-0 text-center">
          It's not about ideas. It's about making ideas happen
          </h2>
          <p className="text-4xl text-muted-foreground text-center">
            Our commitment to quality and services ensure our clients are happy. We're
            happy to make you feel comfortable in your own home.
          </p>
        </div>
        <div>
          <ProjectCarousel2 />
        </div>
      </section>
    </>
  );
}
