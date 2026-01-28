import React from 'react';

const BokingList = ({clientDetails}) => {
    return (
        <div>
            <div className='bg-[#111B3B] rounded-2xl'>
                <div className='flex items-center justify-between px-4 py-8 border border-[#162F61]'>
                    <p>ClientName</p>
                    <p className='-translate-x-9'>Client Phone</p>
                    <p className='-translate-x-7'>Client mail</p>
                    <p className='translate-x-9'>Device</p>
                    <p className='translate-x-18'>Repair Type</p>
                    <p className='translate-x-17'>Date</p>
                    <p className='translate-x-14'>Slot no</p>
                    <p>Start Time</p>
                </div>
                {
                    clientDetails.map(item=>
                        <div key={item.id}>
                            <div className='flex items-center justify-between space-y-10 border border-[#162F61] px-5 py-3 text-[#CFCFCF]'>
                                <div className='translate-y-4'>
                                    <p className='text-[#51A2FF]'>{item.clientName}</p>
                                </div>
                                <div className='translate-y-4'>
                                    <p>{item.clientPhone}</p>
                                </div>
                                <div className='translate-y-4'>
                                    <p>{item.clientEmail}</p>
                                </div>
                                <div className='translate-y-4'>
                                    <p>{item.device}</p>
                                </div>
                                <div className='translate-y-4'>
                                    <p>{item.repairType}</p>
                                </div>
                                <div className='translate-y-4'>
                                    <p>{item.date}</p>
                                </div>
                                <div className='translate-y-4'>
                                    <p>{item.slotNo}</p>
                                </div>
                                <div >
                                    <p>{item.startTime}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                <div className='flex items-center justify-center mt-10 gap-10 text-xl text-[#1146B1]'>
                    <div className='flex gap-3 text-[#4F576B]'>
                        <img src="/Image/chevron-left.png" alt="" />
                        <p>Previous</p>
                    </div>
                    <p>1</p>
                    <p className=' px-3 py-1 bg-[#A6C8FF]'>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>....</p>
                    <p>11</p>
                   <div className='flex gap-3'>
                     <p>Next</p>
                     <img src="/Image/chevron-right.png" alt="" />
                   </div>
                </div>
            </div>
        </div>
    );
};

export default BokingList;