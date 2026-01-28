import React from 'react';
import WeeklyStutas from './DashboardComponants/WeeklyStutas';
import DashboardStutas from './DashboardComponants/DashboardStutas';
import ActivityRequest from './DashboardComponants/ActivityRequest';

const DashboardOverview = () => {
    return (
        <div className='min-h-screen w-full bg-[#152353]'> 
            
            <div className='bg-[#111B3C] w-full h-24 flex items-center justify-between px-8 border-b border-[#1B3265]'>
                <h2 className='text-3xl font-semibold text-white'>Dashboard Overview</h2>
                <div className='flex items-center gap-8'>
                    <img src="/public/Image/notifications_none.png" alt="" />
                    <img src="/public/Image/Avatar.png" alt="" />
                </div>
            </div>
            <div className='bg-[#152353] w-full p-7'>
                <div className='mb-8'>
                    <DashboardStutas></DashboardStutas>
                </div>
                <div className='w-full px-7 py-3'>
                    <WeeklyStutas></WeeklyStutas>
                </div>
                <div>
                    <ActivityRequest></ActivityRequest>
                </div>
                
            </div>
        </div>
    );
};

export default DashboardOverview;