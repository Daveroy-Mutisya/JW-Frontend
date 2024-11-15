import React from 'react';
import axios from 'axios';
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
<div className="relative min-h-[100vh] w-full flex flex-col items-center justify-center sm:justify-start my-10 sm:my-20">
  <div className="absolute inset-0 opacity-50"></div>
  <div className="relative flex flex-col items-center justify-center sm:justify-end z-10 text-white text-center p-4 sm:backdrop-filter sm:backdrop-blur-md">
    <h3 className="scroll-m-20  sm:text-5xl font-semibold tracking-tight text-green-600">
      Our Process
    </h3>
    <h2 className="scroll-m-20 border-b pb-2 text-6xl sm:text-6xl font-semibold tracking-tight first:mt-0">
      See how it works
    </h2>
    <p className="text-base sm:text-3xl text-muted-foreground mt-4">
      Our commitment to quality and services ensures our clients are happy.
    </p>
    <p className="text-base sm:text-3xl text-muted-foreground mt-2">
      We're happy to make you feel more comfortable in your home.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-8 sm:pt-12 text-white text-center">
    <Drawer>
            <DrawerTrigger>
            <Image
  src={circle}
  alt="Meet & Agree"
  className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 max-w-full"
/>
              <h4 className="text-lg font-semibold">Meet & Agree</h4>
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
            <Image
  src={circle}
  alt="Meet & Agree"
  className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 max-w-full"
/>
              <h4 className="text-lg font-semibold">Idea & Concept</h4>
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
            <Image
  src={circle}
  alt="Meet & Agree"
  className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 max-w-full"
/>
              <h4 className="text-lg font-semibold">Design & Create</h4>
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
            <Image
  src={circle}
  alt="Meet & Agree"
  className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 max-w-full"
/>
              <h4 className="text-lg font-semibold">Build & Install</h4>
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


