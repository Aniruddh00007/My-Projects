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

function CPUChart({ data }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data) {
      setChartData((prev) => [
        ...prev,
        {
          time: new Date(data.timestamp).toLocaleTimeString(),
          cpu: data.cpuUsage,
        },
      ].slice(-10)); // last 10 points only
    }
  }, [data]);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>CPU Usage</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="cpu"
            stroke="#00ff99"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CPUChart;