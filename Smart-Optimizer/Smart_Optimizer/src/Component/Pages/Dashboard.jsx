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

  const isHighLoad = data?.cpuUsage > 80 || data?.memoryUsage > 80;

  const statusGlow = isHighLoad
    ? "shadow-red-500/20 border-red-500/30"
    : "shadow-green-500/20 border-green-500/20";

  const statusText = isHighLoad ? "⚠ High Load" : "✅ Normal";

  const handleOptimize = async () => {
    try {
      setOptimizing(true);
      const res = await optimizeSystem();
      setData(res);
      alert(res.suggestion);
    } catch (err) {
      console.error("Optimize Error:", err);
      alert("Optimization failed");
    } finally {
      setOptimizing(false);
    }
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#050505] via-[#0b0f19] to-[#050505] p-6">

      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">

        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Smart System Optimizer
          </h1>
          <p className="text-gray-400 mt-1">
            Real-time performance monitoring dashboard
          </p>
        </div>

        <button
          onClick={handleOptimize}
          disabled={optimizing}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border backdrop-blur-xl ${
            optimizing
              ? "bg-gray-700 border-gray-600 cursor-not-allowed"
              : "bg-green-500/10 border-green-500/30 hover:bg-green-500/20 hover:scale-105"
          }`}
        >
          {optimizing ? "Optimizing System..." : "⚡ Optimize System"}
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        {/* CPU */}
        <div className={`p-6 rounded-2xl bg-white/5 backdrop-blur-xl border ${statusGlow} hover:scale-[1.03] transition`}>
          <p className="text-gray-400">CPU Usage</p>
          <h2 className="text-4xl font-bold mt-2 text-white">
            {data ? `${data.cpuUsage.toFixed(2)}%` : "--"}
          </h2>
        </div>

        {/* RAM */}
        <div className={`p-6 rounded-2xl bg-white/5 backdrop-blur-xl border ${statusGlow} hover:scale-[1.03] transition`}>
          <p className="text-gray-400">Memory Usage</p>
          <h2 className="text-4xl font-bold mt-2 text-white">
            {data ? `${data.memoryUsage.toFixed(2)}%` : "--"}
          </h2>
        </div>

        {/* STATUS */}
        <div className={`p-6 rounded-2xl bg-white/5 backdrop-blur-xl border ${statusGlow} hover:scale-[1.03] transition`}>
          <p className="text-gray-400">System Status</p>
          <h2 className="text-2xl font-bold mt-3">
            {data ? statusText : "--"}
          </h2>
        </div>

      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
          <h2 className="text-lg font-semibold mb-4 text-gray-300">
            CPU Performance
          </h2>
          <CPUChart data={data} />
        </div>

        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
          <h2 className="text-lg font-semibold mb-4 text-gray-300">
            Memory Performance
          </h2>
          <RAMChart data={data} />
        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        Last Updated: {data ? new Date(data.timestamp).toLocaleString() : "--"}
      </div>

    </div>
  );
};

export default Dashboard; 