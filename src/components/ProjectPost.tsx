'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { NavBar } from '@/components/NavBar';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

interface Project {
  id: number;
  title: string;
  project_name: string;
  image?: string;
  before_image: string;
  after_image: string;
  description: string;
  location: string;
  date: string;
  user_id: number;
}

const ProjectPost: React.FC = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

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
        console.log("Fetched Project Data:", data);
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project data:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Skeleton className="w-full h-screen" />;
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <h3 className="text-xl font-abel font-light tracking-wide mb-2">Before:</h3>
            {project?.before_image && (
              <div className="relative w-full h-[700px]">
                <Image
                  src={`https://jawabu-interiors-backend.onrender.com/${project.before_image}`}
                  alt="Before Interior Design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            )}
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <h3 className="text-xl font-abel font-light tracking-wide mb-2">After:</h3>
            {project?.after_image && (
              <div className="relative w-full h-[700px]">
                <Image
                  src={`https://jawabu-interiors-backend.onrender.com/${project.after_image}`}
                  alt="After Interior Design"
                  fill
                  className="object-cover"
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
