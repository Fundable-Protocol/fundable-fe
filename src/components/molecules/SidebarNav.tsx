import { Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SidebarNav = async () => {
  return (
    <header className="w-[83vw] h-16 bg-black text-white flex items-center justify-between px-4 md:px-6 shadow-md z-50">
      <div className="h-full flex items-center gap-4">
        <h1 className="text-3xl md:text-3xl font-bold font-syne">Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4 md:space-x-6">
        <Button
          variant="ghost"
          className="relative p-2 bg-[#1a1a1a] rounded-full hover:bg-[#2a2a2a] transition-colors duration-200"
        >
          <Bell className="text-white w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>

        <Button className="bg-gradient-to-r from-[#6a00f4] to-[#b400ff] px-4 py-2 rounded-md text-white flex items-center gap-2">
          <Image
            src="/path-to-wallet-icon.png"
            alt="Wallet Icon"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span>0x097ad...0fdb7</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};

export default SidebarNav;
