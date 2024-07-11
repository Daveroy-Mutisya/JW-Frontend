import { NavBar } from "@/components/NavBar";
import FeaturesSection from "@/components/Features";
import ProcessSection from "@/components/Process";
import LandingSection from "@/components/Landing";
import Philosophy from "@/components/Philosophy";


export default function Home() {
  return (
    <>
    {/* NavBar */}
      <div className="sticky top-0 z-50 flex justify-between items-center p-4 b-g bg-black ">
        <div className="flex items-center">
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
      {/* Home-Page-Section 1 */}
      <section className="relative h-screen flex flex-col gap-2 justify-center items-center">
        < LandingSection />
      </section>
      {/* Home-Page-Section 2 */}
      <section className="relative h-screen flex flex-col justify-center items-center">
        < Philosophy />
      </section>
      {/* Home-Page-Section 3 */}
      <section className="relative h-screen flex flex-col justify-center items-center">
        <FeaturesSection/>
      </section>
      {/* Home-Page-Section 4 */}
      <section className="relative h-screen ">
        <ProcessSection />
      </section>
    </>
  );
}
