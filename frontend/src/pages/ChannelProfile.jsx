import React, { useEffect, useRef, useState } from 'react';
import Topbar from "../components/Topbar.jsx";
import SuggestedVideos from "../components/SuggestedVideos.jsx";
import ListVideos from "../components/ListVideos.jsx";

const categories = ['HOME', 'VIDEOS', 'SHORTS', 'COMMUNITY', 'PLALISTS', 'ABOUT'];

function ChannelProfile() {
    const [active, setActive] = useState("HOME");
    const scrollRef1 = useRef(null);
    const scrollRef2 = useRef(null);
    const scrollRef3 = useRef(null);
    const targetRef = useRef(null);

    useEffect(() => {
        const el = scrollRef1.current;
        if (!el) return;

        const onWheel = (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                el.scrollLeft += e.deltaY;
            }
        };

        el.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            el.removeEventListener('wheel', onWheel);
        };
    }, [scrollRef1]);
    useEffect(() => {
        const el = scrollRef2.current;
        if (!el) return;

        const onWheel = (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                el.scrollLeft += e.deltaY;
            }
        };

        el.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            el.removeEventListener('wheel', onWheel);
        };
    }, [scrollRef3]);
    useEffect(() => {
        const el = scrollRef3.current;
        if (!el) return;

        const onWheel = (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                el.scrollLeft += e.deltaY;
            }
        };

        el.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            el.removeEventListener('wheel', onWheel);
        };
    }, [scrollRef2]);

    return (
        <div className="bg-[#0f0f0f] min-h-screen">
            <Topbar />
            <div className="w-full pt-16 pb-30 flex flex-col">
                <div className="w-full h-[350px] flex justify-end flex-col bg-[url(../../assets/banner.jpg)]">
                    <div className="rounded-3xl"></div>
                    <div className="flex w-[83%] mx-auto border-t border-b-2 rounded-3xl flex-row pb-5 items-center justify-start gap-8 bg-[#171616E6] px-30">
                        <img className="rounded-full w-[150px]" src="../../assets/6401074.jpg" alt="" />
                        <div className="flex flex-col gap-1 mx-auto items-start">
                            <div className="flex flex-col justify-center gap-8">
                                <h1 className="font-bold text-4xl">Pink Floyd</h1>
                            </div>
                            <div className="flex flex-row gap-5 font-semibold justify-start text-sm">
                                <h1 className="font-bold">@channelUsername</h1>
                                <li className="text-[#1F9F9FFF]">4.5M Subscribers</li>
                                <li className="text-[#1F9F9FFF]">1.1K Videos</li>
                            </div>
                            <p className="max-w-[60%] font-semibold text-gray-400">
                                So let it go, let it go That's the way that it goes First you're in then you're out,
                                everybody knows You're hot then you're cold, you're a light in the dark Just you
                                wait and you’ll see that you're swimming with sharks
                            </p>
                            <button className="w-35 px-5 py-2 bg-[#F0F1EDFF] font-semibold text-sm text-black rounded-3xl">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    ref={targetRef}
                    className={`
        sticky top-16 z-50 bg-[#0f0f0f]
        transition-all duration-300 ease-in-out
        lg:w-[100%] no-scrollbar lg:pl-35 mx-auto border-b border-slate-600 gap-8
        flex sm:w-[60%] xs:w-[60%] sm:overflow-scroll lg:flex-row items-center justify-start
        text-sm font-bold text-[#aaa]
    `}
                >

                {categories.map((category, idx) => (
                        <div
                            key={idx}
                            className={`py-4 hover:border-b-3 hover:border-[#aaa] cursor-pointer ${
                                active === category ? 'border-b-3 border-white' : ''
                            }`}
                            onClick={() => setActive(category)}
                        >
                            {category}
                        </div>
                    ))}
                    <img
                        src="../../assets/icons8-search-100.png"
                        alt=""
                        className="h-8 hover:scale-110 cursor-pointer bg-slate-600 rounded-3xl p-2"
                    />
                </div>
                {active === "HOME" && (
                    <>
                        <div className="w-full gap-4 lg:pl-25 py-5 mx-auto flex flex-col">
                            <div className="flex flex-row items-center gap-8">
                                <h1 className="font-bold text-xl">Pink Floyd at Pompeii – MCMLXXII</h1>
                                <div className="flex cursor-pointer items-center hover:bg-[#212121] px-2 rounded-3xl">
                                    <img className="h-4" src="../../assets/icons8-play-64.png" alt="" />
                                    <button className="px-3 py-2 cursor-pointer">Play all</button>
                                </div>
                            </div>
                            <div className="flex-row w-[95%]">
                                <SuggestedVideos ref={scrollRef1} flexDirection="row" />
                            </div>
                        </div>
                        <div className="w-full gap-4 lg:pl-25 py-5 mx-auto flex flex-col">
                            <div className="flex flex-row items-center gap-8">
                                <h1 className="font-bold text-xl">Europe Tour-2019 - HOTTEST TOUR EVER</h1>
                                <div className="flex cursor-pointer items-center hover:bg-[#212121] px-2 rounded-3xl">
                                    <img className="h-4" src="../../assets/icons8-play-64.png" alt="" />
                                    <button className="px-3 py-2 cursor-pointer">Play all</button>
                                </div>
                            </div>
                            <div className="flex-row w-[95%]">
                                <SuggestedVideos ref={scrollRef2} flexDirection="row" />
                            </div>
                        </div>
                        <div className="w-full gap-4 lg:pl-25 py-5 mx-auto flex flex-col">
                            <div className="flex flex-row items-center justify-start gap-8">
                                <h1 className="font-bold text-xl">Pink Floyd at JAKARTA </h1>
                                <div className="flex cursor-pointer items-center hover:bg-[#212121] px-2 rounded-3xl">
                                    <img className="h-4" src="../../assets/icons8-play-64.png" alt="" />
                                    <button className="px-3 py-2 cursor-pointer">Play all</button>
                                </div>
                            </div>
                            <div className="flex-row w-[95%]">
                                <SuggestedVideos ref={scrollRef3} flexDirection="row" />
                            </div>
                        </div>
                    </>
                )}

                {active === "VIDEOS" && (
                    <div>
                        <div className="text-center text-2xl font-bold pt-5">CHANNEL VIDEOS</div>
                        <div className="px-20">
                            <ListVideos />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChannelProfile;
