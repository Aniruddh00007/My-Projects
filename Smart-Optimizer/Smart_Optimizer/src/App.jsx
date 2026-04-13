import React, { useEffect, useState } from "react";
import Dashboard from "./Component/Pages/Dashboard";
import ScoreCard from "./Component/ScoreCard"
import Suggestions from "./Component/Suggestions";
import { getLatestMetric } from "./Component/Services/api";

function App() {
  const [data, setData] = useState(null);

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

    // optional live update every 5 sec
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">

      {/* Main Dashboard */}
      <Dashboard data={data} />

      {/* Extra Analytics Section */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        <ScoreCard data={data} />

        <Suggestions data={data} />

      </div>

    </div>
  );
}

export default App;