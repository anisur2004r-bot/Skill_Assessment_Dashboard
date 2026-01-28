

const CallHistory = ({ history }) => {
    return (
        <div className="flex flex-col gap-10">
            <h2 className="text-2xl px-4 py-4 border-b border-[#2d375c]">Call List</h2>
            {history.map((item, index) => (
                <div key={index}>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between px-4">
                            <div className="flex items-center gap-4">
                                <img src="/Image/Container.png" alt="" />
                                <div>
                                    <h2 className="text-xl font-semibold">{item.phone}</h2>
                                    <div className="flex text-[#90A1B9] mt-1 items-center gap-3">
                                        <p>{item.date}</p>
                                        <p>{item.time}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`px-3 py-2 rounded-full border border-[#2d375c] ${item.bg} ${item.color} font-bold text-[10px] tracking-tight`}>
                                <p>{item.status}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 px-4  border-b border-[#2d375c]">
                            <div className="flex items-center gap-2">
                                <img src="/Image/Icon (8).png" alt="" />
                                <p  className=" text-[#90A1B9] ">{item.duration}</p>

                            </div>
                            <div className="flex items-center gap-2 py-4 ">
                                <img src="/Image/Icon (9).png" alt="" />
                                <p className=" text-[#90A1B9] ">{item.status}</p>
                                <div className=" ml-8 bg-[#152E62] px-4 py-1 rounded-md text-[#468CE2] " >
                                    <p>{item.type}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CallHistory;
