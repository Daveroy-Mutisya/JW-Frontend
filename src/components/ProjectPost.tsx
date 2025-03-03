// src/app/Project/[id]/page.tsx

'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { NavBar } from '@/components/NavBar';
import axios from "axios";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const ACCESS_KEY = "nUXJ7zUiXb2Y6s0ar-9Db6buSzzOA3wTIw-ay2XOJz4";

interface Project {
  id: number;
  title: string;
  project_name: string;
  image: string;
  description: string;
  location: string;
  date: string;
  user_id: number;
}

interface UnsplashImage {
  id: string;
  urls: {
    full: string;
  };
  alt_description: string;
}

const ProjectPost: React.FC = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [beforeImages, setBeforeImages] = useState<UnsplashImage[]>([]);
  const [afterImages, setAfterImages] = useState<UnsplashImage[]>([]);

  // Retrieve project ID from localStorage
  const id = typeof window !== 'undefined' ? localStorage.getItem('selectedProjectId') : null;

  useEffect(() => {
    if (!id) {
      console.error("Project ID not found in localStorage");
      setLoading(false);
      return;
    }

    const API = 'https://jawabu-interiors-backend.onrender.com';

    fetch(`${API}/projects/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Project Data:", data); // Debugging API response
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project data:", err);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    const fetchImages = async (query: string, setImages: React.Dispatch<React.SetStateAction<UnsplashImage[]>>) => {
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&client_id=${ACCESS_KEY}`);
        setImages(response.data.results);
      } catch (error) {
        console.error(`Error fetching ${query} images from Unsplash`, error);
      }
    };

    fetchImages("under-construction-interior", setBeforeImages);
    fetchImages("interior-design", setAfterImages);
  }, []);

  if (loading) {
    return <Skeleton className="w-full h-screen" />;
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <h3 className="text-xl font-abel font-light tracking-wide mb-2">Before:</h3>
            {beforeImages.length > 0 && (
              <div className="relative w-full h-96">
                <Image
                  src={beforeImages[0].urls.full}
                  alt={beforeImages[0].alt_description || "Before Interior Design"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            )}
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <h3 className="text-xl font-abel font-light tracking-wide mb-2">After:</h3>
            {afterImages.length > 0 && (
              <div className="relative w-full h-96">
                <Image
                  src={afterImages[0].urls.full}
                  alt={afterImages[0].alt_description || "After Interior Design"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            )}
          </ResizablePanel>
        </ResizablePanelGroup>
        <div className="p-4 w-full">
          <h2 className="text-4xl font-abel font-light tracking-wide text-white text-center">
            {project?.project_name || "Project Name Not Available"}
          </h2>
          <p className="text-white mt-4 text-lg font-abel font-light tracking-wide">
            {project?.description || "No description available"}
          </p> 
          <p className="text-white mt-4 text-lg font-abel font-light tracking-wide">
            {project?.location || "No location provided"}
          </p>
          <p className="text-white mt-4 text-lg font-abel font-light tracking-wide">
            {project?.title || "No title available"}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectPost;
