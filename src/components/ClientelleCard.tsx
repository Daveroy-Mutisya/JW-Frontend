import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  { Picture: "/Clientelle_Logos/CITAM.png", name: "CITAM" },
  { Picture: "/Clientelle_Logos/Cooperative Bank .jpeg", name: "Cooperative Bank" },
  { Picture: "/Clientelle_Logos/DNDI.png", name: "DNDi" },
  { Picture: "/Clientelle_Logos/Family Bank.jpg", name: "Family Bank" },
  { Picture: "/Clientelle_Logos/IPOA.jpg", name: "IPOA" },
  { Picture: "/Clientelle_Logos/jubba-airways.jpg", name: "Jubba Airways" },
  { Picture: "/Clientelle_Logos/Kenindia-Assurance-Company-Limited.jpg", name: "Kenindia Assurance" },
  { Picture: "/Clientelle_Logos/Retirement Benefits Authority.png", name: "Retirement Benefits Authority" },
];

export function InfiniteMovingClientelleCards() {
  return (
    <>
    <div className="bg-black">
    <h2 className=" text-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Clientelle We have Worked with :
    </h2>
    </div>
    <div className="h-[40rem] bg-black dark:bg-black flex items-center justify-center">
      <InfiniteMovingCards items={testimonials} direction="right" speed="fast" />
    </div>
    </>
  );
}
