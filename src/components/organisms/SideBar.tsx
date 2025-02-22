
"use client";

import { useState } from "react";
import { LayoutDashboard, BarChart3, RefreshCcw, Network, Eye, BookOpen, User, Wallet, LogOut, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import ThemeSwitcher from "../atoms/ThemeSwitcher";
import PaymentStreamIcon from "../atoms/PaymentStreamIcon";
import DistributionIcon from "../atoms/DistributionIcon";

interface MenuItem {
  index: number;
  name: string;
  icon: React.ElementType;
  hasFocus: boolean;
}


const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  
const [menuItems, setMenuItems] = useState<MenuItem[]>([
  { index: 1, name: "Dashboard", icon: LayoutDashboard, hasFocus: true },
  { index: 2, name: "Distribution", icon: DistributionIcon, hasFocus: false},
  { index: 3, name: "Payment Stream", icon: PaymentStreamIcon, hasFocus: false },
  { index: 4, name: "Airdrop", icon: Eye, hasFocus: false },
  { index: 5, name: "Analytics", icon: BookOpen, hasFocus: false},
  { index: 6, name: "History", icon: User, hasFocus: false },
  { index: 7, name: "Help", icon: Wallet, hasFocus: false },
]);



const switchFocus = (index: number) => {
  let newMenuItems = menuItems.map((item) => {
    if (item.index === index) {
      return { ...item, hasFocus: true };
    } else {
      return { ...item, hasFocus: false };
    }
  });
  setMenuItems(newMenuItems);
}

  return (
    <aside
      className={cn(
        "h-screen app-background text-white flex flex-col p-4 transition-all duration-300",
        isOpen ? "w-56" : "w-16"
      )}
    >
      {/* Toggle Button (Mobile & Tablet) */}
      <button
        className="md:hidden text-gray-400 hover:text-white mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Logo */}
      <div className={cn("text-xl font-bold font-itim text-purple mb-6", !isOpen && "hidden md:block")}>
        {isOpen ? "Fundable" : "F"}
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col space-y-2 my-7">
        {menuItems.map(({ index, name, icon: Icon, hasFocus }) => (
          <button
            key={index}
            className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-sm font-inter app-white ${hasFocus ? 'bg-purple-500' : 'bg-white-500'} sidenav_hover transition`}
            onClick={() => switchFocus(index)}
          >
            <Icon className="w-5 h-5" />
            {isOpen && <span>{name}</span>}
          </button>
        ))}
      </nav>

      {/* Logout */}
      <div style={{"border": "solid white 1px"}} className="flex flex-col justify-between align-center">
        <button className="flex items-center space-x-3 px-4 py-2 rounded-lg text-sm text-gray-400 nav_hover transition">
          <LogOut className="w-5 h-5" />
          {isOpen && <span>Logout</span>}
        </button>
        <ThemeSwitcher/>
      </div>
    </aside>
  );
};

export default SideBar;

