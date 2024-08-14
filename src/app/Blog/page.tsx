import React from 'react'
import { NavBar } from '@/components/NavBar';
import BlogLandingSection from '@/components/BlogLanding';
import BlogCard from '@/components/BlogCard';

const BlogPage = () => {
  return (
    <>
    <div className="p-4 b-g bg-black ">
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
