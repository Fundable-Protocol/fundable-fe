"use client";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
  Scale,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const analyticsData = {
  totalFundsRaised: "632.000",
  fundsRaisedChange: "+1.29",
  activeCampaigns: 5,
  activeCampaignsChange: "-1.29",
  totalDonations: "632.000",
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

const DashboardComponent = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Income",
        data: [25000, 35000, 15000, 30000, 20000, 15000, 46456.9, 20000],
        backgroundColor: "#64CFF6",
        borderColor: "#64CFF6",
        borderWidth: 1,
        borderRadius: 40,
        categoryPercentage: 0.5,
        maxBarThickness: 12,
      },
      {
        label: "Outcome",
        data: [30000, 25000, 20000, 25000, 35000, 20000, 35000, 25000],
        backgroundColor: "#6359E9",
        borderColor: "#6359E9",
        borderWidth: 1,
        borderRadius: 40,
        categoryPercentage: 0.5,
        maxBarThickness: 12,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
        labels: {
          color: "#D1D5DB",
          font: { size: 14 },
        },
      },
      tooltip: {
        backgroundColor: "#6B7280",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        callbacks: {
          label: (context: TooltipItem<"bar">) => {
            const value = context.raw as number;
            return `${context.dataset.label}: $${value.toLocaleString()}`;
          },
        },
      },
      title: {
        display: false,
        text: "Analytics",
        color: "#FFFFFF",
        font: { size: 18, weight: "bold" as const },
      },
    },
    scales: {
      x: {
        ticks: { color: "#8C89B4" },
        grid: { display: false },
      },
      y: {
        beginAtZero: false,
        min: 10000,
        max: 50000,
        ticks: {
          color: "#8C89B4",
          stepSize: 10000,
          callback: function (this: Scale, value: string | number) {
            return `${Number(value) / 1000}K`;
          },
        },
        grid: { color: "#8C89B480" },
      },
    },
  };

  return (
    <div
      className="-ml-5 w-[99.5%] mt-8 md:ml-4 bg-gray-50 dark:bg-[#151718] min-h-screen md:w-[96.5%] p-3 sm:p-6 rounded-xl"
      lang="en"
    >
      {/* Stats Cards */}
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-6 overflow-x-auto">
        <article
          className="bg-gray-100 dark:bg-[#262627] w-full md:shrink-0 md:w-[306.59px] h-[120.34px] flex items-center gap-5 p-6 rounded-[19px]"
          role="region"
          aria-label={`Total Funds Raised: $${analyticsData.totalFundsRaised}, ${analyticsData.fundsRaisedChange}% change`}
        >
          <div className="items-center justify-center rounded-lg shrink-0 bg-[#64CFF6] h-[42.98px] w-[42.98px] flex">
            <ArrowDownLeft aria-hidden="true" />
          </div>
          <div className="w-full gap-1">
            <h3 className="text-base font-normal text-[#8C89B4]">
              Total Funds Raised
            </h3>
            <div className="flex items-center gap-1 justify-between">
              <p className="text-2xl font-extrabold">
                ${analyticsData.totalFundsRaised}
              </p>
              <div className="flex items-center justify-center bg-[#02b15a]/15 w-[60.17px] h-[22px] rounded-lg">
                <p className="text-green-500 text-xs">
                  {analyticsData.fundsRaisedChange}%
                </p>
              </div>
            </div>
          </div>
        </article>
        <article
          className="bg-gray-100 dark:bg-[#262627] w-full md:shrink-0 md:w-[306.59px] h-[120.34px] flex items-center gap-5 p-6 rounded-[19px]"
          role="region"
          aria-label={`Total Funds Raised: $${analyticsData.totalFundsRaised}, ${analyticsData.fundsRaisedChange}% change`}
        >
          <div className="items-center justify-center rounded-lg shrink-0 bg-[#6359E9] h-[42.98px] w-[42.98px] flex">
            <ArrowUpRight aria-hidden="true" />
          </div>
          <div className="w-full gap-1">
            <h3 className="text-base font-normal text-[#8C89B4]">
              Total Funds Raised
            </h3>
            <div className="flex items-center gap-1 justify-between">
              <p className="text-2xl font-extrabold">
                ${analyticsData.totalFundsRaised}
              </p>
              <div className="flex items-center justify-center bg-[#EB001B26]/15 w-[60.17px] h-[22px] rounded-lg">
                <p className="text-red-500 text-xs">
                  {analyticsData.fundsRaisedChange}%
                </p>
              </div>
            </div>
          </div>
        </article>
        <article
          className="bg-gray-100 dark:bg-[#262627] w-full md:shrink-0 md:w-[306.59px] h-[120.34px] flex items-center gap-5 p-6 rounded-[19px]"
          role="region"
          aria-label={`Total Funds Raised: $${analyticsData.totalDonations}, ${analyticsData.totalDonationsChange}% change`}
        >
          <div className="items-center justify-center rounded-lg shrink-0 bg-[#6359E9] h-[42.98px] w-[42.98px] flex">
            <ArrowUpRight aria-hidden="true" />
          </div>
          <div className="w-full gap-1">
            <h3 className="text-base font-normal text-[#8C89B4]">
              Total Donations
            </h3>
            <div className="flex items-center gap-1 justify-between">
              <p className="text-2xl font-extrabold">
                ${analyticsData.totalDonations}
              </p>
              <div className="flex items-center justify-center bg-[#EB001B26]/15 w-[60.17px] h-[22px] rounded-lg">
                <p className="text-red-500 text-xs">
                  {analyticsData.totalDonationsChange}%
                </p>
              </div>
            </div>
          </div>
        </article>
        {/* Repeat for other cards with unique aria-labels */}
      </div>

      {/* Top Performing Campaigns Table */}
      <section
        className="bg-gray-100 dark:bg-[#262627] p-6 rounded-2xl mb-6"
        role="region"
        aria-label="Top Performing Campaigns"
      >
        <h3 className="text-xl font-semibold mb-4">Top-Performing Campaigns</h3>
        <table className="w-full text-left">
          <caption className="sr-only">Top Performing Campaigns Data</caption>
          <thead>
            <tr className="text-[#AEABD8]">
              <th style={{ fontWeight: 400, fontSize: "13.6px" }} scope="col">
                Name
              </th>
              <th style={{ fontWeight: 400, fontSize: "13.6px" }} scope="col">
                Date
              </th>
              <th style={{ fontWeight: 400, fontSize: "13.6px" }} scope="col">
                Amount
              </th>
              <th style={{ fontWeight: 400, fontSize: "13.6px" }} scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {analyticsData.campaigns.map((campaign) => (
              <tr
                key={campaign.name}
                className="text-xs"
                id={`campaign-${campaign.name}`}
              >
                <td
                  className="flex items-center py-3 gap-2 text-sm"
                  data-label="Name"
                >
                  <Image
                    src={campaign.image}
                    alt={`Logo for ${campaign.name} campaign`}
                    width={35.6}
                    height={35.6}
                    className="object-contain h-[25px] w-[25px] md:h-[35.6px] md:w-[35.6px] rounded-full"
                  />
                  {campaign.name}
                </td>
                <td data-label="Date">{campaign.date}</td>
                <td data-label="Amount">${campaign.amount}</td>
                <td data-label="Status">
                  <div
                    className={`${
                      campaign.status === "Ongoing"
                        ? "bg-[#B1830226]/20"
                        : "bg-[#02B15A26]/20"
                    } h-5 w-[66px] flex items-center justify-center rounded-lg`}
                    aria-label={`Campaign status: ${campaign.status}`}
                  >
                    <span
                      className={`${
                        campaign.status === "Ongoing"
                          ? "text-[#B16002]"
                          : "text-green-400"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Analytics Chart */}
      <section
        className="bg-gray-100 dark:bg-[#262627] p-6 rounded-2xl"
        role="region"
        aria-label="Analytics Chart"
      >
        <h3 className="text-xl font-semibold mb-4">Analytics</h3>
        <table className="sr-only" id="chart-data">
          <caption>Income and Outcome by Month</caption>
          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">Income</th>
              <th scope="col">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {data.labels.map((month, index) => (
              <tr key={month}>
                <td>{month}</td>
                <td>${data.datasets[0].data[index]}</td>
                <td>${data.datasets[1].data[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mb-4">
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
        </div>
        <div
          className="w-full overflow-x-auto h-[180px] md:!h-auto shrink-0 lg:!w-[95%] mt-20"
          aria-hidden="true"
        >
          <Bar data={data} options={options} />
        </div>
      </section>
    </div>
  );
};

export default DashboardComponent;
