import React, { useState } from 'react';
import { useAppContext } from '../contexts/Context.jsx';
import ListVideos from "../components/ListVideos.jsx";
import UploadVideo from "../components/UploadVideo.jsx";

function Dashboard() {
    const { user, navigate } = useAppContext();
    const [selected, setSelected] = useState("HOME");

    const menuItems = [
        { label: "HOME", icon: "../../assets/clean-house_3672338.png" },
        { label: "MY VIDEOS", icon: "../../assets/youtube.png" },
        { label: "UPLOAD VIDEO", icon: "../../assets/video_1179120.png" },
    ];

    return (
        <div className="flex bg-[#0f0f0f] min-h-screen text-white">
            {/* Sidebar */}
            <div className="w-64 bg-[#212121] border-r border-gray-700">
                <div className="flex flex-col items-center mb-10">
                    <img
                        src={user?.logo || "/assets/default-user.png"}
                        alt="User Logo"
                        className="w-20 h-20 rounded-full mb-3 border"
                    />
                    <h1 className="text-lg font-semibold">{user?.channelName || "Your Channel"}</h1>
                </div>
                <ul className="space-y-2">
                    {menuItems.map(item => (
                        <li
                            key={item.label}
                            onClick={() => setSelected(item.label)}
                            className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all
                                ${selected === item.label
                                ? "bg-[#383838] font-semibold"
                                : "hover:bg-[#303030]"}`
                            }
                        >
                            <img src={item.icon} className="w-6 h-6" />
                            <span className="ml-4 text-sm tracking-wide">{item.label}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Content Area */}
            <div className="flex flex-col items-center pt-10 flex-1">
                {selected!=="UPLOAD VIDEO" && <h2 className="text-2xl font-bold mb-4">{selected}</h2>}
                {/* Conditional content rendering can go here */}
                <div className="h-[95%] w-[90%] bg-[#1f1f1f] px-4">
                    {(selected==="MY VIDEOS") ? <div className={`pt-10`}><ListVideos/></div>:""}
                    {(selected==="UPLOAD VIDEO") ? <div className={`p-20`}><UploadVideo/></div>:""}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
