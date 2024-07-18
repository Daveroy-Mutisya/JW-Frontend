// src/app/Blog/[id]/page.tsx

'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
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

interface BlogPostProps {
  id: string | string[] | undefined;
}

const BlogPost: React.FC<BlogPostProps> = ({ id }) => {
  const [blog, setBlog] = useState<Blog | null>(null);

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
      <div className="sticky top-0 z-50 flex justify-between items-center p-4 bg-black">
        <div className="flex items-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Jawabu
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-4 text-green-500">
            Interiors
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-4 text-white">
            Ltd
          </h1>
        </div>
        <div>
          <NavBar />
        </div>
      </div>
      <div className="relative h-screen">
        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        )}
        <div className="absolute bottom-0 bg-black bg-opacity-50 p-4 w-full">
          <h2 className="text-4xl font-semibold text-white">{blog.title}</h2>
          <p className="text-gray-200 mt-4">{blog.content}</p>
          <p className="text-gray-400 mt-2 text-sm">
            {new Date(blog.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
