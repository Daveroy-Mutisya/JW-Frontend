"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Projects",
      url: "#",
      icon: Map,
      items: [
        {
          title: "Corporate and Commercial Clients",
          url: "#",
        },
        {
          title: "Hospitality Industry",
          url: "#",
        },
        {
          title: "Banking Industry",
          url: "#",
        },
        {
            title: "Institutions",
            url: "#",
          },
          {
            title: "Residential Works",
            url: "#",
          },
          {
            title: "Landscaping",
            url: "#",
          },
      ],
    },
    {
      title: "Blogs",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Colleagues",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Finance Team",
          url: "#",
        },
        {
          title: "Admin Team",
          url: "#",
        },
        {
          title: "Architect Team",
          url: "#",
        },
        {
          title: "Quantity Surveyor Team",
          url: "#",
        },
        {
            title: "Design Team",
            url: "#",
        },
        {
            title: "Sales & Marketing Team",
            url: "#",
        },
        
      ],
    },
    {
      title: "Contact Form",
      url: "#",
      icon: BookOpen,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Jawabu Interiors </span>
                  <span className="truncate text-xs">Limited</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
