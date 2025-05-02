import { SideBar } from "@/components/organisms/SideBar";
import SidebarNav from "@/components/molecules/SidebarNav";
import { SidebarProvider } from "@/components/ui/sidebar";
// import { Syne } from "next/font/google";
import { Slide, ToastContainer } from 'react-toastify';
// const syne = Syne({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
//   variable: "--font-syne",
// });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen h-full min-w-full back-bg grid grid-cols-[1fr_5fr]">
      <SidebarProvider>
        <SideBar />
        <div className="flex flex-col">
          <SidebarNav />
          <div className="flex-1">{children}</div>
        </div>
      </SidebarProvider>
      <ToastContainer theme="dark" hideProgressBar transition={Slide} />
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
