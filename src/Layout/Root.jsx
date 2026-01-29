import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Navber from '../Componants/Header/Navber';

const Root = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0B1437]">
            <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-[#111B3C] text-white">
                <img onClick={() => setOpen(true)} className="w-10 bg-[#01D9ED] p-2 rounded-md" src="/Image/menu (3).png" alt="" />
                <img className="bg-[#00E3D5] px-2 py-2 rounded-xl" src="/Image/Icon (6).png" alt="" />
            </div>

            <div className="flex">
                <div className={`fixed lg:static top-0 left-0 z-50 h-full lg:h-auto bg-[#111B3C] text-white w-72 px-5 border-r border-[#1B3265] transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 `} >
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div className="flex items-center justify-center py-5">
                                <img className="bg-[#00E3D5] px-2 py-2 rounded-xl" src="/Image/Icon (6).png" alt="" />
                            </div>
                            <Navber />
                        </div>
                        <div className="flex items-center gap-3 text-xl text-red-500 mb-5 cursor-pointer">
                            <img src="/Image/streamline-flex_logout-1-remix.png" alt="" />
                            <p>Log Out</p>
                        </div>
                    </div>
                </div>
                {open && (
                    <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 z-40 lg:hidden" ></div>
                )}
                <div className="w-full text-white">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Root;
