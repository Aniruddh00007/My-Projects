import React, { useEffect, useState } from "react";
import { getLatestMetric } from "../Services/api";
import CPUChart from "../CPUChart";
import RAMChart from "../RAMChart";
import { optimizeSystem } from "../Services/api";


const Dashboard = () => {
  const [data, setData] = useState(null);
  const [optimizing, setOptimizing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getLatestMetric();
        setData(res);
      } catch (err) {
        console.error("API Error:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const isHighLoad =
    data?.cpuUsage > 80 || data?.memoryUsage > 80;

  const statusColor = isHighLoad ? "text-red-400" : "text-green-400";
  const borderColor = isHighLoad ? "border-red-500/40" : "border-green-500/30";

 const handleOptimize = async () => {
  try {
    setOptimizing(true);

    const res = await optimizeSystem();

    setData(res); //update UI with new data

    alert(res.suggestion); //  show suggestion from backend

  } catch (err) {
    console.error("Optimize Error:", err);
    alert("Optimization failed");
  } finally {
    setOptimizing(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">

        <div>
          <h1 className="text-3xl font-bold tracking-wide">
            Smart System Optimizer
          </h1>
          <p className="text-gray-400">
            Real-time performance monitoring system
          </p>
        </div>

        <button
          onClick={handleOptimize}
          disabled={optimizing}
          className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 border ${
            optimizing
              ? "bg-gray-700 border-gray-600 cursor-not-allowed"
              : "bg-green-500/20 border-green-500 hover:bg-green-500/40"
          }`}
        >
          {optimizing ? "Optimizing..." : "Optimize System"}
        </button>

      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        {/* CPU */}
        <div className={`p-5 rounded-2xl border ${borderColor} bg-white/5 backdrop-blur-lg hover:scale-105 transition`}>
          <h3 className="text-gray-400">CPU Usage</h3>
          <h2 className={`text-3xl font-bold mt-2 ${statusColor}`}>
            {data ? `${data.cpuUsage.toFixed(2)}%` : "--"}
          </h2>
        </div>

        {/* RAM */}
        <div className={`p-5 rounded-2xl border ${borderColor} bg-white/5 backdrop-blur-lg hover:scale-105 transition`}>
          <h3 className="text-gray-400">Memory Usage</h3>
          <h2 className={`text-3xl font-bold mt-2 ${statusColor}`}>
            {data ? `${data.memoryUsage.toFixed(2)}%` : "--"}
          </h2>
        </div>

        {/* STATUS */}
        <div className={`p-5 rounded-2xl border ${borderColor} bg-white/5 backdrop-blur-lg hover:scale-105 transition`}>
          <h3 className="text-gray-400">System Status</h3>
          <h2 className={`text-2xl font-bold mt-2 ${statusColor}`}>
            {data
              ? isHighLoad
                ? "⚠ High Load"
                : "✅ Normal"
              : "--"}
          </h2>
        </div>

      </div>

      {/* CHART SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-300">
            CPU Performance
          </h2>
          <CPUChart data={data} />
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-300">
            Memory Performance
          </h2>
          <RAMChart data={data} />
        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-6 text-gray-500 text-sm">
        Last Updated:{" "}
        {data ? new Date(data.timestamp).toLocaleString() : "--"}
      </div>

    </div>
  );
};

export default Dashboard;