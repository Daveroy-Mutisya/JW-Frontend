'use client'

//finished//

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const LandingSection = () => {
  // List of project images stored in the public/project_pics folder
  const projectImages = [
    '/project_pics/Projectpic1.jpeg',
    '/project_pics/Projectpic2.jpeg',
    '/project_pics/Projectpic3.jpeg',
    '/project_pics/Projectpic4.jpeg',
    '/project_pics/Projectpic5.jpeg',
    '/project_pics/Projectpic6.jpeg',
    '/project_pics/Projectpic7.jpeg',
    '/project_pics/Projectpic9.jpeg',
    '/project_pics/Projectpic10.jpeg',
    '/project_pics/Projectpic11.jpeg',
    '/project_pics/Projectpic12.jpeg',
    '/project_pics/Projectpic13.jpeg',
    '/project_pics/Projectpic14.jpeg',
    '/project_pics/Projectpic15.jpeg',
    '/project_pics/Projectpic16.jpeg',
    '/project_pics/Projectpic17.jpeg',
  ];

  // List of quotes to display
  const staticQuotes = [
    {
      quote: "Elevate your Space with Elegance.",
      author: "Jawabu Interiors Ltd",
      category: "Interior Design",
    },
    {
      quote: "Where style meets comfort.",
      author: "Jawabu Interiors Ltd",
      category: "Interior Design",
    },
    {
      quote: "Your Vision our Enterprise.",
      author: "Jawabu Interiors Ltd",
      category: "Interior Design",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Cycle through images every 10 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    }, 10000);

    return () => clearInterval(imageInterval);
  }, [projectImages.length]);

  // Cycle through quotes every 10 seconds
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % staticQuotes.length);
    }, 10000);

    return () => clearInterval(quoteInterval);
  }, [staticQuotes.length]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Display project images */}
      {projectImages.length > 0 && (
        <Image
          src={projectImages[currentImageIndex]}
          alt={`Project Image ${currentImageIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      )}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-white text-left p-4 hover:text-opacity-100 text-opacity-50 transition duration-300 ease-in-out ">
        <h1 className="scroll-m-20 text-4xl font-abel font-light tracking-wide lg:text-8xl">
          Quote of the hour:
        </h1>
        {/* Display quotes */}
        {staticQuotes.length > 0 && (
          <div>
            <blockquote className="mt-6 border-l-2 pl-6  text-4xl font-abel font-light tracking-wide">
              {staticQuotes[currentQuoteIndex].quote}
            </blockquote>
            <blockquote className="mt-6 border-l-2 pl-6  text-4xl font-abel font-light tracking-wide">
              - {staticQuotes[currentQuoteIndex].author}
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingSection;
