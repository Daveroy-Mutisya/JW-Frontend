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
  const id = typeof window !== 'undefined' ? localStorage.getItem('selectedProjectId') : null;
  const [loadingBefore, setLoadingBefore] = useState(true);
  const [loadingAfter, setLoadingAfter] = useState(true);
  const [beforeImages, setBeforeImages] = useState<UnsplashImage[]>([]);
  const [afterImages, setAfterImages] = useState<UnsplashImage[]>([]);

  useEffect(() => {
    const fetchBeforeImages = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=under-construction-interior&orientation=landscape&client_id=${ACCESS_KEY}`);
        setBeforeImages(response.data.results);
        setLoadingBefore(false);
      } catch (error) {
        console.error("Error fetching before images from Unsplash", error);
      }
    };

    const fetchAfterImages = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=interior-design&orientation=landscape&client_id=${ACCESS_KEY}`);
        setAfterImages(response.data.results);
        setLoadingAfter(false);
      } catch (error) {
        console.error("Error fetching after images from Unsplash", error);
      }
    };

    fetchBeforeImages();
    fetchAfterImages();
  }, []);

  useEffect(() => {
    if (!id) return;

    const API = 'http://127.0.0.1:5000';

    fetch(`${API}/projects/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!project || loadingBefore || loadingAfter) {
    return <Skeleton className="w-full h-screen" />;
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <h3 className="text-xl font-bold mb-2">Before:</h3>
            {beforeImages.length > 0 && (
              <div className="relative w-full h-96"> {/* Set parent height */}
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
            <h3 className="text-xl font-bold mb-2">After:</h3>
            {afterImages.length > 0 && (
              <div className="relative w-full h-96"> {/* Set parent height */}
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
          <h2 className="text-4xl font-semibold text-white text-center">{project.project_name}</h2>
          <p className="text-white mt-4 text-lg">{project.description}</p>
          <p className="text-white mt-4 text-lg">{project.location}</p>
          <p className="text-white mt-4 text-lg">{project.title}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectPost;
