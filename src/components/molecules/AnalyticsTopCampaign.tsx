import Image from "next/image";
import React from "react";

function AnalyticsTopCampaign({
  campaigns,
}: {
  campaigns: {
    name: string;
    date: string;
    amount: number;
    status: string;
    image: string;
  }[];
}) {
  return (
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
        {campaigns.map((campaign) => (
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
  );
}

export default AnalyticsTopCampaign;
