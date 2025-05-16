import React, {useEffect, useState} from 'react';
import TopBar from "../components/Topbar.jsx";
import {Player} from "../components/Player.jsx";
import SuggestedVideos from "../components/SuggestedVideos.jsx";
import VideoDescription from "../components/VideoDescription.jsx";
import ListComments from "../components/ListComments.jsx";
import {useParams} from "react-router-dom";
import {useAppContext} from "../contexts/Context.jsx";



function VideoPlayer(props) {
    const {video_id} = useParams();
    console.log(video_id)
    const {server} = useAppContext();
    const [videoPath, setVideoPath] = useState("");
    const [video, setVideo] = useState({});
    useEffect(() => {
        // console.log(localStorage.getItem("token"));
        const starter = async () => {
            try {

                setVideo({});
                setVideoPath(""); // reset previous video

                const result = await fetch(`${server}/video/${video_id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                });
                const video = await result.json();
                console.log(video.channelInfo.channelName)

                if (!video || !video.video_url) {
                    window.alert("Video not found!");
                    return;
                }

                const secureUrl = video.video_url.startsWith("http://")
                    ? video.video_url.replace("http://", "https://")
                    : video.video_url;

                setVideo(video);
                setVideoPath(secureUrl);
            } catch (err) {
                console.error("Error fetching video:", err);
            }
        };
        if (video_id) {
            starter();
            window.scrollTo(0, 0);
        }
    }, [video_id, server]);

    const options = {
        controls: true,
        autoplay: false,
        preload: 'auto',
        responsive: true,
        fluid: true,  // Ensures responsive aspect ratio (16:9)
        poster: video.thumbnail_url,
        sources: videoPath ? [{
            src: videoPath, // Replace with your video URL
            type: "video/mp4",
        }]:[],
    };
    const onPlayerReady = (player) => {
        console.log("Player is ready:", player);
    };
    return (
        <div className="bg-[#0f0f0f]">
            <TopBar showCatagory={false}/>
            <div className="pt-20 pl-20 flex lg:flex-row sm:flex-col">
                <div className={`flex flex-col h-full max-w-[67%] pr-5 gap-2`}>
                    {videoPath &&
                    <Player options={options}  onReady={onPlayerReady}/>}
                    <h1 className={`font-bold text-lg`}>{video.title}</h1>
                    <div className={`flex lg:flex-row sm:flex-col md:flex-col justify-between `}>
                        {video?.channelInfo && (
                            <div className={`flex h-10 flex-row items-center gap-3 justify-around`}>
                                <img src={video.channelInfo.logo} alt="channel logo" className="cursor-pointer w-8 h-8 border rounded-full" />
                                <div className={`flex flex-col`}>
                                    <h1 className={`cursor-pointer  text-[15px] font-bold`}>{video.channelInfo.channelName}</h1>
                                    <h2 className={`cursor-pointer text-xs text-gray-400 font-semibold`}>1.8M Subscribers</h2>
                                </div>
                                <button className={`px-3 py-1.5 cursor-pointer bg-white text-black font-semibold rounded-3xl text-sm `}>Subscribe</button>
                            </div>
                        )}

                        <div className={`flex flex-row items-center gap-1 justify-around`}>
                            <div className={`flex flex-row bg-[#212121] rounded-3xl `}>
                                <div className={`cursor-pointer flex flex-row items-center rounded-l-3xl px-3 py-2 gap-1  hover:bg-[#3d3d3d]`}>
                                    <img src={"../../assets/icons8-like-96-normal.png"} alt="" className={`w4 h-5`} />
                                    <p className={`text-sm font-bold`}>2.9K</p>
                                </div>
                                <div className={`flex flex-row items-center`}>
                                    <hr className={`w-5 rotate-90`} />
                                </div>
                                <div className={`cursor-pointer flex flex-row items-center rounded-r-3xl px-3 py-2 gap-1  hover:bg-[#3d3d3d]`}>
                                    <p className={`text-sm font-bold`}>2.9K</p>
                                    <img src={"../../assets/icons8-like-96-normal.png"} alt="" className={`w4 h-5 rotate-180`} />
                                </div>
                            </div>
                            <div className={`cursor-pointer flex flex-row items-center gap-1 bg-[#212121] hover:bg-[#3d3d3d] rounded-3xl px-4 py-2`}>
                                <img src={"../../assets/icons8-share-96.png"} alt="" className={`w4 h-5`} />
                                <p className={`text-sm font-bold`}>Share</p>
                            </div>
                            <div className={`cursor-pointer flex flex-row items-center gap-1 bg-[#212121] hover:bg-[#3d3d3d] rounded-3xl px-4 py-2`}>
                                <img src={"../../assets/icons8-download-96.png"} alt="" className={`w4 h-5`} />
                                <p className={`text-sm font-bold`}>Download</p>
                            </div>
                            <div className={`cursor-pointer flex flex-row items-center rounded-3xl bg-[#212121] px-3 py-2 gap-1  hover:bg-[#3d3d3d]`}>
                                <img src={"../../assets/icons8-save-96.png"} alt="" className={`w4 h-5 rotate-180`} />
                                <p className={`text-sm font-bold`}>Save</p>
                            </div>
                            <div className={`cursor-pointer flex flex-row items-center gap-1 bg-[#212121] hover:bg-[#3d3d3d] rounded-3xl px-2 py-2`}>
                                <img src={"../../assets/icons8-three-dots-96.png"} alt="" className={`w4 h-5 rotate-90`} />
                            </div>
                        </div>
                    </div>
                    <VideoDescription/>
                    <ListComments video_id={video_id} />
                </div>
                <div className="w-full">
                    <SuggestedVideos flexDirection={"col"}/>
                </div>
            </div>

        </div>
    );
}

export default VideoPlayer;