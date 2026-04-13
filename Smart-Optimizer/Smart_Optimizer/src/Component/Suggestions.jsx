import React from "react";

function Suggestions({ data }) {
  if (!data) {
    return (
      <div className="bg-gray-900 p-5 rounded-2xl text-white">
        Loading suggestions...
      </div>
    );
  }

  const cpu = data.cpuUsage;
  const ram = data.memoryUsage;

  const getSuggestions = () => {
    const list = [];

    if (cpu > 80) {
      list.push("⚠ High CPU usage detected — close heavy applications");
    } else if (cpu > 50) {
      list.push("🟡 CPU usage moderate — monitor background processes");
    } else {
      list.push("✅ CPU usage is normal");
    }

    if (ram > 80) {
      list.push("⚠ High memory usage — consider freeing RAM");
    } else if (ram > 60) {
      list.push("🟡 Memory usage is a bit high");
    } else {
      list.push("✅ Memory usage is normal");
    }

    if (cpu < 30 && ram < 40) {
      list.push("💡 System is idle — power saving mode recommended");
    }

    return list;
  };

  const suggestions = getSuggestions();

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 text-white">
      
      <h3 className="text-gray-400 mb-3">Optimization Suggestions</h3>

      <ul className="space-y-3">
        {suggestions.map((item, index) => (
          <li
            key={index}
            className="bg-gray-800 p-3 rounded-lg text-sm"
          >
            {item}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Suggestions;