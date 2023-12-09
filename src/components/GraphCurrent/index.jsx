import "./styles.css";

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

export default function BarGraph({ weight, maxWeight }) {
  const data = [
    {
      weight: weight,
    },
  ];
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      minHeight={300}
      minWidth={350}
    >
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 50,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" label={weight} />
        <YAxis
          type="number"
          domain={[0, Math.ceil(maxWeight / 10) * 10 || 10]}
        />
        <ReferenceLine
          y={maxWeight}
          stroke="red"
          label={{ position: "right", value: `${maxWeight}` }}
        />
        <Bar dataKey="weight" fill="maroon" animationEasing="linear" />
      </BarChart>
    </ResponsiveContainer>
  );
}
