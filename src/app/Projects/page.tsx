import React from 'react'
import { NavBar } from '@/components/NavBar';
import ProjectCard from '@/components/ProjectCard';

const ProjectsPage = () => {
  return (
    <>
    <div className="p-4 b-g bg-black ">
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
