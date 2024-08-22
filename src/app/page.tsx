import { NavBar } from "@/components/NavBar";
import LandingSection from "@/components/Landing";
import Philosophy from "@/components/Philosophy";
import FeaturesSection from "@/components/Features";
import ProcessSection from "@/components/Process";

export default function Home() {
  return (
    <>
      {/* NavBar */}
      <div className="p-4 bg-black sticky top-0 z-50">
        <NavBar />
      </div>
      {/* Home-Page-Section 1 */}
      <section className="relative min-h-screen flex flex-col gap-4 justify-center items-center"> {/* Adjusted section height */}
        <LandingSection />
      </section>
      {/* Home-Page-Section 2 */}
      <section className="relative min-h-screen flex flex-col justify-center items-center"> {/* Adjusted section height */}
        <Philosophy />
      </section>
      {/* Home-Page-Section 3 */}
      <section className="relative min-h-screen flex flex-col justify-center items-center"> {/* Adjusted section height */}
        <FeaturesSection/>
      </section>
      {/* Home-Page-Section 4 */}
      <section className="relative min-h-screen"> {/* Adjusted section height */}
        {/* <ProcessSection /> */}
      </section>
    </>
  );
}
