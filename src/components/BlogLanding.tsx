'use client'

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import axios from "axios";
import { Skeleton } from '@/components/ui/skeleton';

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string | null;
  created_at: string;
  author_id: number;
}

const BlogLandingSection = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

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

  useEffect(() => {
    if (blogs.length > 0) {
      const interval = setInterval(() => {
        setCurrentBlogIndex((prevIndex) => (prevIndex + 1) % blogs.length);
      }, 10000); // Change blog every 10 seconds
      return () => clearInterval(interval);
    }
  }, [blogs]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {blogs.length > 0 && (
        <Image
          src={blogs[currentBlogIndex].image || "/default-image.jpg"}
          alt={blogs[currentBlogIndex].title}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      )}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-white text-left p-4 hover:text-opacity-100 text-opacity-50 transition duration-300 ease-in-out ">
        <h1 className="scroll-m-20 text-4xl font-abel font-light tracking-wide lg:text-8xl">
          Recent BlogPosts:
        </h1>
        {blogs.length > 0 ? (
          <div>
            <h2 className="mt-6 text-4xl font-abel font-light tracking-wide">{blogs[currentBlogIndex].title}</h2>
            <p className="mt-6 text-xl font-abel font-light tracking-wide">{new Date(blogs[currentBlogIndex].created_at).toLocaleDateString()}</p>
          </div>
        ) : (
          <Skeleton className="w-full h-[500px] col-span-1" />
        )}
      </div>
    </div>
  );
};

export default BlogLandingSection;
