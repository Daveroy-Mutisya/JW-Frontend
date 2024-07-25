// src/app/Project/[id]/page.tsx

'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { NavBar } from '@/components/NavBar';

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

const ProjectPost: React.FC = () => {
  const [project, setProject] = useState<Project | null>(null);
  const id = typeof window !== 'undefined' ? localStorage.getItem('selectedProjectId') : null;

  useEffect(() => {
    if (!id) return; // Ensure id is defined

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

  if (!project) {
    return <Skeleton className="w-full h-screen" />;
  }

  return (
    <>
      <div className="container mx-auto p-4">
        {project.image && (
          <div className="w-full h-auto">
            <Image
              src={project.image}
              alt={project.project_name}
              width={1200}
              height={600}
              layout="responsive"
              objectFit="cover"
              priority
            />
          </div>
        )}
        <div className="p-4 w-full">
          <h2 className="text-4xl font-semibold text-white  text-center">{project.project_name}</h2>
          <p className="text-white  mt-4 text-lg">{project.description}</p>
          <p className="text-white  mt-2 text-sm">
            {new Date(project.date).toLocaleDateString()}
          </p>
          <p className="text-white mt-4 text-lg">{project.location}</p>
          <p className="text-white  mt-4 text-lg">{project.title}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectPost;
