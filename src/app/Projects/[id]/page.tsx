import React from 'react'
import { NavBar } from '@/components/NavBar'
import ProjectPost from '@/components/ProjectPost'


const ProjectsPostPage = () => {
  return (
    <>
    <div className=" p-4 bg-black">
        <div>
          <NavBar />
        </div>
      </div>
      <section>
        < ProjectPost />
      </section>
    </>
  )
}

export default ProjectsPostPage
