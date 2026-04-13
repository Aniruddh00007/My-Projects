import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function RAMChart({ data }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data) {
      setChartData((prev) => [
        ...prev,
        {
          time: new Date(data.timestamp).toLocaleTimeString(),
          ram: data.memoryUsage,
        },
      ].slice(-10)); // keep last 10 points
    }
  }, [data]);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Memory Usage</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="ram"
            stroke="#00aaff"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RAMChart;