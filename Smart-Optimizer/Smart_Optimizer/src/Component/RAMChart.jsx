import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function RAMChart({ data }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data && data.timestamp) {
      setChartData((prev) => {
        const newData = [
          ...prev,
          {
            time: new Date(data.timestamp).toLocaleTimeString(),
            ram: Number(data.memoryUsage || 0),
          },
        ];

        return newData.slice(-10); // last 10 points
      });
    }
  }, [data]);

  // 👇 empty state fix
  if (chartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-[180px] text-gray-400 text-sm">
        Loading chart...
      </div>
    );
  }

  return (
    <div className="w-full h-[180px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="2 2" opacity={0.2} />

          <XAxis
            dataKey="time"
            tick={{ fontSize: 10 }}
            interval="preserveStartEnd"
          />

          <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="ram"
            stroke="#00aaff"
            strokeWidth={2}
            dot={false} // clean look
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RAMChart;