"use client";

import { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Wallet,
  Eye,
  BookOpenText,
  UserRound,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import GraphIcon from "../atoms/GraphIcon";
import BooleanIcon from "../atoms/PaymmentStreamIcon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SidebarTrigger } from "@/components/ui/sidebar";
import "@fontsource/itim";
import { useDisconnect } from "@starknet-react/core";
import { usePathname, useRouter } from "next/navigation";
import walletStore, { disconnectWallet } from "@/store/wallet";
import { toast } from "react-toastify";
import { themeStore } from "@/store/theme";
import { useTheme } from "next-themes";
// import { useEntity } from "simpler-state";

export function SideBar() {
  // const { theme } = themeStore.use();
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    // Update next‑themes
    setTheme(newTheme)
    // Update our simpler‑state store (automatically persisted to localStorage)
    themeStore.set({ theme: newTheme })
  }
  const darkMode = theme === "dark";
  const [isOpen] = useState(false);

  const route = useRouter()
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("");
  const { disconnect, isSuccess } = useDisconnect()
  const { isConnected } = walletStore.use()
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", route: "/dashboard" },
    { icon: GraphIcon, label: "Distribution", route: "/distribute" },
    { icon: BooleanIcon, label: "Payment Stream", route: "/payment-stream" },
    { icon: Eye, label: "Airdrop", route: "/airdrop" },
    { icon: BookOpenText, label: "Analytics", route: "/analytics" },
    { icon: UserRound, label: "History", route: "/history" },
    { icon: Wallet, label: "Help", route: "/help" },
  ];


  const handledisConnect = async () => {
    try {
      if (isConnected) {
        disconnect()

      } else {
        console.error("No wallet is connected");
        toast.warning("No wallet is connected. Please make sure you have a connected wallet.");
      }
    } catch (error) {
      console.error("Wallet Disonnection Failed:", error);
      toast.error("Failed to disconnect wallet. Try again.");
    }
  };


  useEffect(() => {
    if (isSuccess) {
      route.push("/")
      disconnectWallet()
    }
  }, [isSuccess, route])
  useEffect(() => {
    const sortedMenuItems = [...menuItems].sort((a, b) => b.route.length - a.route.length);
    const current = sortedMenuItems.find((item) => pathname?.startsWith(item.route));
    if (current) {
      setActiveItem(current.label);
    }
  }, [pathname]);
  return (
    <>
      <div className="md:hidden flex h-16 items-center">
        <SidebarTrigger className=" text-black dark:text-white hover:dark:bg-purple" />
      </div>
      <Sidebar

        className={` text-black dark:text-white w-64 h-full fixed left-0 top-0 z-50 flex flex-col justify-between transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
      >
        <SidebarHeader className="flex items-center justify-between py-6 px-4 bg-slate-100 dark:bg-sidebar ">
          <div className="flex items-center space-x-2">
            <Image src="/fundable-logo.svg" alt="Logo" width={40} height={40} />
            <span className="text-3xl font-bold text-purple font-[Itim]">
              Fundable
            </span>
          </div>
        </SidebarHeader>

        <SidebarContent className="flex flex-col gap-1 px-4 bg-slate-100 dark:bg-sidebar">
          <SidebarGroup>
            {menuItems.map(({ icon: Icon, label, route: routePath }) => (
              <Button

                key={label}
                variant="ghost"
                className={`w-full justify-start px-4 py-3 rounded-md flex items-center gap-3 transition-all ${activeItem === label
                  ? "bg-purple text-black dark:text-white"
                  : "hover:bg-purple hover:text-white "
                  }`}
                onClick={() => {
                  route.push(routePath);
                }}
              >
                <div className="relative flex items-center justify-center w-8 h-8">
                  {activeItem === label && (
                    <span className="absolute w-8 h-8 bg-gray-100 dark:bg-[#151517]  rounded-full opacity-100 transition-opacity" />
                  )}
                  <Icon className="w-5 h-5 relative z-10   " />
                </div>
                {label}
              </Button>
            ))}
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4 flex flex-col gap-4 bg-slate-100 dark:bg-sidebar">
          <Button
            onClick={handledisConnect}
            variant="ghost"
            className="w-full justify-start px-4 py-3 hover:bg-purple hover:rounded-md flex items-center gap-3 transition-all"
          >
            <div className="relative flex items-center justify-center w-8 h-8">
              <LogOut className="w-5 h-5 relative z-10" />
            </div>
            Logout
          </Button>

          <div className="flex items-center justify-between p-2 bg-white dark:bg-[#1a1a1a] shadow-md shadow-gray-300 dark:shadow-none rounded-full w-24">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full hover:bg-purple ${!darkMode ? "bg-purple text-white" : "text-gray-400"}`}
              onClick={toggleTheme}
            >
              <Sun className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full hover:bg-purple ${darkMode ? "bg-purple text-white" : "text-gray-400"}`}
              onClick={toggleTheme}
            >
              <Moon className="w-5 h-5" />
            </Button>

          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
