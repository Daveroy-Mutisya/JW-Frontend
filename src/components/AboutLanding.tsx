
//finished//

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const AboutLandingSection = () => {
  return (
    <>
      <div className="relative min-h-screen w-full bg-black text-white p-4 flex flex-col items-center justify-center">
        <div className="text-left text-opacity-50 transition duration-300 ease-in-out">
          <h2 className="scroll-m-20 border-b pb-2 text-5xl sm:text-7xl md:text-9xl font-abel font-light tracking-wide first:mt-0">
            About Us
          </h2>
          <div className="flex flex-col md:flex-row my-5 mx-5 md:mx-20">
            <div className="flex flex-col md:w-1/2 pr-0 md:pr-10">
              <h4 className="scroll-m-20 text-2xl sm:text-4xl md:text-6xl font-abel font-light tracking-wide text-left text-lime-500">
                Welcome to Jawabu Interiors:
              </h4>
              <p className="leading-7 mt-6 text-base sm:text-lg md:text-2xl hover:text-lime-500 font-abel font-light tracking-wide">
                Jawabu Interiors is a sole proprietorship owned and operated by Yvonne Mutisya as the sole Director; supported by Architects, 
                Quantity Surveyors, a Project Manager, Finance Manager, Business Development Manager, an Office Administrator, Lead Technician, Site Managers, Fleet Manager and an Accountant. 
                This team has been brought on board to supplement the director’s duties and propagate the achievement of the stipulated goals of the company.
              </p>
              <p className="leading-7 mt-6 text-base sm:text-lg md:text-2xl hover:text-lime-500 font-abel font-light tracking-wide">
                We anticipate hiring more staff in future to keep up with the competitive edge of the market to realize future expansion across the border.
                We offer comprehensive Interior Design Services for Commercial and Corporate Premises and Residential houses in Kenya and even beyond.
                We also provide access to products to complement the design consulting services including furniture, both new and antique, decorator fabric, and home and office accessories.
                Our products and services are tailored to seamlessly meet our target market desires and which is affordable in a way that is unique from concept to implementation.
              </p>
              <p className="leading-7 mt-6 text-base sm:text-lg md:text-2xl hover:text-lime-500 font-abel font-light tracking-wide">
                We also provide access to products to complement the design consulting services including furniture, both new and antique, decorator fabric, and home and office accessories.
                Our products and services are tailored to seamlessly meet our target market desires and which is affordable in a way that is unique from concept to implementation.
              </p>
            </div>
            <div className="flex flex-col md:w-1/2 mt-10 md:mt-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <p className="leading-7 mt-6 text-base sm:text-lg md:text-2xl text-lime-500 font-abel font-light tracking-wide">Vision</p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-7 mt-6 text-base sm:text-lg md:text-2xl font-abel font-light tracking-wide">
                      Our Vision is to be the leading trend in Interior Design, Project and Construction Management and Landscaping Management; while maintaining the maximum standards of environmental ethics in East and Central Africa.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <p className="leading-7 mt-6 text-base sm:text-lg md:text-2xl text-lime-500 font-abel font-light tracking-wide">Mission</p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-7 mt-6 text-base sm:text-lg md:text-2xl font-abel font-light tracking-wide">
                      Our Mission is to be consistent with innovative and creative concepts that reflect the culture and traditions of the Country and also of East and Central Africa, which are ecofriendly.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <p className="leading-7 mt-6 text-base sm:text-lg md:text-2xl text-lime-500 font-abel font-light tracking-wide">Core Values</p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-7 mt-6 text-base sm:text-lg md:text-2xl font-abel font-light tracking-wide">
                      Our Core Values are Customer Focus, Quality Work and Effective Client’s Satisfaction.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutLandingSection;