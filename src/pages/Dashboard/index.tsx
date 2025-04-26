import { ChartSection } from "@/components/organisms/ChartSection";
import { FeaturesSection } from "@/components/organisms/FeaturesSection";
import { MetricsSection } from "@/components/organisms/MetricsSection";


const DashboardComponent = () => {
  return (
    <div className="p-6 lg:px-14 lg:py-8 space-y-10 font-urbanist">
      <MetricsSection />
      <FeaturesSection />
      <ChartSection />
    </div>
)};

export default DashboardComponent;
