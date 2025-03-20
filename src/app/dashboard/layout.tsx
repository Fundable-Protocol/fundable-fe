import { SideBar } from "@/components/organisms/SideBar";
import SidebarNav from "@/components/molecules/SidebarNav";
import { SidebarProvider } from "@/components/ui/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen min-w-full app-background grid grid-cols-[1fr_5fr]">
      <SidebarProvider>
        <SideBar />
        <div className="flex flex-col">
          <SidebarNav />
          <div className="flex-1">{children}</div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
