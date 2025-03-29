import { Eye, User, SquarePlus } from "lucide-react";
import { StatCard } from "./statcard";
import FeatureCard from "./feature-card";
import { Chart } from "./chart";

const DashboardComponent = () => {
  return (
    <div className="dashboard-bg mt-5 space-y-5">
      <div className="p-0 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          icon={<Eye />}
          title="Total Amount Sent"
          value="50.8K"
          percentage="28.4%"
          isPositive={true}
        />
        <StatCard
          icon={<User />}
          title="Txn Number"
          value="23.6K"
          percentage="12.6%"
          isPositive={false}
        />
        <StatCard
          icon={<SquarePlus />}
          title="Address Funded"
          value="756"
          percentage="3.1%"
          isPositive={true}
        />
      </div>

      <div className="p-0 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <FeatureCard
          title="Airdrops"
          description="Effortlessly distribute funds to recipients, with complete transparency, robust security, and real-time tracking."
          actionText="Create Campaign"
          imgSrc="/imgs/drops-box-gray-1.svg"
        />
        <FeatureCard
          title="Payment Stream"
          description="Streamline your payment workflows with automated solutions for recurring payments, salaries, subscriptions, and more."
          actionText="Create Stream"
          imgSrc="/imgs/stream.svg"
        />
        <FeatureCard
          title="Distribution"
          description="Recognize past achievements to motivate contributors while amplifying small efforts and ensuring inclusivity."
          actionText="Create Distribution"
          imgSrc="/imgs/drops-box-gray-1.svg"
        />
      </div>
      <div className="p-0 md:p-6">
        <Chart />
      </div>
    </div>
  );
};

export default DashboardComponent;
