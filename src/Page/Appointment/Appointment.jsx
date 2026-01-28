import React, { useEffect, useState } from 'react';
import TotalBokingAndLink from './AppoinmentComponants/TotalBokingAndLink';
import BokingList from './AppoinmentComponants/BokingList';

const Appointment = () => {
    const [clientDetails, setClientDetails] = useState([])
    useEffect(() => {
        fetch("clientList.json")
            .then(res => res.json())
            .then(data => setClientDetails(data))
    }, [])
    return (
        <div className='min-h-screen w-full bg-[#152353]'>

            <div className='bg-[#111B3C] w-full h-24 flex items-center justify-between px-8 border-b border-[#1B3265]'>
                <h2 className='text-3xl font-semibold text-white'>Appointments</h2>
                <div className='flex items-center gap-8'>
                    <img src="/Image/notifications_none.png" alt="" />
                    <img src="/Image/Avatar.png" alt="" />
                </div>
            </div>
            <div className='bg-[#152353] w-full p-7'>
                <div className='mb-8'>
                    <TotalBokingAndLink></TotalBokingAndLink>
                </div>
                <div className='w-full px-7 py-3'>
                    <BokingList clientDetails={clientDetails}></BokingList>
                </div>
            </div>
        </div>
    );
};

export default Appointment;