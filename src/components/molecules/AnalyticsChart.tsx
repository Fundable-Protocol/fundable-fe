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
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          stroke="#8C89B480"
          strokeDasharray="5 5"
          vertical={false}
        />
        <XAxis stroke="#8C89B480" dataKey="name" strokeDasharray="5 5" />
        <YAxis stroke="#8C89B480" strokeWidth={0} />

        <Tooltip />
        <Bar
          dataKey="Income"
          fill="#82ca9d"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
          radius={[40, 40, 0, 0]}
          barSize={12}
        />
        <Bar
          dataKey="Outcome"
          fill="#8884d8"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
          radius={[40, 40, 0, 0]}
          barSize={12}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default AnalyticsChart;
