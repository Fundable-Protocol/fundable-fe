"use client";

import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  BarChart3,
  Wallet,
  Eye,
  BookOpen,
  UserRound,
  HelpCircle,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SidebarTrigger } from "@/components/ui/sidebar";
import "@fontsource/itim";

export function SideBar() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: BarChart3, label: "Distribution" },
    { icon: Wallet, label: "Payment Stream" },
    { icon: Eye, label: "Airdrop" },
    { icon: BookOpen, label: "Analytics" },
    { icon: UserRound, label: "History" },
    { icon: HelpCircle, label: "Help" },
  ];

  return (
    <>
      <div className="md:hidden flex h-16 items-center">
        <SidebarTrigger className="text-white hover:bg-purple" />
      </div>
      <Sidebar
        className={`dark text-white w-64 h-full fixed left-0 top-0 z-50 flex flex-col justify-between transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <SidebarHeader className="flex items-center justify-between py-6 px-4">
          <div className="flex items-center space-x-2">
            <Image src="/fundable-logo.svg" alt="Logo" width={40} height={40} />
            <span className="text-3xl font-bold text-purple font-[Itim]">
              Fundable
            </span>
          </div>
        </SidebarHeader>

        <SidebarContent className="flex flex-col gap-1 px-4">
          <SidebarGroup>
            {menuItems.map(({ icon: Icon, label }) => (
              <Button
                key={label}
                variant="ghost"
                className={`w-full justify-start px-4 py-3 rounded-md flex items-center gap-3 transition-all ${
                  activeItem === label
                    ? "bg-purple text-white"
                    : "hover:bg-purple"
                }`}
                onClick={() => setActiveItem(label)}
              >
                <div className="relative flex items-center justify-center w-8 h-8">
                  {activeItem === label && (
                    <span className="absolute w-8 h-8 bg-[#151517] rounded-full opacity-100 transition-opacity" />
                  )}
                  <Icon className="w-5 h-5 relative z-10" />
                </div>
                {label}
              </Button>
            ))}
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4 flex flex-col gap-4">
          <Button
            variant="ghost"
            className="w-full justify-start px-4 py-3 hover:bg-purple hover:rounded-md flex items-center gap-3 transition-all"
          >
            <div className="relative flex items-center justify-center w-8 h-8">
              <LogOut className="w-5 h-5 relative z-10" />
            </div>
            Logout
          </Button>

          <div className="flex items-center justify-between p-2 bg-[#1a1a1a] rounded-full w-24">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full hover:bg-purple ${
                !darkMode ? "bg-purple text-white" : "text-gray-400"
              }`}
              onClick={() => setDarkMode(false)}
            >
              <Sun className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full hover:bg-purple ${
                darkMode ? "bg-purple text-white" : "text-gray-400"
              }`}
              onClick={() => setDarkMode(true)}
            >
              <Moon className="w-5 h-5" />
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
