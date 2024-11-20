// src/app/Blog/[id]/page.tsx

'use client'

//finished//

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { NavBar } from '@/components/NavBar';

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string | null;
  created_at: string;
  author_id: number;
}

const BlogPost: React.FC = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const id = typeof window !== 'undefined' ? localStorage.getItem('selectedBlogId') : null;

  useEffect(() => {
    if (!id) return; // Ensure id is defined

    const API = 'http://127.0.0.1:5000';

    fetch(`${API}/blogs/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!blog) {
    return <Skeleton className="w-full h-screen" />;
  }

  return (
    <>
      <div className="container mx-auto p-4">
        {blog.image && (
          <div className="w-full h-auto">
            <Image
              src={blog.image}
              alt={blog.title}
              width={1200}
              height={600}
              layout="responsive"
              objectFit="cover"
              priority
            />
          </div>
        )}
        <div className="p-4 w-full">
          <h2 className="scroll-m-20 border-b pb-2 text-6xl font-abel font-light tracking-wide first:mt-0 text-center">{blog.title}</h2>
          <p className="text-white mt-4 text-3xl text-center font-abel font-light tracking-wide">{blog.content}</p>
          <p className="text-white mt-2 text-xl text-center font-abel font-light tracking-wide">
            {new Date(blog.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
