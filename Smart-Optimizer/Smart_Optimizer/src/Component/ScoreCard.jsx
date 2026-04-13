import React from "react";

function ScoreCard({ data }) {
  if (!data) {
    return (
      <div className="bg-gray-900 p-5 rounded-2xl text-white">
        Loading score...
      </div>
    );
  }

  // Simple performance score logic (basic version as per your PRS)
  const cpu = data.cpuUsage;
  const ram = data.memoryUsage;

  const score = Math.max(
    0,
    Math.round(100 - (cpu * 0.6 + ram * 0.4))
  );

  const getStatus = () => {
    if (score >= 75) return { text: "Excellent", color: "text-green-400" };
    if (score >= 50) return { text: "Good", color: "text-yellow-400" };
    return { text: "Poor", color: "text-red-400" };
  };

  const status = getStatus();

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 text-white">

      <h3 className="text-gray-400 mb-2">Performance Score</h3>

      <div className="flex items-end gap-3">
        <h1 className="text-4xl font-bold">{score}</h1>
        <span className={`text-lg font-semibold ${status.color}`}>
          {status.text}
        </span>
      </div>

      <div className="mt-4 text-sm text-gray-400">
        CPU: {cpu.toFixed(2)}% | RAM: {ram.toFixed(2)}%
      </div>

    </div>
  );
}

export default ScoreCard;