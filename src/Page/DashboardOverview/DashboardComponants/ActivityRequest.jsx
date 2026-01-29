import React from 'react';

const ActivityRequest = () => {

  const activity = [
    {
      text: "AI booked appointment for iPhone 13 screen repair",
      time: "2 min ago",
      dot: "bg-green-500"
    },
    {
      text: "Warm transfer to technician - Software issue",
      time: "5 min ago",
      dot: "bg-orange-500"
    },
    {
      text: "Quote provided for iPad battery replacement",
      time: "8 min ago",
      dot: "bg-green-500"
    },
    {
      text: "Call dropped after 12 seconds",
      time: "15 min ago",
      dot: "bg-red-500"
    },
  ];
  const requests = [
    {
      name: "Screen Repair",
      count: 156,
      percent: "85%"
    },
    {
      name: "Battery Replacement",
      count: 89,
      percent: "55%"
    },
    {
      name: "Back Glass Repair",
      count: 67,
      percent: "40%"
    },
    {
      name: "Software Issues",
      count: 45,
      percent: "25%"
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 px-7">

      <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 shadow-lg">
        <h3 className="text-white text-lg font-semibold mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {activity.map((item, index) => (
            <div key={index} className="bg-[#1c253b]/40 p-4 rounded-xl border border-slate-800/50">
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${item.dot}`}></div>
                <div>
                  <p className="text-slate-200 text-sm font-medium leading-snug">{item.text}</p>
                  <span className="text-slate-500 text-xs mt-1 block">{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 shadow-lg">
        <h3 className="text-white text-lg font-semibold mb-6">Top Repair Requests</h3>
        <div className="space-y-7">
          {requests.map((req, index) => (
            <div key={index} className="group">
              <div className="flex justify-between mb-2">
                <span className="text-slate-300 text-sm font-medium">{req.name}</span>
                <span className="text-slate-400 text-xs">{req.count} requests</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-1000"
                  style={{ width: req.percent }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ActivityRequest;