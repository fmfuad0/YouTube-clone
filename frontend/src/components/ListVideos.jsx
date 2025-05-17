import React, {useEffect, useState} from 'react';
import {useAppContext} from "../contexts/Context.jsx";

export const videoThumbnails = [
    "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    "https://img.youtube.com/vi/60ItHLz5WEA/maxresdefault.jpg",
    "https://img.youtube.com/vi/fLexgOxsZu0/maxresdefault.jpg",
    "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
    "https://img.youtube.com/vi/L_jWHffIx5E/maxresdefault.jpg",
    "https://img.youtube.com/vi/OPf0YbXqDm0/maxresdefault.jpg",
    "https://img.youtube.com/vi/ktvTqknDobU/maxresdefault.jpg",
    "https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg",
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    "https://images.pexels.com/photos/1129371/pexels-photo-1129371.jpeg",
    "https://images.pexels.com/photos/1640780/pexels-photo-1640780.jpeg",
    "https://images.pexels.com/photos/1640784/pexels-photo-1640784.jpeg"
];

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
                <div key={video._id} className="cursor-pointer">
                    <div onClick={(e)=> {
                        e.preventDefault()
                        console.log(video._id)
                        navigate(`/watch/${video._id}`);
                    }} className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden mb-2">
                        <img src={videoThumbnails[Math.floor(Math.random() * videoThumbnails.length)]} alt={video.title} className="w-full h-full object-cover hover:scale-110 transition duration-100" />
                    </div>
                    <div  className="flex gap-2 items-center w-full">
                        <img  onClick={(e)=> {
                            e.preventDefault()
                            console.log(video._id)
                            navigate(`/channel/channelUsername`);
                        }} src={video.channelInfo.logo} className="w-10 h-10 rounded-full" alt="channel logo" />
                        <div  onClick={(e)=> {
                            e.preventDefault()
                            console.log(video._id)
                            navigate(`/watch/${video._id}`);
                        }} className="flex flex-col gap-1 w-full justify-around">
                            <h3 className="font-semibold line-clamp-2">{video.title}</h3>
                            <p className="text-sm font-semibold text-gray-400">{video.channelInfo.channelName}</p>
                            <p className="text-xs font-semibold text-gray-500">{video.views} Views • {video.uploaded}</p>
                        </div>
                        <div className="flex flex-row gap-2 justify-end">
                            <img src={'../../assets/icons8-three-dots-48.png'} className={`h-7`} alt={''}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListVideos;