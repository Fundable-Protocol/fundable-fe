'use client';

import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', BTC: 2200, ETH: 1800, STMX: 1600 },
  { name: 'Feb', BTC: 2600, ETH: 2100, STMX: 1900 },
  { name: 'Mar', BTC: 2900, ETH: 2500, STMX: 2200 },
  { name: 'Apr', BTC: 3400, ETH: 2900, STMX: 2600 },
  { name: 'May', BTC: 4000, ETH: 3300, STMX: 3000 },
  { name: 'Jun', BTC: 4800, ETH: 4100, STMX: 3700 },
  { name: 'Jul', BTC: 5200, ETH: 4600, STMX: 4200 },
  { name: 'Aug', BTC: 5800, ETH: 5000, STMX: 4600 },
  { name: 'Sep', BTC: 6100, ETH: 5500, STMX: 5100 },
  { name: 'Oct', BTC: 6800, ETH: 5900, STMX: 5600 },
  { name: 'Nov', BTC: 7300, ETH: 6600, STMX: 6100 },
  { name: 'Dec', BTC: 7700, ETH: 7000, STMX: 6700 },
];

// Custom Tooltip
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-[#1e1e2f] p-3 rounded-lg shadow-md border border-[#333]">
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex justify-between items-center mb-1">
            <span className="text-xs" style={{ color: entry.color }}>
              {entry.name}
            </span>
            <span className="text-xs text-white ml-2">${entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const CryptoChart = () => {
  return (
    <div className="relative h-[400px] rounded-2xl p-6 overflow-hidden bg-gradient-to-b from-[#090909] via-[#0d0d0d] to-[#050505]">
      {/* Background smoky shapes */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-purple-700 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-700 opacity-20 blur-3xl" />

      {/* Chart Legends */}
      <div className="absolute top-5 left-1 flex space-x-6 z-10">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
          <span className="text-xs text-gray-300">BTC</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          <span className="text-xs text-gray-300">ETH</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <span className="text-xs text-gray-300">STMX</span>
        </div>
      </div>

      {/* Manual Y-axis labels */}
      <div className="absolute left-4 top-10 flex flex-col justify-between h-[320px] text-[10px] text-gray-500">
        <span>7,000</span>
        <span>6,000</span>
        <span>5,000</span>
        <span>4,000</span>
        <span>3,000</span>
      </div>

      {/* Chart */}
      <div className="ml-16 h-full pr-8">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={data}
            margin={{ top: 50, right: 30, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorBTC" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ff00c3" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#ff00c3" stopOpacity={0.4} />
              </linearGradient>
              <linearGradient id="colorETH" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00d4ff" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#00d4ff" stopOpacity={0.4} />
              </linearGradient>
              <linearGradient id="colorSTMX" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffae00" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#ffae00" stopOpacity={0.4} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="name"
              stroke="#555"
              axisLine={false}
              tickLine={false}
              fontSize={10}
            />
            <YAxis hide domain={[1000, 8000]} />
            <Tooltip content={<CustomTooltip />} />

            <Line
              type="basis"
              dataKey="BTC"
              stroke="url(#colorBTC)"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
              className="drop-shadow-[0_0_6px_#ff00c3]"
              isAnimationActive={true}
              animationDuration={2500}
            />
            <Line
              type="basis"
              dataKey="ETH"
              stroke="url(#colorETH)"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
              className="drop-shadow-[0_0_6px_#00d4ff]"
              isAnimationActive={true}
              animationDuration={2500}
            />
            <Line
              type="basis"
              dataKey="STMX"
              stroke="url(#colorSTMX)"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
              className="drop-shadow-[0_0_6px_#ffae00]"
              isAnimationActive={true}
              animationDuration={2500}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CryptoChart;
