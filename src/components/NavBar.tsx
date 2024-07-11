import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import logo2 from "../../public/logo2.png";


import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// const projects: { title: string; href: string; description: string }[] = [
//   {
//     title: "Corporate and Commercial Clients",
//     href: "/projects/corporate",
//     description:
//       "Offering tailored solutions to meet the unique needs of corporate and commercial clients.",
//   },
//   {
//     title: "Hospitality Industry",
//     href: "/projects/hospitality",
//     description:
//       "Creating inviting and functional spaces for the hospitality industry.",
//   },
//   {
//     title: "Banking Industry",
//     href: "/projects/banking",
//     description:
//       "Designing secure and professional environments for the banking sector.",
//   },
//   {
//     title: "Institutions",
//     href: "/projects/institutions",
//     description: "Transforming institutional spaces with innovative designs.",
//   },
//   {
//     title: "Residential Works",
//     href: "/projects/residential",
//     description:
//       "Crafting personalized and comfortable residential spaces.",
//   },
//   {
//     title: "Landscaping",
//     href: "/projects/landscaping",
//     description:
//       "Enhancing outdoor areas with beautiful and sustainable landscaping.",
//   },
// ]

export function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger><a href="/">Home</a></NavigationMenuTrigger>
          {/* <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      <Image src={logo2} alt="Logo" width={50} height={50} />
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Jawabu Interiors is a Limited Company founded by Yvonne Mutisya as the Executive Director and supported by intellected and effective colleagues 
                      to deliver innovative, creative, and eco-friendly concepts that reflect the culture and traditions of the region.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/philosophy" title="Philosophy">
                Our design philosophy emphasizes sustainability, functionality, and cultural sensitivity, ensuring each project is both unique and meaningful.
              </ListItem>
              <ListItem href="/discover" title="Discover">
                Explore our wide range of services and past projects to see how we can transform your spaces into extraordinary environments.
              </ListItem>
              <ListItem href="/process" title="Process">
                Our process involves close collaboration with clients from concept to completion, ensuring every detail aligns with your vision.
              </ListItem>
            </ul>
          </NavigationMenuContent> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger><a href="/Projects">Projects</a></NavigationMenuTrigger>
          {/* <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {projects.map((project) => (
                <ListItem
                  key={project.title}
                  title={project.title}
                  href={project.href}
                >
                  {project.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent> */}
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href="/services" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Link href="/About" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/Blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/Contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Login
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
