import "./styles.css";
import { useEffect } from "react";

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";

export default function BarGraph({ weight, reference, referenceType }) {
  
  const data = [
    {
      weight: weight,
    },
  ]
  console.log("reference:", reference)
  function giveReference(referenceType) {
    switch (referenceType) {
      case "line":
        return (
          <>
            <ReferenceLine
              y={reference}
              stroke="#ff8500"
              label={{
                position: "right",
                fontFamily: "sans-serif",
                value: `${reference}`,
                fill: "#fb8500",
                fontSize: "1.2em",
              }}
            />
            <YAxis
              type="number"
              domain={[0, Math.ceil(reference / 10) * 10 || 10]}
              tick={{ fill: "#8ecae6", fontFamily: "sans-serif" }}
            />
          </>
        );
      case "area":
        return (
          <>
            <ReferenceArea
              y1={reference.range.minRange}
              y2={reference.range.maxRange}
            />
            ;
            <YAxis
              type="number"
              domain={[0, reference.maxPull]}
              tick={{ fill: "#8ecae6", fontFamily: "sans-serif" }}
            />
          </>
        );
    }
  }

  return (
    <section id="graph">
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
          <CartesianGrid strokeDasharray="3 " />
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

          {giveReference(referenceType)}
          <Bar dataKey="weight" fill="#fb8500" animationEasing="linear" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
