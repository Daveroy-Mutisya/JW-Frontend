
//finished//

import React from 'react'
import { NavBar } from '@/components/NavBar';
import ProjectCard from '@/components/ProjectCard';

const ProjectsPage = () => {
  return (
    <>
    <div className="p-4 bg-black sticky top-0 z-50">
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
