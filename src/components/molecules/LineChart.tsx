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

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

const data = [
  { name: 'Jan', BTC: 2800, ETH: 2750, STRK: 3100 },
  { name: 'Feb', BTC: 3400, ETH: 3200, STRK: 2900 }, // BTC and ETH spike, STRK dips
  { name: 'Mar', BTC: 3100, ETH: 2800, STRK: 3500 }, // BTC and ETH correct, STRK spikes
  { name: 'Apr', BTC: 2700, ETH: 2600, STRK: 3200 }, // Overall market dip
  { name: 'May', BTC: 3800, ETH: 3300, STRK: 2800 }, // BTC leads recovery, STRK lags
  { name: 'Jun', BTC: 3500, ETH: 3900, STRK: 3600 }, // ETH outperforms
  { name: 'Jul', BTC: 4600, ETH: 3600, STRK: 4500 }, // BTC and STRK spike, ETH flat
  { name: 'Aug', BTC: 4200, ETH: 4300, STRK: 3800 }, // Mixed performance
  { name: 'Sep', BTC: 5100, ETH: 4800, STRK: 4200 }, // Strong overall market
  { name: 'Oct', BTC: 4700, ETH: 4500, STRK: 5300 }, // STRK outperforms, others correct
  { name: 'Nov', BTC: 5900, ETH: 5600, STRK: 4900 }, // BTC and ETH recovery
  { name: 'Dec', BTC: 6800, ETH: 6200, STRK: 5900 }, // End-of-year rally
];

// Custom Tooltip
const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-gray-900 p-3 rounded-lg shadow-md border border-gray-700">
        {payload.map((entry: { name: string; value: number; color?: string; stroke?: string }, index: number) => (
          <div key={index} className="flex justify-between items-center mb-1">
            <span className="text-xs" style={{ color: entry.stroke || entry.color }}>
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
    <div className="relative h-96 rounded-2xl p-6 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background smoky shapes */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-purple-700 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-700 opacity-20 blur-3xl" />

      {/* Chart Legends */}
      <div className="absolute top-5 left-20 flex space-x-6 z-10">
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
          <span className="text-xs text-gray-300">STRK</span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-full w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={data}
            margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
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
              <linearGradient id="colorSTRK" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffae00" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#ffae00" stopOpacity={0.4} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="name"
              stroke="#555"
              axisLine={false}
              tickLine={false}
              fontSize={12}
            />
            
            <YAxis 
              domain={[2500, 7000]} 
              stroke="#555"
              axisLine={false}
              tickLine={false}
              fontSize={12}
              tickFormatter={(value) => `${value.toLocaleString()}`}
              width={40}
              ticks={[2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000]}
            />
            
            <Tooltip content={<CustomTooltip />} />

            {[
              { dataKey: "BTC", color: "#ff00c3" },
              { dataKey: "ETH", color: "#00d4ff" },
              { dataKey: "STRK", color: "#ffae00" }
            ].map(({ dataKey, color }) => (
              <Line
                key={dataKey}
                type="basis"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: color }}
                isAnimationActive={true}
                animationDuration={2500}
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CryptoChart;