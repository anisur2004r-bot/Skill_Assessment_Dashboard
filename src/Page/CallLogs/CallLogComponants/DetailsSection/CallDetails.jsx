import React from 'react';

const CallDetails = () => {
    const callData = {
        "phone": "+1 (555) 345-6789",
        "details": {
            "duration": "5:23",
            "date_time": "2025-12-16 09:42 AM",
            "issue_type": "Screen",
            "call_type": "AI Resolved",
            "outcome": "Quote Provided",
            "audio_url": "/recordings/call_1.mp3",
        }
    };

    return (
        <div className="bg-[#111C3E] border border-blue-900/30 rounded-2xl p-8 w-full max-w-4xl text-slate-300 font-sans shadow-2xl">
            <h2 className="text-xl font-semibold text-white mb-8">Call Details</h2>
            <div className="grid grid-cols-2 gap-y-8 mb-10">
                <div>
                    <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-1">Phone Number</p>
                    <p className="text-white text-lg font-medium">{callData.phone}</p>
                </div>
                <div>
                    <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-1">Duration</p>
                    <p className="text-white text-lg font-medium">{callData.details.duration}</p>
                </div>
                <div>
                    <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-1">Date & Time</p>
                    <p className="text-white text-lg font-medium">{callData.details.date_time}</p>
                </div>
                <div>
                    <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-1">Issue Type</p>
                    <p className="text-white text-lg font-medium">{callData.details.issue_type}</p>
                </div>
            </div>
            <div className="mb-8">
                <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-3">Call Type</p>
                <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-500 rounded-lg text-xs font-bold border border-emerald-500/20 inline-block">
                    {callData.details.call_type}
                </span>
            </div>

            <div className="mb-10">
                <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-1">Outcome</p>
                <p className="text-white text-lg font-medium">{callData.details.outcome}</p>
            </div>

            <button className="w-full h-14 bg-gradient-to-r from-[#4A1D6E] to-[#2B123A] rounded-2xl flex items-center justify-center gap-3 text-purple-200 border border-purple-500/20 hover:border-purple-500/40 transition-all mb-10 shadow-lg group">
                <img src="/Image/Vector (6).png" alt="" />
                <span className="font-semibold tracking-wide">Play Audio Recording</span>
            </button>
            <div className="space-y-4">
                <div className="flex items-center gap-3 text-white font-medium mb-4">
                    <img src="/Image/Icon (10).png" alt="" />
                    Conversation Transcript
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-[#099860] text-xl font-semibold'>Ai Assistant</h3>
                        <p>Thank you for calling UBreakiFix! How can I help you today?</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-[#4A92E7] text-xl font-semibold'>Customer</h3>
                        <p>Hi, my iPhone 13 screen is cracked. How much would it cost to repair?</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-[#099860] text-xl font-semibold'>Ai Assistant</h3>
                        <p>I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-[#4A92E7] text-xl font-semibold'>Customer</h3>
                        <p>Yes, please! When are you available?</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-[#099860] text-xl font-semibold'>AI Assistant:</h3>
                        <p>Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallDetails;
