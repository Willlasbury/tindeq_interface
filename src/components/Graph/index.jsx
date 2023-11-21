import "./styles.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Graph({ data }) {
  const adjustTime = (data) => {
    return data.map(
      (point) =>
        (point.created_at = new Date(point.created_at).toLocaleDateString())
    );
  };

  adjustTime(data);

  return (
    <LineChart
      width={500}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="created_at" />
      <YAxis dataKey="weight" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="weight" stroke="red" />
    </LineChart>
  );
}
