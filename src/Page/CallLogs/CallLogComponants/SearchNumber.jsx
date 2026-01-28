import React from 'react';

const SearchNumber = () => {
    return (
        <div className='w-full py-4'>
            <div className='flex items-center justify-between container mx-auto px-4'>
                <div className='flex items-center gap-3 bg-[#101A3A] px-5 w-[652px] h-[60px] rounded-lg border border-slate-800 focus-within:border-blue-500 transition-all'>
                    <img src="/public/Image/Icon (7).png" className='w-5 h-5 opacity-60' alt="search" />
                    <input className='bg-transparent outline-none text-slate-300 w-full placeholder:text-slate-500' type="text" placeholder='Search by phone number, issue type...' />
                </div>
                <div className='flex gap-5'>
                    <div className='w-[158px] h-[60px] bg-[#101A3A] flex items-center justify-between px-5 rounded-lg border border-slate-800 cursor-pointer hover:bg-[#162550] transition-all'>
                        <p className='text-slate-300 text-sm'>All Type </p>
                        <img src="/public/Image/gridicons_dropdown.png" alt="" />
                    </div>
                    <div className='w-[158px] h-[60px] bg-[#101A3A] flex items-center justify-between px-5 rounded-lg border border-slate-800 cursor-pointer hover:bg-[#162550] transition-all'>
                        <p className='text-slate-300 text-sm'>All Issues </p>
                        <img src="/public/Image/gridicons_dropdown.png" alt="" />
                    </div>
                    <div className='w-[158px] h-[60px] bg-[#101A3A] flex items-center justify-between px-5 rounded-lg border border-slate-800 cursor-pointer hover:bg-[#162550] transition-all'>
                        <p className='text-slate-300 text-sm'>Today </p>
                        <img src="/public/Image/gridicons_dropdown.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchNumber;