'use client'

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import menuIcon from "../../public/menu.png";
import closeIcon from "../../public/close.png";
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black text-white p-4">
      <div className="flex justify-between items-center">
        {isMobile ? (
          <div onClick={toggleMenu} className="cursor-pointer">
            <Image src={menuOpen ? closeIcon : menuIcon} alt="Menu" width={24} height={24} />
          </div>
        ) : (
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger><Link href="/">Home</Link></NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger><Link href="/Projects">Projects</Link></NavigationMenuTrigger>
              </NavigationMenuItem>
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
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
      {isMobile && menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50">
          <div className="flex justify-end p-4">
            <div onClick={toggleMenu} className="cursor-pointer">
              <Image src={closeIcon} alt="Close Menu" width={24} height={24} />
            </div>
          </div>
          <NavigationMenuList className="flex flex-col space-y-2 p-4 text-white">
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/" onClick={toggleMenu} className="hover:text-green-500">Home</Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/Projects" onClick={toggleMenu} className="hover:text-green-500">Projects</Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/About" legacyBehavior passHref>
                <NavigationMenuLink onClick={toggleMenu} className={cn(navigationMenuTriggerStyle(), "hover:text-green-500")}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/Blog" legacyBehavior passHref>
                <NavigationMenuLink onClick={toggleMenu} className={cn(navigationMenuTriggerStyle(), "hover:text-green-500")}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/Contact" legacyBehavior passHref>
                <NavigationMenuLink onClick={toggleMenu} className={cn(navigationMenuTriggerStyle(), "hover:text-green-500")}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      )}
    </div>
  );
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
  );
});
ListItem.displayName = "ListItem";
