import React from 'react'
import { NavBar } from '@/components/NavBar';
import ProjectCard from '@/components/ProjectCard';

const ProjectsPage = () => {
  return (
    <>
    <div className="sticky top-0 z-50 flex justify-between items-center p-4 b-g bg-black ">
        <div className="flex items-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Jawabu
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-4 text-green-500">
            Interiors
          </h1>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-4 text-white-500">
            Ltd
          </h1>
        </div>
        <div>
          <NavBar />
        </div>
      </div>
      <section className="flex flex-col gap-2 items-center">
       <ProjectCard />
       </section>
    </>
  )
}

export default ProjectsPage;
