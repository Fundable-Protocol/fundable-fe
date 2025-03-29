"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", BTC: 2500, ETH: 3000, STRK: 2000 },
  { name: "Feb", BTC: 3500, ETH: 4000, STRK: 3000 },
  { name: "Mar", BTC: 2500, ETH: 3000, STRK: 4000 },
  { name: "Apr", BTC: 5500, ETH: 6000, STRK: 5000 },
  { name: "May", BTC: 3500, ETH: 2000, STRK: 1000 },
];

export const Chart = () => {
  return (
    <div className="w-full">
      <div className="border border-[#1E212F] bg-[#14161F66] backdrop-blur-md text-white p-6 rounded-lg shadow-lg flex flex-col justify-between relative mb-10 w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8256FF66] to-transparent rounded-lg pointer-events-none opacity-25"></div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="BTC"
              stroke="#E930FF"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="ETH" stroke="#3EB7E5" />
            <Line type="monotone" dataKey="STRK" stroke="#23DBBD" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
