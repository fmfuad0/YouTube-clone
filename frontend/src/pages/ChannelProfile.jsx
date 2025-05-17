import React, {useEffect, useState} from 'react';
import Topbar from "../components/Topbar.jsx";
import SuggestedVideos from "../components/SuggestedVideos.jsx";
import ListVideos from "../components/ListVideos.jsx";
import ListShorts from "../components/ListShorts.jsx";
import ListPosts from "../components/ListPosts.jsx";
import ChannelCommunity from "../components/ChannelCommunity.jsx";

const categories = ['Home', 'Videos', 'Shorts', "Live", 'Community', 'Playlist', "Posts", 'About'];

function ChannelProfile() {
    const [active, setActive] = useState("Home");
    const [isSelected, setIsSelected] = useState("Latest");

    useEffect(() => {
        // window.scrollTo(0, 0)
    }, [categories] );

    return (
        <div className="bg-[#0f0f0f] min-h-screen">
            <Topbar />
            <div className="w-full pt-20 flex flex-col">
                <div className="w-full h-fit lg:h-[350px] flex justify-end flex-col bg-[url(../../assets/banner.jpg)]">
                    <div className="rounded-3xl"></div>
                    <div className="flex md:w-[90%] lg:w-[90%] mx-auto border-t border-b-2 rounded-3xl flex-row pb-5 items-center justify-start gap-4 md:gap-4 lg:gap-8 bg-[#171616E6] px-10 md:px-10 lg:px-30 py-10">
                        <img className="rounded-full w-[100px] lg:w-[150px]" src="../../assets/pink-floyd-dp.jpg" alt="" />
                        <div className="flex flex-col gap-2 mx-auto items-start">
                            <div className="flex flex-row items-center justify-center ">
                                <h1 className="font-bold text-2xl lg:text-5xl text-pink-200">Pink Floyd</h1>
                                <div >
                                    <img src={`../../assets/icons8-verify-64.png`} className={`scale-50`}/>

                                </div>
                            </div>
                            <div className="flex flex-col md:flex-col lg:flex-row gap-2 md:gap-2 lg:gap-5 font-semibold justify-start text-sm">
                                <h1 className="font-bold">@channelUsername</h1>
                                <li className="text-[#1F9F9FFF]">4.5M Subscribers</li>
                                <li className="text-[#1F9F9FFF]">1.1K Videos</li>
                            </div>
                            <p className="max-w-full md:max-w-full lg:max-w-[65%] text-gray-300">
                                So let it go, let it go That's the way that it goes. <br/>First you're in then you're out,
                                everybody knows You're hot then you're cold, you're a light in the dark Just you
                                wait and you’ll see that you're swimming with sharks
                            </p>
                            <button className="px-5 hover:bg-[#F0F1EDFF] cursor-pointer py-2 bg-[#aa0000] hover:shawod-lg hover:shadow-red-800 font-semibold hover:text-black duration-500 tracking-wide hover:tracking-wider text-sm rounded-3xl">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`min-h-screen`}>
                    <div className="sticky top-16 z-50 bg-[#0f0f0f] transition-all duration-300 ease-in-out w-full sm:pl-10 lg:pl-35 overflow-x-scroll sm:overflow-visible border-b border-slate-600 gap-6 flex flex-row items-center justify-center lg:justify-start font-bold text-[#aaa]">
                        {categories.map((category, idx) => (
                            <div
                                key={idx}
                                className={`py-2 lg:px-2 sm:px-none hover:border-b-3 hover:border-[#ff0000] cursor-pointer ${
                                    active === category ? 'border-b-3 border-[#ff0000] text-[#ff0000] duration-300' : ''
                                }`}
                                onClick={() => {
                                    window.scrollTo({behavior: 'smooth', top: 370});
                                    setActive(category);
                                }}
                            >
                                {category}
                            </div>
                        ))}
                        <img
                            src="../../assets/icons8-search-100.png"
                            alt=""
                            className="h-8 hover:scale-110 cursor-pointer bg-slate-600 hover:bg-[#aa0000] duration-300 rounded-3xl p-2"
                        />
                    </div>
                    <div className="">
                        {active === "Home" && (
                            <>
                                <div className="w-full gap-4 pl-10 lg:pl-25 py-5 mx-auto flex flex-col">
                                    <div className="flex flex-row items-center gap-8">
                                        <h1 className="font-bold text-xl">Pink Floyd at Pompeii – MCMLXXII</h1>
                                        <div className="flex cursor-pointer items-center hover:bg-[#212121] px-2 rounded-3xl">
                                            <img className="h-4" src="../../assets/icons8-play-64.png" alt="" />
                                            <button className="px-3 py-2 cursor-pointer">Play all</button>
                                        </div>
                                    </div>
                                    <div className="flex-row w-[95%]">
                                        <SuggestedVideos flexDirection="row" />
                                    </div>
                                </div>
                                <div className="w-full gap-4 pl-10 lg:pl-25 py-5 mx-auto flex flex-col">
                                    <div className="flex flex-row items-center gap-8">
                                        <h1 className="font-bold text-xl">Europe Tour-2019 - HOTTEST TOUR EVER</h1>
                                        <div className="flex cursor-pointer items-center hover:bg-[#212121] px-2 rounded-3xl">
                                            <img className="h-4" src="../../assets/icons8-play-64.png" alt="" />
                                            <button className="px-3 py-2 cursor-pointer">Play all</button>
                                        </div>
                                    </div>
                                    <div className="flex-row w-[95%]">
                                        <SuggestedVideos flexDirection="row" />
                                    </div>
                                </div>
                                <div className="w-full gap-4 pl-10 lg:pl-25 py-5 mx-auto flex flex-col">
                                    <div className="flex flex-row items-center justify-start gap-8">
                                        <h1 className="font-bold text-xl">Pink Floyd at JAKARTA</h1>
                                        <div className="flex cursor-pointer items-center hover:bg-[#212121] px-2 rounded-3xl">
                                            <img className="h-4" src="../../assets/icons8-play-64.png" alt="" />
                                            <button className="px-3 py-2 cursor-pointer">Play all</button>
                                        </div>
                                    </div>
                                    <div className="flex-row w-[95%]">
                                        <SuggestedVideos flexDirection="row" />
                                    </div>
                                </div>
                            </>
                        )}

                        {active === "Videos" && (
                            <div  className="px-20">
                                <div className="flex list-none flex-row text-center font-semibold pt-5 mx-5 gap-5">
                                    <li onClick={()=>setIsSelected("Latest")} className={`${isSelected==="Latest"?" bg-white text-black hover:bg-white" : ""} bg-[#212121] hover:bg-[#494949FF] duration-300 cursor-pointer px-4 py-1 rounded`}>Latest</li>
                                    <li onClick={()=>setIsSelected("Popular")} className={`${isSelected==="Popular"?" bg-white text-black hover:bg-white" : ""} bg-[#212121] hover:bg-[#494949FF] duration-300 cursor-pointer px-4 py-1 rounded`}>Popular</li>
                                    <li onClick={()=>setIsSelected("Oldest")} className={`${isSelected==="Oldest"? "bg-white text-black hover:bg-white" : ""} bg-[#212121] hover:bg-[#494949FF] duration-300 cursor-pointer px-4 py-1 rounded`}>Oldest</li>
                                </div>
                                <div>
                                    <ListVideos />
                                </div>
                            </div>
                        )}

                        {active === "Shorts" && (
                            <div>
                                <ListShorts/>
                            </div>
                        )}

                        {active==="Posts" &&
                            <div>
                                <ListPosts/>
                            </div>
                        }

                        {active === "Community" &&
                            <div className={``}>
                                <ChannelCommunity/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChannelProfile;
