import React from 'react'
import { NavBar } from '@/components/NavBar'
import BlogPost from '@/components/BlogPost'

const BlogPage = () => {
  return (
    <>
    <div className="p-4 bg-black">
        <div>
          <NavBar />
        </div>
      </div>
      <section>
        <BlogPost />
      </section>
    </>
  )
}

export default BlogPage
