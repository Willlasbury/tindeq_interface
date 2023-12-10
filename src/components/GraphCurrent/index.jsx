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
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          orientation="top"
          dataKey="name"
          label={{
            value: `${weight}`,
            fill: "#fb8500",
            fontFamily: "sans-serif",
            fontSize: "1.5em",
          }}
        />
        <YAxis
          type="number"
          domain={[0, Math.ceil(maxWeight / 10) * 10 || 10]}
          tick={{ fill: "#8ecae6", fontFamily: "sans-serif", }}
        />
        <ReferenceLine
          y={maxWeight}
          stroke="#ff8500"
          label={{
            position: "right",
            fontFamily: "sans-serif",
            value: `${maxWeight}`,
            fill: "#fb8500",
            fontSize: "1.2em",
          }}
        />
        <Bar dataKey="weight" fill="#fb8500" animationEasing="linear" />
      </BarChart>
    </ResponsiveContainer>
  );
}
