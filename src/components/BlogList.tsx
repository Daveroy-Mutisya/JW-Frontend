'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Skeleton } from '@/components/ui/skeleton';

const ACCESS_KEY = 'nUXJ7zUiXb2Y6s0ar-9Db6buSzzOA3wTIw-ay2XOJz4';

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

  return (
    <>
      <div className='items-center justify-center mt-10'>
        <h2 className="scroll-m-20 border-b pb-2 text-7xl font-semibold tracking-tight first:mt-0 text-white">Blog Posts</h2>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogs.length === 0 ? (
            <Skeleton className="w-full h-[500px] col-span-1" />
          ) : (
            blogs.map((blog) => (
              <div key={blog.id} className="relative group">
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
                      <span className="text-gray-700">No Image</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <p className="text-gray-700 mt-2">{blog.content}</p>
                  <p className="text-gray-500 mt-2 text-sm">{new Date(blog.created_at).toLocaleDateString()}</p>
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
