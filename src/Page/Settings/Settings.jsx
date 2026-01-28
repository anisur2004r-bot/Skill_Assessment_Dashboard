import React from 'react';

const Settings = () => {
    return (
        <div className='min-h-screen w-full bg-[#152353]'>

            <div className='bg-[#111B3C] w-full h-24 flex items-center justify-between px-8 border-b border-[#1B3265]'>
                <h2 className='text-3xl font-semibold text-white'>Settings</h2>
                <div className='flex items-center gap-8'>
                    <img src="/Image/notifications_none.png" alt="" />
                    <img src="/Image/Avatar.png" alt="" />
                </div>
            </div>
            <div className='bg-[#152354] w-full p-7 text-[#FFFFFF]'>
                <div className='mb-8'>
                    <div >
                        <div className='flex gap-10 text-2xl'>
                            <p>Profile</p>
                            <p>Password Settings</p>
                        </div>
                        <div className='flex flex-col items-start justify-center mt-12 gap-4 px-7 '>
                            <p className='text-xl'>Profile Image</p>
                            <div className='flex items-end gap-6'>
                                <img className='w-30' src="/Image/Avatar.png" alt="" />
                                <p className='shadow-md shadow-gray-300 px-4 rounded-full bg-[#44547A] '>Edit Profile</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full px-7 py-3'>
                    <div className='text-xl flex flex-col gap-4'>
                        <div className='flex gap-22 border-b w-180 py-4 border-[#192D71]'>
                            <p>Full Name:</p>
                            <p>Jane D.</p>
                        </div>
                        <div className='flex gap-33  border-b w-180 py-4 border-[#192D71]'>
                            <p>Email:</p>
                            <p>jane@gmail.com</p>
                        </div>
                        <div className='flex gap-18.5  border-b w-180 py-4 border-[#192D71]'>
                            <p>Store Name:</p>
                            <p>Ubreakfix Store</p>
                        </div>
                        <div className='flex gap-14  border-b w-180 py-4 border-[#192D71]'>
                            <p>Store Address:</p>
                            <p>123 Main Street, New York, NY 10001</p>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Settings;