'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

interface JW_Backend {
  id: number;
  project_name: string;
  after_image: string;
}

const ProjectCard = () => {
  const [projects, setProjects] = useState<JW_Backend[]>([]);
  const router = useRouter();

  useEffect(() => {
    const API = 'https://jawabu-interiors-backend.onrender.com';

    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API}/projects`);
        setProjects(response.data);
      } catch (err) {
        console.error('Error fetching projects from backend:', err);
      }
    };

    fetchProjects();
  }, []);

  const handleCardClick = (id: number) => {
    localStorage.setItem('selectedProjectId', id.toString());
    router.push(`/Projects/${id}`);
  };

  return (
    <>
      <div className='items-center justify-center'>
        <h2 className="scroll-m-20 border-b pb-2 text-7xl font-abel font-light tracking-wide first:mt-0 text-white">
          Project Gallery
        </h2>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.length === 0 ? (
            Array(4).fill(null).map((_, index) => (
              <Skeleton key={index} className="w-full h-[500px] col-span-1" />
            ))
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="relative w-full h-[500px] group overflow-hidden rounded-md cursor-pointer font-abel font-light tracking-wide"
                onClick={() => handleCardClick(project.id)}
              >
                {project.after_image ? (
  <Image
    src={`https://jawabu-interiors-backend.onrender.com/${project.after_image}`}
    alt={`After - ${project.project_name}`}
    layout="fill"
    objectFit="cover"
    className="transition-transform duration-300 transform group-hover:scale-105"
  />
) : (
  <Skeleton className="w-full h-full" />
)}

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-lg font-abel font-light tracking-wide">
                    {project.project_name}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
