import { DistributionForm } from "@/components/organisms/DashboardForm";

const DistributeComponent = () => {

  return (
    <div className="flex min-h-screen bg-[#121212] text-white">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-4 overflow-auto text-white">
          <DistributionForm />
        </main>
      </div>
    </div>
  );
};

export default DistributeComponent
