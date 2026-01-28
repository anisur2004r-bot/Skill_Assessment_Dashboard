import React from 'react';
import { Link } from 'react-router';

const Navber = () => {
    return (
        <div className=''>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center gap-2 hover:shadow-md shadow-gray-300 px-4 py-2 rounded-full duration-600 '>
                    <img src="/public/Image/Group (2).png" alt="" />
                    <Link className='' to={"/"}>Dashboard Overview</Link>
                </div>
                <div className='flex items-center gap-2 hover:shadow-md shadow-gray-300 px-4 py-2 rounded-full  duration-600'>
                    <img src="/public/Image/Vector (2).png" alt="" />
                    <Link to={"calllog"}>Call Logs</Link>
                </div>
                <div className='flex items-center gap-2 hover:shadow-md shadow-gray-300 px-4 py-2 rounded-full  duration-600'>
                    <img src="/public/Image/Icon.png" alt="" />
                    <Link to={"appointment"}>Appointment</Link>
                </div>
                <div className='flex items-center gap-2 hover:shadow-md shadow-gray-300 px-4 py-2 rounded-full  duration-600'>
                    <img src="/public/Image/Icon (1).png" alt="" />
                    <Link className={({ isActive }) => isActive ? `` : ``} to={"settings"}>Settings</Link>
                </div>
            </div>
        </div>
    );
};

export default Navber;