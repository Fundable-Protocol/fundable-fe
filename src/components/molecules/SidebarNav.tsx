"use client";

import { useState, JSX } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Menu, X, Bell } from "lucide-react";

import WalletDisplay from "../atoms/WalletDisplay";

export default function SidebarNav(): JSX.Element {
  // const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="app-background text-white border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Left Side - Logo & Title */}
          <div className="flex items-center space-x-3">
            <span className="hidden md:inline text-md font-semibold font-syne">Dashboard</span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Right Side - Menu (Desktop) */}
          <div  className="hidden md:flex items-center justify-between w-64 space-x-4">
              <div  className="flex items-center justify-center rounded-full h-10 w-10">
                <Bell className="w-7 h-7" />
              </div>
              <WalletDisplay address="0x1234567890abcdef1234567890abcdef123456"/>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu (Visible when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {/* <Button variant="ghost" size="sm" className="w-full flex items-center justify-center space-x-2">
            <User className="w-5 h-5" />
            <span className="text-xs">Oluwa_seyi</span>
          </Button> */}
        </div>
      )}
    </nav>
  );
}