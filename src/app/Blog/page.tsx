import React from 'react'
import { NavBar } from '@/components/NavBar';
import BlogLandingSection from '@/components/BlogLanding';
import BlogCard from '@/components/BlogCard';

const BlogPage = () => {
  return (
    <>
    <div className="p-4 bg-black sticky top-0 z-50 ">
        <div>
          <NavBar />
        </div>
      </div>
      <section>
          <BlogLandingSection/>
        </section>
        <section>
          < BlogCard />
        </section>
    </>
  )
}

export default BlogPage;
