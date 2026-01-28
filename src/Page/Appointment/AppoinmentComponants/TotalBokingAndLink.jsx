import React from 'react';

const TotalBokingAndLink = () => {
    return (
        <div className="px-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#111C3E] border border-blue-900/30 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="text-blue-500 bg-blue-500/10 p-2 rounded-lg">
                            <img src="Image/Icon (11).png" alt="" />
                        </div>
                        <p className="text-slate-400 text-sm font-medium">Total Booked</p>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-2">34</h2>
                    <p className="text-emerald-500 text-sm font-semibold">+8 this week</p>
                </div>
                <div className="bg-[#111B3C] border border-blue-900/30 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="text-emerald-500 bg-emerald-500/10 p-2 rounded-lg">
                            <img src="Image/Icon (12).png" alt="" />
                        </div>
                        <p className="text-slate-400 text-sm font-medium">AI Booked</p>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-2">28</h2>
                    <p className="text-slate-500 text-sm">82% of total</p>
                </div>
                <div className="bg-[#111B3C] border border-blue-900/30 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="text-yellow-500 bg-yellow-500/10 p-2 rounded-lg">
                            <img src="/public/Image/Icon (13).png" alt="" />
                        </div>
                        <p className="text-slate-400 text-sm font-medium">Pending</p>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-2">3</h2>
                    <p className="text-slate-500 text-sm">Awaiting confirmation</p>
                </div>
            </div>
            <div className="bg-[#191C32] border border-blue-900/30 p-8 rounded-2xl shadow-lg">
                <p className="text-white font-semibold mb-4 text-lg">Booking Link</p>

                <div className="flex items-center gap-4 bg-[#0B1226] p-2 px-4 border border-slate-800 rounded-xl">
                    <input type="text" readOnly value="https://techstore.com/book?id=store123" className="outline-none text-slate-300 flex-1 text-xl" />
                    <button className="bg-gradient-to-r from-[#2B3B6F] to-[#1B2A55] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition-all border border-blue-400/20 shadow-lg">
                        <img src="/public/Image/Icon (14).png" alt="" />
                        <span className="text-sm font-medium">Copy Link</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TotalBokingAndLink;