'use client';

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";

const ACCESS_KEY = "nUXJ7zUiXb2Y6s0ar-9Db6buSzzOA3wTIw-ay2XOJz4";

interface UnsplashImage {
  id: string;
  urls: {
    full: string;
  };
  alt_description: string;
}

export default function ProjectCarousel3() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const query = "landscaping design"; // Adjust search term as needed

      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&client_id=${ACCESS_KEY}`
        );
        setImages(response.data.results);
      } catch (error) {
        console.error("Error fetching images from Unsplash", error);
      } finally {
        setLoadingImages(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="flex justify-center">
      {!loadingImages ? (
        <div className="p-2">
          <Card className="w-full sm:w-[500px] mx-4">
            <CardContent className="flex items-center justify-center p-4 sm:p-8">
              <Image
                src={images[currentImageIndex]?.urls.full || "/images/placeholder.jpg"}
                alt={images[currentImageIndex]?.alt_description || "Landscaping Design"}
                width={300}
                height={300}
                className="w-full sm:w-auto font-abel font-light tracking-wide"
              />
            </CardContent>
            <CardContent className="flex items-center justify-center p-4 sm:p-8">
              <h4 className="scroll-m-20 text-lg sm:text-xl font-abel font-light tracking-wide">
                Landscaping Design
              </h4>
            </CardContent>
            <CardContent className="flex items-center justify-center p-4 sm:p-8">
              <p className="leading-7 [&:not(:first-child)]:mt-6 font-abel font-light tracking-wide text-center">
                We provide sports ground maintenance, roundabout landscaping, and gardening, 
                along with supplying flowers and seedlings.
              </p>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="flex flex-col space-y-3 items-center">
          <Skeleton className="h-[150px] sm:h-[250px] w-[150px] sm:w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[100px] sm:w-[250px]" />
            <Skeleton className="h-4 w-[80px] sm:w-[200px]" />
          </div>
        </div>
      )}
    </div>
  );
}
