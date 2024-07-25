import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ContactDrawer from "./ContactDrawer"




export function ContactForm() {
  return (
    <>
      <div className="relative h-screen flex flex-col gap-2">
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
          <div className="flex items-start justify-items-start py-12">
            <div className="mx-auto grid w-[700px] gap-6">
              <div className="flex flex-col gap-2">
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl">
                  REQUEST A QUOTE
                </p>
                <h2 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0">
                  In need of Interior
                </h2>
              </div>
              <div className="grid gap-2 text-center">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-balance text-muted-foreground text-2xl">
                  Please fill in the following details
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name" className="text-xl">First Name</Label>
                  <Input
                    id="first-name"
                    type="text"
                    placeholder="John"
                    className="text-xl p-4 h-14"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="surname" className="text-xl">Surname</Label>
                  <Input
                    id="surname"
                    type="text"
                    placeholder="Doe"
                    className="text-xl p-4 h-14"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-xl">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    className="text-xl p-4 h-14"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone-number" className="text-xl">Phone Number</Label>
                  <Input
                    id="phone-number"
                    type="tel"
                    placeholder="123-456-7890"
                    className="text-xl p-4 h-14"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="project-type" className="text-xl">Project Type</Label>
                  <Input
                    id="project-type"
                    type="text"
                    placeholder="Residential"
                    className="text-xl p-4 h-14"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description" className="text-xl">Description</Label>
                  <Input
                    id="description"
                    type="text"
                    placeholder="Talk to us"
                    className="text-xl p-6 h-20"
                    required
                  />
                </div>
                <Button type="submit" className="w-full p-6">
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden bg-muted lg:block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d498.59791510564395!2d36.8007299!3d-1.3050902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f108da9076ce7%3A0x5566082a4039f0a8!2sKanjaro%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1720774761497!5m2!1sen!2ske"
              width="1145"
              height="1050"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2">
        <ContactDrawer />
      </div>
    </>
  )
}
