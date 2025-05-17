import React, {useEffect, useState, useMemo} from 'react';
import TopBar from "../components/Topbar.jsx";
import {Player} from "../components/Player.jsx";
import SuggestedVideos from "../components/SuggestedVideos.jsx";
import VideoDescription from "../components/VideoDescription.jsx";
import ListComments from "../components/ListComments.jsx";
import {useParams} from "react-router-dom";
import {useAppContext} from "../contexts/Context.jsx";
import likeFill from '../../assets/icons8-like-96-fill.png';
import likeNormal from '../../assets/icons8-like-96-normal.png';
import {videoThumbnails} from "../components/ListVideos.jsx";

function VideoPlayer(props) {
    const {video_id} = useParams();
    console.log(video_id)
    const {server, navigate} = useAppContext();
    const [videoPath, setVideoPath] = useState("");
    const [video, setVideo] = useState({});
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const  download = '../../assets/icons8-download-96.png';
    const  save = '../../assets/icons8-save-96.png';
    const  threeDots = '../../assets/icons8-three-dots-96.png';

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

    const options = useMemo(() => ({
        controls: true,
        autoplay: false,
        preload: 'auto',
        responsive: true,
        fluid: true,
        poster: videoThumbnails[Math.floor(Math.random() * videoThumbnails.length)],
        sources: videoPath ? [{
            src: videoPath,
            type: "video/mp4",
        }] : [],
    }), [video.thumbnail_url, videoPath]);
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
                            <div className={`flex h-10 flex-row items-center gap-3 justify-around `}>
                                <img src={video.channelInfo.logo} alt="channel logo" className="cursor-pointer w-8 h-8 border rounded-full" onClick={()=>navigate('/channel/channelUsername')}/>
                                    <div className={`flex flex-col`} onClick={()=>navigate('/channel/channelUsername')}>
                                        <h1 className={`cursor-pointer  text-[15px] font-bold`}>{video.channelInfo.channelName}</h1>
                                        <h2 className={`cursor-pointer text-xs text-gray-400 font-semibold`}>1.8M Subscribers</h2>
                                    </div>
                                <div className={``}>
                                    <button className={`px-3 py-1.5 cursor-pointer bg-white text-black  font-semibold rounded-3xl duration-300 hover:bg-[#ff0029] hover:tracking-wider hover:shadow-md shadow-red-800`}>Subscribe</button>
                                </div>
                            </div>
                        )}

                        <div className={`flex flex-row items-center justify-around gap-2`}>
                            <div className={`flex flex-row bg-[#212121] rounded-4xl cursor-pointer`}>
                                {/* LIKE BUTTON */}
                                <div  className={`${isHovered? "bg-[#3d3d3d]":"bg-[#212121]"} flex flex-row items-center text-[#A49A9AFF] py-2 rounded-l-3xl`}>
                                    <div onMouseEnter={()=>setIsHovered(true)}  onMouseLeave={()=>setIsHovered(false)} onClick={(e) => {
                                        e.preventDefault();
                                        setIsLiked(!isLiked);
                                        setIsDisliked(false);
                                    }}  className={`flex flex-row items-center gap-2 px-3`}>
                                        <img
                                            src={isLiked ? likeFill : likeNormal}
                                            alt="like"
                                            className={`w-5 h-5 transition duration-300 rounded-full ${isLiked ? "scale-150 hover:scale-180" : "hover:scale-120"}`}
                                        />
                                        <p className="text-sm font-bold">{Math.floor(Math.random()*3500)}</p>
                                    </div>
                                </div>
                                {/* DISLIKE BUTTON */}
                                <div  className={`${isHovered2? "bg-[#3d3d3d]":"bg-[#212121]"} flex flex-row items-center text-[#A49A9AFF] py-2 rounded-r-3xl gap-1 `}>
                                    <div onMouseEnter={()=>setIsHovered2(true)}  onMouseLeave={()=>setIsHovered2(false)} onClick={() => {
                                        setIsDisliked(!isDisliked);
                                        setIsLiked(false);
                                    }} className={`flex flex-row items-center gap-2 border-l-1 ${isHovered2||isHovered?"border-l-[transparent]" : ""} px-3 duration-100`}>
                                        <p className="text-sm font-bold">{Math.floor(Math.random()*300)}</p>
                                        <img
                                            src={isDisliked ? likeFill : likeNormal}
                                            alt="dislike"
                                            className={`w-5 h-5 transition duration-300 rounded-full rotate-180 ${isDisliked ? (isHovered2?"scale-180":"scale-150"):(isHovered2?"scale-120": "")}`}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={`cursor-pointer flex flex-row items-center gap-1 bg-[#212121] hover:bg-[#3d3d3d] rounded-3xl px-4 py-2`}>
                                <img src={"../../assets/icons8-share-96.png"} alt="" className={`w4 h-5`} />
                                <p className={`text-sm font-bold`}>Share</p>
                            </div>
                            <div className={`cursor-pointer flex flex-row items-center gap-1 bg-[#212121] hover:bg-[#3d3d3d] rounded-3xl px-4 py-2`}>
                                <img src={download} alt="" className={`w4 h-5`} />
                                <p className={`text-sm font-bold`}>Download</p>
                            </div>
                            <div className={`cursor-pointer flex flex-row items-center rounded-3xl bg-[#212121] px-3 py-2 gap-1  hover:bg-[#3d3d3d]`}>
                                <img src={save} alt="" className={`w-4 h-5 rotate-180`} />
                                <p className={`text-sm font-bold`}>Save</p>
                            </div>
                            <div className={`cursor-pointer flex flex-row items-center gap-1 bg-[#212121] hover:bg-[#3d3d3d] rounded-3xl px-2 py-2`}>
                                <img src={threeDots} alt="" className={`w-4 h-5 rotate-90`} />
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