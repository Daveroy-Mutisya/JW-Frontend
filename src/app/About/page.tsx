import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { NavBar } from '@/components/NavBar';
import AboutLandingSection from '@/components/AboutLanding';
import TeamCard from '@/components/TeamCard';



const AboutPage = () => {

  return (
    <>
      <div className="sticky top-0 z-50 flex justify-between  p-4 bg-black">
        <div className="flex justify-start">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Jawabu
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-4 text-green-500">
            Interiors
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-4 text-white-500">
            Ltd
          </h1>
        </div>
        <div>
          <NavBar />
        </div>
      </div>
      <section>
        <AboutLandingSection />
      </section>
      <section className='relative h-screen flex flex-col gap-5 items-center'>
        <TeamCard />
      </section>
    </>
  );
}

export default AboutPage;
