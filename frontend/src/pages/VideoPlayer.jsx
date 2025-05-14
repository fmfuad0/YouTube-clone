import React from 'react';
import TopBar from "../components/Topbar.jsx";
import Player from "../components/Player.jsx";
import SuggestedVideos from "../components/SuggestedVideos.jsx";
import VideoDescription from "../components/VideoDescription.jsx";
import ListComments from "../components/ListComments.jsx";

function VideoPlayer(props) {
    const options = {
        controls: true,
        autoplay: false,
        preload: 'auto',
        responsive: true,
        fluid: true,  // Ensures responsive aspect ratio (16:9)
        sources: [{
            src: "../../assets/sampleVideo.mp4", // Replace with your video URL
            type: "video/mp4",
        }],
    };
    const onPlayerReady = (player) => {
        console.log("Player is ready:", player);
    };
    return (
        <div className="bg-[#0f0f0f]">
            <TopBar showCatagory={false}/>
            <div className="pt-20 pl-20 flex lg:flex-row sm:flex-col">
                <div className={`flex flex-col h-full max-w-[67%] pr-5 gap-2`}>
                    <Player options={options}  onReady={onPlayerReady}/>
                    <h1 className={`font-bold text-lg`}>AS MELHORES COLDPLAY - THE BEST</h1>
                    <div className={`flex lg:flex-row sm:flex-col md:flex-col justify-between `}>
                        <div className={`flex h-10 flex-row items-center gap-3 justify-around`}>
                            <img src={""} alt="" className={`w-8 h-8 border rounded-full `} />
                            <div className={`flex flex-col`}>
                                <h1 className={`text-[15px] font-bold`}>DopeMusicAllDay</h1>
                                <h2 className={`text-xs text-gray-400 font-semibold`}>1.8M Subscribers</h2>
                            </div>
                            <button className={`px-3 py-1.5 cursor-pointer bg-white text-black font-semibold rounded-3xl text-sm `}>Subscribe</button>
                        </div>
                        <div className={`flex flex-row items-center gap-1 justify-around`}>
                            <div className={`flex flex-row bg-[#212121] rounded-3xl `}>
                                <div className={`flex flex-row items-center rounded-l-3xl px-3 py-2 gap-1  hover:bg-[#aaa]`}>
                                    <img src={"../../assets/icons8-like-96.png"} alt="" className={`w4 h-5`} />
                                    <p className={`text-sm font-bold`}>2.9K</p>
                                </div>
                                <div className={`flex flex-row items-center`}>
                                    <hr className={`w-5 rotate-90`} />
                                </div>
                                <div className={`flex flex-row items-center rounded-r-3xl px-3 py-2 gap-1  hover:bg-[#aaa]`}>
                                    <p className={`text-sm font-bold`}>2.9K</p>
                                    <img src={"../../assets/icons8-like-96.png"} alt="" className={`w4 h-5 rotate-180`} />
                                </div>
                            </div>
                            <div className={`flex flex-row items-center gap-1 bg-[#212121] hover:bg-[#aaa] rounded-3xl px-4 py-2`}>
                                <img src={"../../assets/icons8-share-96.png"} alt="" className={`w4 h-5`} />
                                <p className={`text-sm font-bold`}>Share</p>
                            </div>
                            <div className={`flex flex-row items-center gap-1 bg-[#212121] hover:bg-[#aaa] rounded-3xl px-4 py-2`}>
                                <img src={"../../assets/icons8-download-96.png"} alt="" className={`w4 h-5`} />
                                <p className={`text-sm font-bold`}>Download</p>
                            </div>
                            <div className={`flex flex-row items-center rounded-3xl bg-[#212121] px-3 py-2 gap-1  hover:bg-[#aaa]`}>
                                <img src={"../../assets/icons8-save-96.png"} alt="" className={`w4 h-5 rotate-180`} />
                                <p className={`text-sm font-bold`}>Save</p>
                            </div>
                            <div className={`flex flex-row items-center gap-1 bg-[#212121] hover:bg-[#aaa] rounded-3xl px-2 py-2`}>
                                <img src={"../../assets/icons8-three-dots-96.png"} alt="" className={`w4 h-5 rotate-90`} />
                            </div>
                        </div>
                    </div>
                    <VideoDescription/>
                    <ListComments/>
                </div>
                <div className="w-full">
                    <SuggestedVideos/>
                </div>
            </div>

        </div>
    );
}

export default VideoPlayer;