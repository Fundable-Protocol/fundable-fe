"use client";
import AnalyticsCard from "@/components/molecules/AnalyticsCard";
import AnalyticsChart from "@/components/molecules/AnalyticsChart";
import AnalyticsTopCampaign from "@/components/molecules/AnalyticsTopCampaign";

const analyticsData = {
  totalFundsRaised: "$632,000",
  fundsRaisedChange: "+1.29",
  activeCampaigns: 5,
  activeCampaignsChange: "-1.29",
  totalDonations: "$632,000",
  totalDonationsChange: "-1.29",
  campaigns: [
    {
      name: "Buildl REWARD",
      date: "Sun, 20 Apr 2020",
      amount: 80.09,
      status: "Ended",
      image: "/images/buidlReward.png",
    },
    {
      name: "V2Earn Airdrop",
      date: "Sat, 20 Apr 2020",
      amount: 7.03,
      status: "Ended",
      image: "/images/v2earn.png",
    },
    {
      name: "Plant4All Airdrop",
      date: "Sat, 20 Apr 2020",
      amount: 7.03,
      status: "Ongoing",
      image: "/images/v2earn.png",
    },
  ],
};

const AnalyticsComponent = () => {
  const data = [
    {
      name: "Jan",
      Outcome: 25000,
      Income: 30000,
      amt: 55000,
    },
    {
      name: "Feb",
      Outcome: 35000,
      Income: 25000,
      amt: 60000,
    },
    {
      name: "Mar",
      Outcome: 15000,
      Income: 20000,
      amt: 35000,
    },
    {
      name: "Apr",
      Outcome: 30000,
      Income: 25000,
      amt: 55000,
    },
    {
      name: "May",
      Outcome: 20000,
      Income: 35000,
      amt: 55000,
    },
    {
      name: "Jun",
      Outcome: 15000,
      Income: 20000,
      amt: 35000,
    },
    {
      name: "Jul",
      Outcome: 46456.9,
      Income: 35000,
      amt: 81456.9,
    },
    {
      name: "Aug",
      Outcome: 20000,
      Income: 25000,
      amt: 45000,
    },
  ];

  return (
    <div
      className="-ml-5 w-[99.5%] mt-8 md:ml-4 bg-gray-50 dark:bg-[#151718] 
         md:w-[96.5%] p-3 sm:p-6 rounded-xl"
      lang="en"
    >
      {/* Stats Cards */}
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-6 overflow-x-auto">
        <AnalyticsCard
          aria={`Total Funds Raised: 
            $${analyticsData.totalFundsRaised}, 
            ${analyticsData.fundsRaisedChange}% change
          `}
          total={analyticsData.totalFundsRaised}
          change={analyticsData.fundsRaisedChange}
          increament={false}
          title={"Total Funds Raised"}
        />
        <AnalyticsCard
          aria={`Active Campaigns: ${analyticsData.activeCampaigns}, ${analyticsData.activeCampaignsChange}% change`}
          total={analyticsData.activeCampaigns}
          change={analyticsData.activeCampaignsChange}
          increament={true}
          title={"Active Campaigns"}
        />
        <AnalyticsCard
          aria={`Total Donations: $${analyticsData.totalDonations}, ${analyticsData.totalDonationsChange}% change`}
          total={analyticsData.totalDonations}
          change={analyticsData.totalDonationsChange}
          increament={true}
          title={"Total Donations"}
        />
      </div>

      <section
        className="bg-gray-100 dark:bg-[#262627] p-6 rounded-2xl mb-6"
        role="region"
        aria-label="Top Performing Campaigns"
      >
        <h3 className="text-xl font-semibold mb-4">Top-Performing Campaigns</h3>
        <AnalyticsTopCampaign campaigns={analyticsData.campaigns} />
      </section>

      {/* Analytics Chart */}
      <section
        className="bg-gray-100 dark:bg-[#262627] p-6 rounded-2xl"
        role="region"
        aria-label="Analytics Chart"
      >
        <div className="flex justify-between mb-4">
          <h3 className="text-xl font-semibold mb-4">Analytics</h3>
          <div className="flex lg:space-x-16">
            <span className="mr-2 text-[#64CFF6] font-semibold text-lg">
              ●{" "}
              <span className="text-gray-600 dark:text-white lg:ml-4">
                Income
              </span>
            </span>
            <span className="text-[#6359E9] font-semibold text-lg">
              ●{" "}
              <span className="text-gray-600 dark:text-white lg:ml-4">
                Outcome
              </span>
            </span>
          </div>
          <div />
        </div>
        <div
        <div className="sr-only">
          <h4>Monthly Income and Outcome Data</h4>
          <p>January: Income $30,000, Outcome $25,000</p>
          <p>February: Income $25,000, Outcome $35,000</p>
          {/* Continue for all months */}
        </div>
        <div
          className="w-full overflow-x-auto h-[180px] md:h-[400px] shrink-0 lg:!w-[95%] mt-20"
          aria-hidden="true"
        >
          <AnalyticsChart data={data} />
        </div>
      </section>
    </div>
  );
};

export default AnalyticsComponent;
