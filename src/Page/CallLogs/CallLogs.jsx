import React, { useEffect, useState } from 'react';
import SearchNumber from './CallLogComponants/SearchNumber';
import CallHistory from './CallLogComponants/DetailsSection/CallHistory';
import CallDetails from './CallLogComponants/DetailsSection/CallDetails';

const CallLogs = () => {
    const [history, setHistory] = useState([]);
    useEffect(() => {
        fetch("callHistory.json")
            .then(res => res.json())
            .then(data => setHistory(data))
    }, []);
    return (
        <div className='min-h-screen w-full bg-[#152353]'>
            <div className='bg-[#111B3C] w-full h-24 flex items-center justify-between px-4 md:px-8 border-b border-[#1B3265]'>
                <h2 className='text-xl md:text-3xl font-semibold text-white'>Call Logs & History</h2>
                <div className='flex items-center gap-4 md:gap-8'>
                    <img className="w-6 md:w-auto" src="/public/Image/notifications_none.png" alt="notification" />
                    <img className="w-8 md:w-auto rounded-full" src="/public/Image/Avatar.png" alt="profile" />
                </div>
            </div>

            <div className='bg-[#152353] w-full p-4 md:p-7'>
                <div className='mb-4 md:mb-6'>
                    <SearchNumber></SearchNumber>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8 px-7'>

                    <div className='lg:col-span-5 bg-[#111C3E] border border-[#2d375c] rounded-xl h-auto lg:h-[760px] overflow-hidden'>
                        <CallHistory history={history}></CallHistory>
                    </div>
                    <div className='lg:col-span-5 bg-[#111C3E] border border-[#2d375c] rounded-xl h-auto'>
                        <CallDetails></CallDetails>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CallLogs;