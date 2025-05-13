import React, { useEffect, useRef, useState } from 'react';
import {useAppContext} from "../contexts/Context.jsx";

const categories = [
    "All", "Music", "Live", "Gaming", "News", "Sports", "Comedy", "Technology",
    "Movies", "Learning", "Fashion", "Travel", "Science", "Recently Uploaded",
    "Aircraft", "Navy", "Army", "Mega Projects"
];

const TopBar = () => {
    const [active, setActive] = useState("All");
    const scrollRef = useRef(null);
    const {navigate} = useAppContext();

    // Enable vertical mouse wheel to scroll the category bar horizontally
    useEffect(() => {
        const el = scrollRef.current;
        const onWheel = (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                el.scrollLeft += e.deltaY;
            }
        };
        el.addEventListener('wheel', onWheel, { passive: false });
        return () => el.removeEventListener('wheel', onWheel);
    }, []);

    return (
        <>
            {/* Top Navigation Bar */}
            <div className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 bg-[#212121] text-white shadow-md z-50">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/assets/video.png" className="h-8" alt="logo" />
                    <h1 className="font-extrabold text-2xl">
                        NEW <span className="text-[#CD201F]">TUBE</span>
                    </h1>
                </div>

                {/* Search */}
                <div className="flex flex-grow max-w-xl mx-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full px-4 py-2 bg-[#121212] border border-gray-600 rounded-l-full focus:outline-none text-white"
                    />
                    <button className="bg-[#303030] px-4 py-2 border border-gray-600 border-l-0 rounded-r-full hover:bg-[#3f3f3f]">
                        <img src="/assets/search-icon.png" alt="Search" className="h-5" />
                    </button>
                </div>

                {/* User Icons */}
                <div className="flex items-center gap-4">
                    <button onClick={()=>navigate('/dashboard')} className={`cursor-pointer`}>DASHBOARD</button>
                    <img src="../../assets/world_4277307.png" alt="User" className="h-8 w-8 rounded-full border border-gray-500 cursor-pointer" />
                </div>
            </div>

            {/* Category Bar */}
            <div
                ref={scrollRef}
                className="fixed top-[55px] left-0 w-full flex overflow-x-auto px-4 py-3 bg-[#212121] text-white z-40 space-x-3 no-scrollbar"
            >
                {categories.map((category, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActive(category)}
                        className={`px-4 py-1 rounded-full whitespace-nowrap text-sm font-semibold transition-colors hover:cursor-pointer ${
                            active === category
                                ? "bg-white text-black"
                                : "bg-[#303030] hover:bg-[#3f3f3f]"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </>
    );
};

export default TopBar;
