// src/app/page.tsx

'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import logo2 from "../../public/logo2.png";

const ACCESS_KEY = "nUXJ7zUiXb2Y6s0ar-9Db6buSzzOA3wTIw-ay2XOJz4";

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
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
      }, 10000); // Change image every 5 seconds
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white-900">
        <div className="flex items-center">
          <Image src={logo2} alt="Logo" width={50} height={50} />
          <h1 className="text-4xl font-greatvibes text-black">awabu</h1>
          <h1 className="text-4xl font-greatvibes text-green-600">Interiors</h1>
        </div>
        <div>
          <NavBar />
        </div>
      </div>
      <main className="relative h-screen flex flex-col gap-2 justify-center items-center">
        {images.length > 0 && (
          <Image
            src={images[currentImageIndex].urls.regular}
            alt={images[currentImageIndex].alt_description || "Interior Design"}
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        )}

      </main>
    </>
  );
}
