import React from 'react';
import {videos} from "./ListVideos.jsx";
function SuggestedVideos(props) {
    return (
        <div className={`max-w-full pr-12`}>
            {/*<div className={`text-center mb-5`}>*/}
            {/*    <h1 className={`text-4xl`}>Suggested</h1>*/}
            {/*</div>*/}
            <div className={`flex flex-col gap-1`}>
                {videos.map((video, index) => (
                    <ul>
                        <li className={`list-none cursor-pointer mb-1`} key={index}>
                            <div className={`max-w-full flex flex-row items-center `}>
                                <div className={`px-2 w-[75%] overflow-hidden hover:scale-105`}>
                                    <img src={video.thumbnail} alt="" className={` border-none overflow-hidden rounded w-[100%]`} />
                                </div>
                                <div className={`flex flex-col w-full gap-0.8`}>
                                    <div className={`font-bold text-sm`}>{video.title}</div>
                                    <div className={`text-gray-400 mb-1 font-semibold text-xs`}>{video.channelName}</div>
                                    <div className={`flex flex-row text-gray-400 font-semibold text-xs`}>
                                        <h3>{video.views}</h3>
                                        <div>
                                            <li className={`list-disc text-xs font-semibold  ml-5`}>{video.uploaded}</li>
                                        </div>
                                    </div>
                                </div>
                                <img onClick={(e)=>{}}  className={` max-h-6 cursor-pointer`} src={"../../assets/icons8-three-dots-48.png"}/>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default SuggestedVideos;