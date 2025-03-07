import Navbar from "@/components/Dashboard/Layouts/Navbar";
import {AppSidebar} from "@/components/Dashboard/Layouts/Sidebar/Sidebar";
import { useThemeStore } from "@/stores/themeStore";
import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";

const DashboardLayout: React.FC = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <SidebarProvider>
      <div className={`flex min-h-[100vh] w-full ${theme}`}>
        <AppSidebar />
        <div className="shrink- w-full relative">
          <Navbar />
          <div className="p-2 py-5 min-[500px]:p-5 lg:p-10 bg-gra">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
