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
              <h4 className="text-lg font-semibold">Inception</h4>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Phase 1: Inception</DrawerTitle>
                <DrawerDescription>
                We begin by collaborating closely with stakeholders to define clear goals, understand project aspirations, and establish a shared vision. 
                This stage sets the foundation for creativity and innovation to flourish.
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
              <h4 className="text-lg font-semibold">Feasibility</h4>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Phase 2: Feasibility</DrawerTitle>
                <DrawerDescription>
                In this phase, we conduct comprehensive analyses to assess project viability, ensuring practicality, 
                sustainability, and alignment with objectives before moving forward.
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
              <h4 className="text-lg font-semibold">Outline Proposals</h4>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Phase 3: Design & Create</DrawerTitle>
                <DrawerDescription>
                Here, we transform ideas into reality by blending innovation and functionality, crafting tailored 
                solutions that meet the unique needs of each project.
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
              <h4 className="text-lg font-semibold">Scheme Design</h4>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Phase 4: Scheme Design</DrawerTitle>
                <DrawerDescription>
                We develop comprehensive layouts and strategic concepts, focusing on the big picture while 
                considering technical and aesthetic aspects.
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
              <h4 className="text-lg font-semibold">Detail Design</h4>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Phase 5: Detail Design</DrawerTitle>
                <DrawerDescription>
                This phase involves refining every element of the design with precision, ensuring that all aspects 
                are cohesive and ready for execution.
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
              <h4 className="text-lg font-semibold">Production Information</h4>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Phase 6: Production Information</DrawerTitle>
                <DrawerDescription>
                We consolidate all technical drawings, specifications, and instructions, providing a clear and 
                accurate blueprint for the construction phase.
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
              <h4 className="text-lg font-semibold">Bill of Quantities</h4>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Phase 7: Bill of Quantities</DrawerTitle>
                <DrawerDescription>
                A detailed breakdown of materials, labor, and costs is prepared, ensuring transparency and 
                accuracy for budget planning and procurement.
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
              <h4 className="text-lg font-semibold">Tender Action </h4>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Phase 8: Tender Action </DrawerTitle>
                <DrawerDescription>
                We facilitate a competitive and transparent tendering process to select the most capable partners 
                and contractors for project execution.
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
              <h4 className="text-lg font-semibold">Project Planning  </h4>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Phase 9: Project Planning  </DrawerTitle>
                <DrawerDescription>
                Strategic timelines and operational plans are established to ensure seamless coordination and 
                efficient resource management throughout the project.
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
              <h4 className="text-lg font-semibold">Operation on Site  </h4>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Phase 10: Operation on Site  </DrawerTitle>
                <DrawerDescription>
                In this phase, our team oversees construction and implementation, ensuring that the design vision
                is executed with precision and excellence.
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
              <h4 className="text-lg font-semibold">Completion  </h4>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Phase 11: Completion  </DrawerTitle>
                <DrawerDescription>
                The project concludes with the delivery of a polished, fully functional, and high-quality result that 
                meets and exceeds client expectations.
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


