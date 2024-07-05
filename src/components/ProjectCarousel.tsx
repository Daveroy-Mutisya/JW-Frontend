import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const ACCESS_KEY = "nUXJ7zUiXb2Y6s0ar-9Db6buSzzOA3wTIw-ay2XOJz4";


// interface UnsplashImage {
//   id: string;
//   urls: {
//     full: string;
//   };
//   alt_description: string;
// }

// interface JW_Backend {
//   id: number;
//   title: string;
//   project_name: string;
// }

// export function ProjectCard() {
//   const [projects, setProjects] = useState<JW_Backend[]>([]);
//   const [images, setImages] = useState<UnsplashImage[]>([]);
//   const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:5000/projects");
//         setProjects(response.data.results);
//       } catch (error) {
//         console.error("Error fetching projects from JW_Backend", error);
//       }
//     };

//     const fetchImages = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.unsplash.com/search/photos?query=green-interior&orientation=landscape&client_id=${ACCESS_KEY}`
//         );
//         setImages(response.data.results);
//       } catch (error) {
//         console.error("Error fetching images from Unsplash", error);
//       }
//     };

//     fetchProjects();
//     fetchImages();
//   }, []);

//   useEffect(() => {
//     if (images.length > 0) {
//       const interval = setInterval(() => {
//         setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
//       }, 10000); // Change project every 10 seconds
//       return () => clearInterval(interval);
//     }
//   }, [projects]);

//   if (projects.length === 0 || images.length === 0) {
//     return <div>Loading...</div>;
//   }

//   const currentProject = projects[currentProjectIndex];
//   const currentImage = images[currentProjectIndex % images.length];

export function ProjectCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  
return (
  <Carousel
    plugins={[plugin.current]}
    className="w-full max-w-xs"
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
  >
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
                < CardContent className="flex aspect-square items-center justify-center p-6">
                </CardContent>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
)
}
 