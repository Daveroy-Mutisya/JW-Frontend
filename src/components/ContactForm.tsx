'use client'

//finished//

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import Image from 'next/image'
import box from "../../public/box.png"
import facebook from "../../public/facebook.png"
import instagram from "../../public/instagram.png"
import gmail from "../../public/gmail.png"
import tel from "../../public/tel.png"
import Link from "next/link";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

interface JW_Backend {
  id: string;
  first_name: string;
  surname: string;
  email: string;
  phone_number: string;
  project_type: string;
  description: string;
}

export function ContactForm() {
  const [contact, setContact] = useState<JW_Backend[]>([]);
  const [formData, setFormData] = useState({
    first_name: "",
    surname: "",
    email: "",
    phone_number: "",
    project_type: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    // Ensure 'id' is one of the keys of 'formData'
    if (id in formData) {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:5000/contacts", formData)
      .then(response => {
        setContact([...contact, response.data]);
        alert("Form submitted successfully!");
      })
      .catch(error => {
        console.error(error);
        alert("Failed to submit the form.");
      });
  };

  const words = `We operate from Golf Course Phase I, Off Mucai Drive, Suite No. 203.
                 The office is dedicated to support the work area, client contact work center and display samples of design concepts, products, and past work that facilitate green works.`;

  return (
    <>
      <div className="relative min-h-screen flex flex-col gap-4 bg-black p-4">
        <div className="w-full grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex items-start justify-center py-8 lg:py-12">
            <div className="w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl space-y-6">
              <div className="flex flex-col gap-2 text-center lg:text-left">
                <p className="leading-7 text-2xl font-abel font-light tracking-wide">
                  REQUEST A QUOTE
                </p>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl lg:text-5xl font-abel font-light tracking-wide">
                  In need of an Interior
                </h2>
              </div>
              <div className="text-center space-y-2">
                <h1 className="text-2xl lg:text-4xl font-abel font-light tracking-wide">Contact Us</h1>
                <p className="text-muted-foreground text-lg lg:text-2xl font-abel font-light tracking-wide">
                  Please fill in the following details
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                {["first_name", "surname", "email", "phone_number", "project_type", "description"].map((field, index) => (
                  <div key={index} className="grid gap-2">
                    <Label htmlFor={field} className="text-lg lg:text-xl capitalize font-abel font-light tracking-wide">
                      {field.replace('_', ' ')}
                    </Label>
                    <Input
                      id={field}
                      type={field === "email" ? "email" : field === "phone_number" ? "tel" : "text"}
                      placeholder={field === "description" ? "Talk to us" : ""}
                      className="text-lg lg:text-xl p-4 h-12 lg:h-14 font-abel font-light tracking-wide"
                      value={formData[field as keyof typeof formData]} // Ensures correct indexing
                      onChange={handleChange}
                      required
                    />
                  </div>
                ))}
                <Button type="submit" className="w-full bg-white text-black hover:text-white font-abel font-light tracking-wide">
                  Submit
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 lg:space-y-12">
            <h3 className="text-2xl lg:text-3xl font-abel font-light tracking-wide underline-offset-auto">
              How to Reach us
            </h3>
            <div className="hidden lg:block lg:py-4 font-abel font-light tracking-wide">
              <TextGenerateEffect duration={2} filter={false} words={words} />
            </div>
            <div>
              <h2 className="scroll-m-20 border-b pb-2 text-2xl lg:text-3xl font-abel font-light tracking-wide tracking-tight">
                Social Spaces
              </h2>
              <ul className="my-6 space-y-4 font-abel font-light tracking-wide">
                {[
                  { src: gmail, text: "Gmail: info@jawabuinteriors.co.ke", alt: "Gmail" },
                  { src: facebook, text: "Facebook: Jawabu Interiors Ltd.", alt: "Facebook", href: "https://www.facebook.com/www.jawabuinteriors.co.ke" },
                  { src: instagram, text: "Instagram: jawabuinteriorsltd", alt: "Instagram", href: "https://www.instagram.com/jawabuinteriorsltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                  { src: tel, text: "Tel: 0114938574, 0791497172", alt: "Telephone" },
                  { src: box, text: "P.O. BOX 100445 - 00101", alt: "P.O. Box" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-lg lg:text-xl font-abel font-light tracking-wide">
                    <Image src={item.src} width={40} height={40} alt={item.alt} className="mr-2" />
                    {item.href ? (
                      <Link href={item.href} className="hover:underline font-abel font-light tracking-wide">
                        {item.text}
                      </Link>
                    ) : (
                      <p>{item.text}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
