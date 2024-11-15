import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import ProjectCarousel2 from './ProjectCarousel2';
import ProjectCarousel3 from './ProjectCarousel3';
import ProjectCarousel4 from './ProjectCarousel4';

const Philosophy = () => {
  return (
    <div className="p-4"> {/* Adjusted padding */}
      <div className="mt-2 mb-4"> {/* Adjusted margins */}
        <h3 className="text-3xl font-semibold tracking-tight text-green-600 text-center"> {/* Reduced font size */}
          Our Philosophy
        </h3>
        <h2 className="border-b pb-2 text-7xl font-semibold tracking-tight text-center leading-snug"> {/* Adjusted font size and line height */}
          It's not about ideas. It's about making ideas happen
        </h2>
        <p className="text-3xl text-muted-foreground text-center mt-2 leading-relaxed"> {/* Reduced font size and increased line height */}
          Our commitment to quality and services ensures our clients are happy. We're happy to make you feel comfortable in your own home.
        </p>
      </div>
      <div className="flex flex-wrap justify-center w-full my-6"> {/* Adjusted bottom margin */}
        <div className="flex flex-col items-center mx-2 my-2 w-full sm:w-auto"> {/* Adjusted margins */}
          <ProjectCarousel />
        </div>
        <div className="flex flex-col items-center mx-2 my-2 w-full sm:w-auto"> {/* Adjusted margins */}
          <ProjectCarousel2 />
        </div>
        <div className="flex flex-col items-center mx-2 my-2 w-full sm:w-auto"> {/* Adjusted margins */}
          <ProjectCarousel3 />
        </div>
        <div className="flex flex-col items-center mx-2 my-2 w-full sm:w-auto"> {/* Adjusted margins */}
          <ProjectCarousel4 />
        </div>
      </div>
    </div>
  );
}

export default Philosophy;
