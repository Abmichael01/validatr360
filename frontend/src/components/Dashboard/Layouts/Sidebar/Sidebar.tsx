import * as React from "react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Settings2,
  Users,
  BadgeCheck,
  Filter,
  ChartArea,
} from "lucide-react";

import { NavMain } from "@/components/Dashboard/Layouts/Sidebar/Main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Forms",
      url: "#",
      icon: Filter,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/forms",
        },
        {
          title: "All Forms",
          url: "/forms/list",
        },
        {
          title: "Active Forms",
          url: "#",
        },
        {
          title: "Completed Forms",
          url: "#",
        },
        {
          title: "InActive Forms",
          url: "#",
        },
      ],
    },
    {
      title: "Leads",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Hot Leads",
          url: "#",
        },
        {
          title: "Warm Leads",
          url: "#",
        },
        {
          title: "Cold Leads",
          url: "#",
        },
        {
          title: "Lead Followups",
          url: "#",
        },
      ],
    },

    {
      title: "Reports & Analytics",
      url: "#",
      icon: ChartArea,
      items: [
        {
          title: "Campaign Performance",
          url: "#",
        },
        {
          title: "Lead Conversion Rate",
          url: "#",
        },
        {
          title: "Completed Funnels",
          url: "#",
        },
        {
          title: "Access Control",
          url: "#",
        },
      ],
    },

    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
                <BadgeCheck className="size-4" />
              </div>
              <span className="font-bold text-lg">Validatr360</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
