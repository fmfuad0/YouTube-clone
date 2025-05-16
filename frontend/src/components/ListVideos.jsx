import React, {useEffect, useState} from 'react';
import {useAppContext} from "../contexts/Context.jsx";
// export const videos = [
//     {
//
//         user_id: "68211f780e83ec8e587fb1bb",
//         title: "React Tutorial for Beginners",
//         video_url: "https://res.cloudinary.com/dv2swlxhw/video/upload/v1747244889/kswby7vxrxe6x7sluh3o.mp4",
//         thumbnail_url: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
//         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum nibh vitae purus rutrum, nec congue justo placerat. Aliquam ac velit eget est semper imperdiet sit amet in eros. Curabitur ut enim vel ante faucibus convallis. Aliquam porta ligula ipsum, ut efficitur diam fringilla quis. Duis vel viverra nibh, in sollicitudin elit. In faucibus sit amet mauris quis interdum. Vivamus congue turpis id malesuada molestie. Sed turpis nisi, tincidunt ut luctus id, porta in ante. Vestibulum at felis porttitor, aliquet orci a, venenatis ex. Praesent ex elit, eleifend sit amet lorem ut, ultricies maximus sem. Quisque interdum vel nisl at aliquet. Nam rutrum cursus orci a tincidunt. Nunc varius interdum nulla, vitae malesuada enim dignissim id.Suspendisse pretium vehicula felis, quis volutpat massa accumsan ut. In efficitur consectetur suscipit. Integer nec velit metus. Nullam ut faucibus ante. Duis ut justo nibh. Fusce leo risus, tincidunt rhoncus suscipit et, euismod non. ",
//         views: 12,
//         uploaded: "2 days ago",
//     },
//     {
//         user_id: "68211f780e83ec8e587fb1bb",
//         title: "How to Build a MERN Stack App",
//         video_url: "https://res.cloudinary.com/dv2swlxhw/video/upload/v1747244889/kswby7vxrxe6x7sluh3o.mp4",
//         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum nibh vitae purus rutrum, nec congue justo placerat. Aliquam ac velit eget est semper imperdiet sit amet in eros. Curabitur ut enim vel ante faucibus convallis. Aliquam porta ligula ipsum, ut efficitur diam fringilla quis. Duis vel viverra nibh, in sollicitudin elit. In faucibus sit amet mauris quis interdum. Vivamus congue turpis id malesuada molestie. Sed turpis nisi, tincidunt ut luctus id, porta in ante. Vestibulum at felis porttitor, aliquet orci a, venenatis ex. Praesent ex elit, eleifend sit amet lorem ut, ultricies maximus sem. Quisque interdum vel nisl at aliquet. Nam rutrum cursus orci a tincidunt. Nunc varius interdum nulla, vitae malesuada enim dignissim id.Suspendisse pretium vehicula felis, quis volutpat massa accumsan ut. In efficitur consectetur suscipit. Integer nec velit metus. Nullam ut faucibus ante. Duis ut justo nibh. Fusce leo risus, tincidunt rhoncus suscipit et, euismod non. ",
//         thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
//         views: 85,
//         uploaded: "1 week ago",
//     },
//     {
//         user_id: "68211f780e83ec8e587fb1bb",
//         title: "JavaScript in 100 Seconds",
//         video_url: "https://res.cloudinary.com/dv2swlxhw/video/upload/v1747244889/kswby7vxrxe6x7sluh3o.mp4",
//         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum nibh vitae purus rutrum, nec congue justo placerat. Aliquam ac velit eget est semper imperdiet sit amet in eros. Curabitur ut enim vel ante faucibus convallis. Aliquam porta ligula ipsum, ut efficitur diam fringilla quis. Duis vel viverra nibh, in sollicitudin elit. In faucibus sit amet mauris quis interdum. Vivamus congue turpis id malesuada molestie. Sed turpis nisi, tincidunt ut luctus id, porta in ante. Vestibulum at felis porttitor, aliquet orci a, venenatis ex. Praesent ex elit, eleifend sit amet lorem ut, ultricies maximus sem. Quisque interdum vel nisl at aliquet. Nam rutrum cursus orci a tincidunt. Nunc varius interdum nulla, vitae malesuada enim dignissim id.Suspendisse pretium vehicula felis, quis volutpat massa accumsan ut. In efficitur consectetur suscipit. Integer nec velit metus. Nullam ut faucibus ante. Duis ut justo nibh. Fusce leo risus, tincidunt rhoncus suscipit et, euismod non. ",
//         thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
//         views: 21,
//         uploaded: "3 weeks ago",
//     }
//     // Add more items as needed
// ];


function ListVideos(props) {
    const {server, navigate} = useAppContext()
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await fetch(`${server}/video`)
            const data = await res.json()
            // console.log(data)
            setVideos(data)
        }
        getVideos()
    }, []);
    return (
        <div className="grid rounded grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-[#0f0f0f] min-h-screen text-white overflow-hidden">
            {videos.map(video => (
                <div key={video._id} className="cursor-pointer" onClick={(e)=> {
                    e.preventDefault()
                    console.log(video._id)
                    navigate(`/watch/${video._id}`);
                }}>
                    <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden mb-2">
                        <img src={video.thumbnail_url} alt={video.title} className="w-full h-full object-cover hover:scale-110 transition duration-100" />
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={video.channelInfo.logo} className="w-10 h-10 rounded-full" alt="channel logo" />
                        <div >
                            <h3 className="font-semibold line-clamp-1">{video.title}</h3>
                            <p className="text-sm font-semibold text-gray-400">{video.channelInfo.channelName}</p>
                            <p className="text-xs font-semibold text-gray-500">{video.views} Views • {video.uploaded}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListVideos;