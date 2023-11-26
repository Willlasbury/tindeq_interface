import "./styles.css";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

export default function BarGraph({ weight }) {
  const data = [
    {
      weight: weight,
    }
  ];
  return (
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
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis type="number" domain={[0,100]}/>
      <Bar
        dataKey="weight"
        fill="maroon"
      />
    </BarChart>
  );
}
