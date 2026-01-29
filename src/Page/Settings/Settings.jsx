import React from 'react';

const Settings = () => {
    return (
        <div className='min-h-screen w-full bg-[#152353]'>
            <div className='bg-[#111B3C] w-full h-24 flex items-center justify-between px-4 md:px-8 border-b border-[#1B3265]'>
                <h2 className='text-xl md:text-3xl font-semibold text-white'>Settings</h2>
                <div className='flex items-center gap-4 md:gap-8'>
                    <img className="w-6 md:w-auto" src="/Image/notifications_none.png" alt="" />
                    <img className="w-8 md:w-auto rounded-full" src="/Image/Avatar.png" alt="" />
                </div>
            </div>

            <div className='bg-[#152354] w-full p-4 md:p-7 text-[#FFFFFF]'>
                <div className='mb-8'>
                    <div>
                        <div className='flex gap-6 md:gap-10 text-lg md:text-2xl border-b border-[#192D71] md:border-none pb-2 md:pb-0'>
                            <p className="cursor-pointer border-b-2 border-blue-500 md:border-none">Profile</p>
                            <p className="cursor-pointer ">Password Settings</p>
                        </div>
                        <div className='flex flex-col items-start justify-center mt-8 md:mt-12 gap-4 px-2 md:px-7 '>
                            <p className='text-lg md:text-xl'>Profile Image</p>
                            <div className='flex items-end gap-6'>
                                <img className='w-20 md:w-30 rounded-lg' src="/Image/Avatar.png" alt="" />
                                <p className='shadow-md shadow-gray-900/50 px-4 py-1 rounded-full bg-[#44547A] text-sm md:text-base cursor-pointer hover:bg-[#50628d] transition-all'>
                                    Edit Profile
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full px-2 md:px-7 py-3'>
                    <div className='text-base md:text-xl flex flex-col gap-2 md:gap-4'>
                        <div className='flex flex-col md:flex-row md:gap-22 border-b w-full md:w-[720px] py-4 border-[#192D71]'>
                            <p className="w-40 text-slate-400 md:text-white">Full Name:</p>
                            <p>Jane D.</p>
                        </div>
                        <div className='flex flex-col md:flex-row md:gap-23 border-b w-full md:w-[720px] py-4 border-[#192D71]'>
                            <p className="w-40 text-slate-400 md:text-white">Email:</p>
                            <p className="break-all">jane@gmail.com</p>
                        </div>
                        <div className='flex flex-col md:flex-row md:gap-23 border-b w-full md:w-[720px] py-4 border-[#192D71]'>
                            <p className="w-40 text-slate-400 md:text-white">Store Name:</p>
                            <p>Ubreakfix Store</p>
                        </div>
                        <div className='flex flex-col md:flex-row md:gap-23 border-b w-full md:w-[720px] py-4 border-[#192D71]'>
                            <p className="w-40 text-slate-400 md:text-white">Store Address:</p>
                            <p className="flex-1">123 Main Street, New York, NY 10001</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;