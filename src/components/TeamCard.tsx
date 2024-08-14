'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Skeleton } from '@/components/ui/skeleton';

const ACCESS_KEY = 'nUXJ7zUiXb2Y6s0ar-9Db6buSzzOA3wTIw-ay2XOJz4';

interface UnsplashImage {
  id: string;
  urls: {
    full: string;
  };
  alt_description: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  image: string;
  department: string;
  status: string;
  bio: string;
  super_user: boolean;
  created_at: string;
}

const TeamCard = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=people&orientation=landscape&client_id=${ACCESS_KEY}`
        );
        setImages(response.data.results);
      } catch (error) {
        console.error('Error fetching images from Unsplash', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const API = 'http://127.0.0.1:5000';

    fetch(`${API}/users`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className='items-center justify-center mt-10'>
        <h2 className="scroll-m-20 border-b pb-2 text-7xl font-semibold tracking-tight first:mt-0 text-white">Team Members</h2>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {users.length === 0 ? (
            <Skeleton className="w-full h-[500px] col-span-1" />
          ) : (
            users.map((user, index) => (
              <div key={user.id} className="relative w-full h-[500px] group overflow-hidden rounded-md">
                {images[index] ? (
                  <Image
                    src={images[index].urls.full}
                    alt={images[index].alt_description || 'User Image'}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 transform group-hover:scale-105"
                  />
                ) : (
                  <Skeleton className="w-full h-full" />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{user.name}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default TeamCard;