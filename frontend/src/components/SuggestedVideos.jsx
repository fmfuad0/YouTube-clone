import React, {useEffect, useState} from 'react';
// import {videos} from "./ListVideos.jsx";
import {useAppContext} from "../contexts/Context.jsx";
function SuggestedVideos(props) {
    const {server, navigate} = useAppContext()
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const getVideos = async () => {
            const res = await fetch(`${server}/video`)
            const data = await res.json()
            console.log(data)
            setVideos(data)
            if(props.flexDirection !== 'row'){props.ref=null}
        }
        getVideos()
    }, []);
    return (
        <div className={`w-full ${props.flexDirection==='col'?"pr-12":""} `}>
            {/*<div className={`text-center mb-5`}>*/}
            {/*    <h1 className={`text-4xl`}>Suggested</h1>*/}
            {/*</div>*/}
            <div ref={props.ref} className={`flex flex-${props.flexDirection} gap-6 overflow-x-scroll`}>
                {videos.map((video) => {
                    // console.log(video)
                    return (
                    <ul key={video._id} onClick={(e)=> {
                        e.preventDefault()
                        console.log(video._id)
                        navigate(`/watch/${video._id}`);
                    }}>
                        <li className={`list-none cursor-pointer mb-1 ${props.flexDirection==='col'?"[100%]":"w-[230px]"}`}>
                            <div className={`max-w-full flex gap-4 flex-${props.flexDirection==='col'?"row":"col"} items-center`}>
                                <div className={`w-${props.flexDirection==='col'?"[55%]":""} overflow-hidden hover:scale-105`}>
                                    <img src={video.thumbnail_url} alt="" className={` border-none overflow-hidden rounded w-[100%]`} />
                                </div>
                                <div className={`flex flex-col w-full gap-2 `}>
                                    <div className={`font-bold text-sm`}>{video.title+" "+video.title}</div>
                                    <div className={`text-gray-400 mb-1 font-semibold text-xs flex flex-row gap-1`}>
                                        {video.channelInfo.channelName}
                                        <img src={`../../assets/icons8-verify-64.png`} className={`h-4`}/>
                                    </div>
                                    <div className={`flex flex-row text-gray-400 font-semibold text-xs`}>
                                        <h3>{video.views} Views</h3>
                                        <div>
                                            <h2 className={`list-disc text-xs font-semibold  ml-4`}><li>{video.uploaded}</li></h2>
                                        </div>
                                        {props.flexDirection==='row' &&
                                            <img alt={""}  className={` max-h-6 cursor-pointer`} src={"../../assets/icons8-three-dots-48.png"}/> }
                                    </div>
                                </div>
                                {props.flexDirection==='col' &&
                                <img alt={""}  className={` max-h-6 cursor-pointer`} src={"../../assets/icons8-three-dots-48.png"}/> }
                            </div>
                        </li>
                    </ul>
                )})}
            </div>
        </div>
    );
}

export default SuggestedVideos;