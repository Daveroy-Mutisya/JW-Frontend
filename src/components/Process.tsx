import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import circle from "../../public/circle.png";
import { Button } from './ui/button';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const ProcessSection = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute inset-0 flex flex-col items-center pt-20 justify-center z-20 text-white text-center p-4 backdrop-filter backdrop-blur-md">
        <h3 className="scroll-m-20 text-4xl font-semibold tracking-tight text-green-600">
          Our Process
        </h3>
        <h2 className="scroll-m-20 border-b pb-2 text-7xl font-semibold tracking-tight first:mt-0">
          See how it works 
        </h2>
        <p className="text-4xl text-muted-foreground">
          Our commitment to quality and services ensure our clients are happy.
        </p>
        <p className="text-4xl text-muted-foreground">
          We're happy to make you feel more comfortable in your home.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-20 text-white text-center">
          <Drawer>
            <DrawerTrigger>
              <Image src={circle} alt="Meet & Agree" width={300} height={300} />
              <h4 className="text-xl font-semibold">Meet & Agree</h4>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Phase 1: Meet & Agree</DrawerTitle>
                <DrawerDescription>
                  In this phase, we meet with you to discuss your needs, preferences, and vision for the project. We agree on the project's scope, timelines, and budget to ensure a clear understanding and mutual expectations.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer>
            <DrawerTrigger>
              <Image src={circle} alt="Idea & Concept" width={300} height={300} />
              <h4 className="text-xl font-semibold">Idea & Concept</h4>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Phase 2: Idea & Concept</DrawerTitle>
                <DrawerDescription>
                  In this phase, we brainstorm and develop creative concepts that align with your vision. Our team of designers will present various ideas and sketches to help you visualize the potential of your space.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer>
            <DrawerTrigger>
              <Image src={circle} alt="Design & Create" width={300} height={300} />
              <h4 className="text-xl font-semibold">Design & Create</h4>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Phase 3: Design & Create</DrawerTitle>
                <DrawerDescription>
                  During the design and create phase, we turn concepts into detailed designs and plans. Our team uses state-of-the-art tools to create 3D models and renderings, giving you a realistic preview of the final result.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer>
            <DrawerTrigger>
              <Image src={circle} alt="Build & Install" width={300} height={300} />
              <h4 className="text-xl font-semibold">Build & Install</h4>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Phase 4: Build & Install</DrawerTitle>
                <DrawerDescription>
                  The build and install phase is where your vision comes to life. Our skilled craftsmen and installation teams work meticulously to ensure every detail is executed to perfection, resulting in a space that exceeds your expectations.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
