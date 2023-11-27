import "./styles.css";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ReferenceLine } from "recharts";

export default function BarGraph({ weight, maxWeight }) {
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
      <YAxis type="number" domain={[0,(Math.ceil((maxWeight)/10)*10)||10]}/>
      <ReferenceLine y={maxWeight} stroke="red"/>
      <Bar
        dataKey="weight"
        fill="maroon"
      />
    </BarChart>
  );
}
