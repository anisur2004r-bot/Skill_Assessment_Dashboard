import React from 'react';
import { Link, Outlet } from 'react-router';
import Navber from '../Componants/Header/Navber';

const Root = () => {
    return (
        <div>
            <div className='flex'>
                <div className='flex flex-col items-start justify-between bg-[#111B3C] text-white w-78 px-5 border-r border-[#1B3265]'>
                    <div className='col-span-4'>
                        <div className='flex items-center justify-center py-5'>
                            <img className='bg-[#00E3D5] px-2 py-2 rounded-xl' src="/public/Image/Icon (6).png" alt="" />
                        </div>
                        <div className='mt-4'>
                            <Navber></Navber>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 text-xl text-red-500 mb-5 cursor-pointer'>
                        <img src="/public/Image/streamline-flex_logout-1-remix.png" alt="" />
                        <p>Log Out</p>
                    </div>
                </div>
                <div className=' w-full text-white'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Root;