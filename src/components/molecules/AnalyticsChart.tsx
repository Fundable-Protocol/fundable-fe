import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AnalyticsChart({
  data = [],
}: {
  data: {
    name: string;
    Outcome: number;
    Income: number;
    amt: number;
  }[];
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        aria-label="Monthly income and outcome bar chart"
      >
        <CartesianGrid
          stroke="#8C89B480"
          strokeDasharray="5 5"
          vertical={false}
        />
        <XAxis stroke="#8C89B480" dataKey="name" strokeDasharray="5 5" />
        <YAxis stroke="#8C89B480" strokeWidth={0} />

        <Tooltip
          contentStyle={{
            backgroundColor: "#6359E9",
            border: "none",
          }}
          itemStyle={{
            color: "#fff",
          }}
          labelStyle={{
            display: "none",
          }}
        />
        <Bar
          dataKey="Income"
          fill="#64CFF6"
          activeBar={<Rectangle fill="#64CFF6" stroke="blue" />}
          radius={[40, 40, 0, 0]}
          barSize={12}
        />
        <Bar
          dataKey="Outcome"
          fill="#6359E9"
          activeBar={<Rectangle fill="#6359E9" stroke="purple" />}
          radius={[40, 40, 0, 0]}
          barSize={12}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default AnalyticsChart;
