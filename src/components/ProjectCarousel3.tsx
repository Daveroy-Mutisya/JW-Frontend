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

interface JW_Backend {
  id: number;
  title: string;
  project_name: string;
}

export default function ProjectCarousel3() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [project, setProject] = useState<JW_Backend | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=landscaping-design&orientation=landscape&client_id=${ACCESS_KEY}`,
        );
        setImages(response.data.results);
      } catch (error) {
        console.error("Error fetching images from Unsplash", error);
      }
    };

    const fetchProject = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/projects/8');
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching project", error);
      }
    };

    fetchImages();
    fetchProject();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        {project ? (
          <div className="p-2">
            <Card className="w-full sm:w-[500px] mx-4">
              <CardContent className="flex items-center justify-center p-4 sm:p-8">
                <Image
                  src={images[currentImageIndex]?.urls.full || "/images/placeholder.jpg"}
                  alt={images[currentImageIndex]?.alt_description || "Interior Design"}
                  width={300}
                  height={300}
                  className="w-full sm:w-auto"
                />
              </CardContent>
              <CardContent className="flex items-center justify-center p-4 sm:p-8">
                <h4 className="scroll-m-20 text-lg sm:text-xl font-semibold tracking-tight">
                 Landscaping Design
                </h4>
              </CardContent>
              <CardContent className="flex items-center justify-center p-4 sm:p-8">
              <p className="leading-7 [&:not(:first-child)]:mt-6">
              We provide sports ground maintenance, roundabout landscaping, and gardening, along with supplying flowers and seedlings.
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
    </>
  );
}
