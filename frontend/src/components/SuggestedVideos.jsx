import React, { useEffect, useRef, useState } from 'react';
import { useAppContext } from "../contexts/Context.jsx";
import {videoThumbnails} from "./ListVideos.jsx"

function SuggestedVideos(props) {
    const { server, navigate } = useAppContext();
    const [videos, setVideos] = useState([]);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const getVideos = async () => {
            const res = await fetch(`${server}/video`);
            const data = await res.json();
            setVideos(data);
        };
        getVideos();
    }, []);

    return (
        <div className={`w-full ${props.flexDirection === 'col' ? "pr-12" : "pr-15"}`}>
            <div className="relative w-full flex items-center">
                {props.flexDirection==='row' && <button
                    onClick={() => scrollContainerRef.current?.scrollBy({ left: -500, behavior: 'smooth' })}
                    className="absolute sm:left-0 lg:-left-3 bottom-[58%] z-10"
                >
                    <img src="../../assets/icons8-arrow-100.png" alt="Left" className="w-10 h-10 rotate-180 rounded-full cursor-pointer" />
                </button>}
                <div
                    ref={scrollContainerRef}
                    className={`flex flex-${props.flexDirection} ${props.flexDirection === "row" ? "no-scrollbar gap-5 overflow-x-scroll scroll-smooth" : ""} w-full px-10`}
                >
                    {videos.map((video) => (
                        <ul key={video._id}>
                            <li className={`list-none cursor-pointer mb-1 ${props.flexDirection === 'col' ? "w-full" : "w-[230px]"}`}>
                                <div className={`max-w-full flex gap-4 flex-${props.flexDirection === 'col' ? "row" : "col"} items-start`}>
                                    <div className={`w-full h-[120px] overflow-hidden hover:scale-105`}  onClick={() => navigate(`/watch/${video._id}`)}>
                                        <img src={videoThumbnails[Math.floor(Math.random() * videoThumbnails.length)]} alt="" className="rounded w-full" />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <div  onClick={() => navigate(`/watch/${video._id}`)} className="font-bold text-sm">{video.title}</div>
                                        <div className="text-gray-400 mb-1 font-semibold text-xs flex items-center gap-1" onClick={(e)=>navigate(`/channel/channelUsername`)}>
                                            {video.channelInfo.channelName}
                                            <img src="../../assets/icons8-verify-64.png" className="h-4" />
                                        </div>
                                        <div  onClick={() => navigate(`/watch/${video._id}`)} className="flex flex-row text-gray-400 font-semibold text-xs">
                                            <h3>{video.views} Views</h3>
                                            <li className="ml-4">{video.uploaded}</li>
                                            {props.flexDirection === 'row' && (
                                                <img src="../../assets/icons8-three-dots-48.png" className="max-h-6 ml-auto cursor-pointer" alt="" />
                                            )}
                                        </div>
                                    </div>
                                    {props.flexDirection === 'col' && (
                                        <img src="../../assets/icons8-three-dots-48.png" className="max-h-6 cursor-pointer" alt="" />
                                    )}
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
                {props.flexDirection==='row' && <button
                    onClick={() => scrollContainerRef.current?.scrollBy({ left: 500, behavior: 'smooth' })}
                    className="absolute sm:-right-0 lg:-right-13 bottom-[58%] z-10 rounded-full"
                >
                    <img src="../../assets/icons8-arrow-100.png" alt="Right" className="w-10 h-10 rounded-full cursor-pointer" />
                </button>}
            </div>
        </div>
    );
}

export default SuggestedVideos;
