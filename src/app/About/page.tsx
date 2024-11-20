
//finished//

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { NavBar } from '@/components/NavBar';
import AboutLandingSection from '@/components/AboutLanding';
import TeamCard from '@/components/TeamCard';



const AboutPage = () => {

  return (
    <>
      <div className="p-4 bg-black sticky top-0 z-50">
        <div>
          <NavBar />
        </div>
      </div>
      <section className='bg-black'>
        <AboutLandingSection />
      </section>
      <section className=' flex flex-col gap-5 items-center bg-black'>
        <TeamCard />
      </section>
    </>
  );
}

export default AboutPage;
