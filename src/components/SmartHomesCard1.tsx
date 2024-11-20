"use client";

//finished//

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { NavBar } from "@/components/NavBar";

const ACCESS_KEY = "nUXJ7zUiXb2Y6s0ar-9Db6buSzzOA3wTIw-ay2XOJz4";

const SmartHomesSection1 = () => {
  const [images, setImages] = useState({
    smartHome: "",
    smartOffice: "",
    smartHotel: "",
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responses = await Promise.all([
          fetch(`https://api.unsplash.com/photos/random?query=smart-home&client_id=${ACCESS_KEY}`),
          fetch(`https://api.unsplash.com/photos/random?query=smart-office&client_id=${ACCESS_KEY}`),
          fetch(`https://api.unsplash.com/photos/random?query=smart-hotel&client_id=${ACCESS_KEY}`),
        ]);

        const [homeData, officeData, hotelData] = await Promise.all(responses.map((res) => res.json()));

        setImages({
          smartHome: homeData.urls.small,
          smartOffice: officeData.urls.small,
          smartHotel: hotelData.urls.small,
        });
      } catch (error) {
        console.error("Error fetching images from Unsplash:", error);
      }
    };

    fetchImages();
  }, []);

  const cards = [
    {
      title: "SMART HOME SOLUTION",
      words: `Improve your smart life experience, provide complete home automation systems including:
              lighting control, home security and alarm, environment and curtain control, home appliances control, etc.`,
      image: images.smartHome,
    },
    {
      title: "SMART OFFICE SOLUTION",
      words: `Smart lighting and energy management system especially for joint office, small and medium enterprises. 
              Support remote monitoring and control, improve the efficiency and save 40% energy cost.`,
      image: images.smartOffice,
    },
    {
      title: "SMART HOTEL SOLUTION",
      words: `High-end and efficient automation system for hotels. Convenient and secure access control, 
              smart lighting, sun-shading and appliances control systems. Provide a smart and comfortable hotel experience.`,
      image: images.smartHotel,
    },
  ];

  return (
    <>
      <div className="w-full h-full bg-black sticky top-0 z-50">
        <NavBar />
      </div>
      <div className="bg-black text-white font-abel font-light tracking-wide grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-start">
            {card.image ? (
              <Image
                src={card.image}
                alt={`${card.title} Picture`}
                width={300} // Adjust width if needed
                height={400} // Enforce a consistent image height
                className="object-cover mb-7 h-96 w-full" // Ensure uniform height
              />
            ) : (
              <div className="h-96 w-full bg-gray-700 mb-4" /> // Placeholder while loading
            )}
            <h2 className="text-lime-500 text-3xl font-abel font-light tracking-wide mb-2">
              {card.title}
            </h2>
            <div>
              <TextGenerateEffect className="font-abel font-light tracking-wide" words={card.words} duration={2} filter={false} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SmartHomesSection1;
