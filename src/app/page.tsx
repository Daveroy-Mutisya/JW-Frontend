// src/app/page.tsx
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <h1 className="text-4xl font-greatvibes text-white-600">Jawabu</h1> <h1 className="text-4xl font-greatvibes text-green-600">Interiors </h1>
        </div>
        <div>
          <NavBar />
        </div>
      </div>
      <main className="h-screen flex flex-col gap-2 justify-center items-center">
        <div>
          <Button>Click Me</Button>
        </div>
      </main>
    </>
  );
}
