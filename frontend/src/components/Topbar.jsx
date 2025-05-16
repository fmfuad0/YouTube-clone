import React from 'react';
import { useAppContext } from '../contexts/Context.jsx';

const TopBar = () => {
    const { navigate } = useAppContext();


    return (
        <>
            {/* Top Navigation Bar */}
            <div className="fixed w-full flex items-center justify-between px-4 py-4 bg-[#0f0f0f] text-white z-50">
                {/* Logo */}
                <div className="flex items-center ml-15 cursor-pointer  gap-1" onClick={(e)=>navigate("/")}>
                    <img src="../../assets/video.png" className="h-6" alt="logo" />
                    <h1 className="font-semibold text-lg tracking-tight">
                        NEW<span className="text-[#FF0000] ml-1">TUBE</span>
                    </h1>
                </div>

                {/* Search */}
                <div className="flex flex-grow max-w-lg mx-6">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full px-4 py-1 bg-[#121212] border border-[#3e3e3e] rounded-l-full focus:outline-none text-sm text-white placeholder-gray-400"
                    />
                    <button className="bg-[#272727] px-4 py-1 border border-[#3e3e3e] cursor-pointer border-l-0 rounded-r-full hover:bg-[#3a3a3a]">
                        <img src="../../assets/icons8-search-100.png" alt="Search" className="h-6" />
                    </button>
                </div>

                {/* User Icons */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                        Dashboard
                    </button>
                    <img
                        src="../../assets/world_4277307.png"
                        alt="User"
                        className="h-7 w-7 rounded-full border border-gray-600 cursor-pointer"
                        onClick={(e)=>navigate("/channel/pink_floyd")}
                    />
                </div>
            </div>
        </>
    );
};

export default TopBar;
