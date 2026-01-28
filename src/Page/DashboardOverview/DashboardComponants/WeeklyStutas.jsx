import React from 'react';

const WeeklyStutas = () => {
    return (
        <div className='bg-[#111C3D] min-h-[440px] w-full rounded-xl border border-[#1B3265] overflow-hidden'>
            <div className='flex items-center justify-between px-10 py-6'>
                <div>
                    <h3 className='text-xl font-semibold text-white'>Call Trends - This Week</h3>
                    <p className='text-sm text-gray-400 mt-1'>Total: 472 calls</p>
                </div>
                <div>
                    <div className='px-4 py-2 bg-[#1D293D] rounded-lg border border-slate-700 text-sm text-slate-300 cursor-pointer flex items-center gap-2'>
                        This Week <span className='text-[10px]'>▼</span>
                    </div>
                </div>
            </div>
            <div className='px-10 pb-6'>
                <div className='w-full h-full flex items-center justify-center bg-[#0F172A]/30 rounded-lg p-4'>
                    <img src="/Image/Container (1).png" alt="" className='w-full h-auto object-contain'/>
                </div>
            </div>

        </div>
    );
};

export default WeeklyStutas;