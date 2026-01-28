import React from 'react';

const DashboardStutas = () => {
    const stats = [
        {
            label: 'Total Calls Today',
            value: '127',
            growth: '+12%',
            icon: <img src="/Image/Vector (3).png" alt="" />,
            color: 'bg-blue-500',
        },
        {
            label: 'AI-Handled Calls',
            value: '98',
            growth: '+77%',
            icon: <img src="/Image/Icon (3).png" alt="" />,
            color: 'bg-magenta-500', 
            customColor: '#d946ef'
        },
        {
            label: 'Warm Transfer',
            value: '23',
            growth: '+18%',
            icon: <img src="/Image/Icon (4).png" alt="" />,
            color: 'bg-orange-500',
        },
        {
            label: 'Appointments Booked',
            value: '34',
            growth: '+8%',
            icon: <img src="/Image/Icon.png" alt="" />,
            color: 'bg-emerald-500',
        },
        {
            label: 'Missed/Failed Calls',
            value: '6',
            growth: '-3%',
            icon: <img src="/Image/Icon (2).png" alt="" />,
            color: 'bg-red-500',
        },
        {
            label: 'Avg Call Duration',
            value: '3:42',
            growth: '+15%',
            icon: <img src="/Image/Icon (5).png" alt="" />,
            color: 'bg-indigo-500',
        },
    ];

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
                {stats.map((item, index) => (
                    <div key={index} className="bg-[#161d31] p-8 rounded-2xl border border-gray-800 flex justify-between items-start hover:border-gray-700 transition-colors shadow-lg">
                        <div>
                            <p className="text-gray-400 font-medium mb-3">{item.label}</p>
                            <h2 className="text-white text-4xl font-semibold mb-3">{item.value}</h2>
                            <p className={`text-sm font-bold ${item.growth.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                {item.growth}
                            </p>
                        </div>

                        <div className={`${item.color} p-3 rounded-xl text-white shadow-inner`}
                            style={{ backgroundColor: item.customColor }}>
                            {item.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardStutas;