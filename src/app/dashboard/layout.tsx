
import SideBar from "@/components/organisms/SideBar";
import SidebarNav from "@/components/molecules/SidebarNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen min-w-full app-background grid grid-cols-[1fr_5fr]">
      <SideBar />
      <div className="flex flex-col">
        <SidebarNav />
        <div className="flex-1 bg-purple">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

{
  /* <div className="flex flex-1">
  <AdminSidebar />
  <SidebarInset className="flex flex-col w-full">
    <DashboardHeader />
    <div className="flex-1 space-y-4">{children}</div>
    <DashboardFooter />
  </SidebarInset>
</div> */
}