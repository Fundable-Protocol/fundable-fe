import React from "react";
import { Ellipsis } from "lucide-react";

export const StatCard = ({
  icon,
  title,
  value,
  percentage,
  isPositive,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  percentage: string;
  isPositive: boolean;
}) => {
  return (
    <div className="bg-[#151718] text-white p-[32px] rounded-lg shadow-md flex flex-col justify-between">
      <div className="flex items-center justify-between text-gray-400 text-sm">
        <div className="flex items-center gap-2 text-[#AEB9E1]">
          {icon}
          <span>{title}</span>
        </div>
        <span className="cursor-pointer">
          <Ellipsis />
        </span>
      </div>
      <div className="mt-7 flex gap-3 items-center">
        <h2 className="text-[28px] font-bold">{value}</h2>
        <span
          className={`text-sm px-2 py-[2px] rounded-md ${
            isPositive
              ? "text-[#14CA74] bg-[#05C16833] border border-[#05C16833]"
              : "bg-[#FF5A6533] border border-[#FF5A6533] text-[#FF5A65]"
          }`}
        >
          {percentage} {isPositive ? "↑" : "↓"}
        </span>
      </div>
    </div>
  );
};
