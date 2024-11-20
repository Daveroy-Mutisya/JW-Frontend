
//finished//

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
    <section className="relative min-h-screen flex flex-col justify-center items-center">
      <LandingSection />
    </section>
    {/* Home-Page-Section 2 */}
    <section className="relative min-h-screen flex flex-col justify-center items-center">
      <Philosophy />
    </section>
    {/* Home-Page-Section 3 */}
    <section className="relative min-h-screen flex flex-col justify-center items-center mb-0 sm:mb-4">
      <FeaturesSection />
    </section>
    {/* Home-Page-Section 4 */}
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-0 pb-0 sm:pt-0 sm:py-20 ">
      <ProcessSection />
    </section>
  </>
  );
}
