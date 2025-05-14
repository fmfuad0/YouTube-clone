import React, { useState } from 'react';
import { useAppContext } from '../contexts/Context.jsx';
import ListVideos from "../components/ListVideos.jsx";
import UploadVideo from "../components/UploadVideo.jsx";

function Dashboard() {
    const { user, navigate } = useAppContext();
    const [selected, setSelected] = useState("HOME");

    const menuItems = [
        { label: "HOME", icon: "/assets/home.svg" },
        { label: "MY VIDEOS", icon: "/assets/library.svg" },
        { label: "UPLOAD VIDEO", icon: "/assets/upload.svg" },
    ];

    return (
        <div className="flex bg-[#0f0f0f] min-h-screen text-white font-sans">
            {/* Sidebar */}
            <div className="w-60 bg-[#212121] border-r border-[#3e3e3e] pt-8">
                <div className="flex flex-col items-center mb-12">
                    <img
                        src={user?.logo || "/assets/default-user.png"}
                        alt="User Logo"
                        className="w-20 h-20 rounded-full mb-3 border border-gray-600"
                    />
                    <h1 className="text-md font-semibold text-gray-200">{user?.channelName || "Your Channel"}</h1>
                </div>
                <ul className="space-y-2 px-4">
                    {menuItems.map(item => (
                        <li
                            key={item.label}
                            onClick={() => setSelected(item.label)}
                            className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200
                                ${selected === item.label
                                ? "bg-[#373737] font-semibold text-white"
                                : "hover:bg-[#3e3e3e] text-gray-300"}`
                            }
                        >
                            <img src={item.icon} className="w-5 h-5" />
                            <span className="ml-4 text-sm uppercase tracking-wide">{item.label}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-1 ">
                {/* Header */}
                <div className="w-full px-10 py-5 border-b border-[#3e3e3e] bg-[#0f0f0f]">
                    {selected !== "UPLOAD VIDEO" && <h2 className="text-2xl font-bold text-white tracking-wide">{selected}</h2>}
                </div>

                {/* Main content */}
                <div className="flex-1 bg-[#1c1c1c] px-8 py-6 max-h-screen overflow-scroll">
                    {selected === "MY VIDEOS" && (
                        <div className="mt-4">
                            <ListVideos />
                        </div>
                    )}
                    {selected === "UPLOAD VIDEO" && (
                        <div className="mt-4">
                            <UploadVideo />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
