// src/components/BlogCard.tsx

'use client'

//finished//

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string | null;
  created_at: string;
  author_id: number;
}

const BlogCard = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const router = useRouter();

  useEffect(() => {
    const API = 'http://127.0.0.1:5000';

    fetch(`${API}/blogs`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCardClick = (id: number) => {
    localStorage.setItem('selectedBlogId', id.toString());
    router.push(`/Blog/${id}`);
  };

  return (
    <>
      <div className='items-center justify-center mt-10'>
        <h2 className="scroll-m-20 border-b pb-2 text-7xl font-abel font-light tracking-wide first:mt-0 text-white">Blog Posts</h2>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogs.length === 0 ? (
            <Skeleton className="w-full h-[500px] col-span-1" />
          ) : (
            blogs.map((blog) => (
              <div key={blog.id} className="relative group cursor-pointer" onClick={() => handleCardClick(blog.id)}>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  {blog.image ? (
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={500}
                      height={500}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-700 font-abel font-light tracking-wide">No Image</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-abel font-light tracking-wide">{blog.title}</h3>
                  <p className="text-gray-700 mt-2 font-abel font-light tracking-wide">{blog.content}</p>
                  <p className="text-gray-500 mt-2 text-sm font-abel font-light tracking-wide">{new Date(blog.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default BlogCard;
