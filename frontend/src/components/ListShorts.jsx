import React, {useEffect, useState} from 'react';
import {useAppContext} from "../contexts/Context.jsx";

function ListShorts(props) {
    const {server, navigate} = useAppContext()
    const [shorts, setShorts] = useState([]);
    const thumbnails = [
        "../../assets/shorts-1.jpg",
        "../../assets/shorts-2.png",
        "../../assets/shorts-3.png",
        "../../assets/shorts-4.jpg",
        "../../assets/shorts-5.webp",
        "../../assets/shorts-6.png",
        "../../assets/shorts-7.png",
        "../../assets/shorts-8.jpg"
    ]

    useEffect(() => {
        const getVideos = async () => {
            const res = await fetch(`${server}/video`)
            const data = await res.json()
            // console.log(data)
            setShorts(data)
        }
        getVideos()
    }, []);
    return (
        <div className="grid rounded grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6 bg-[#0f0f0f] min-h-screen text-white overflow-hidden  sm:px-10 lg:px-20">
            {shorts.map(short => (
                <div key={short._id} className="cursor-pointer" onClick={(e)=> {
                    e.preventDefault()
                    console.log(short._id)
                    navigate(`/watch/${short._id}`);
                }}>
                    <div className="w-full h-80 bg-gray-700 rounded-lg overflow-hidden mb-2">
                        <img src={thumbnails[Math.floor(Math.random() * thumbnails.length)]} alt={"LOADING...."} className={"w-full h-full object-cover hover:scale-110 transition duration-100"} />
                    </div>
                    <div className="flex gap-2 items-center w-full">
                        <div className="flex flex-col gap-1 justify-around">
                            <h3 className="font-semibold line-clamp-3">{short.title}</h3>
                            <p className="text-xs font-semibold text-gray-500">{short.views} Views • {short.uploaded}</p>
                        </div>
                        <div className="flex flex-row gap-2 justify-end">
                            <img src={'../../assets/icons8-three-dots-48.png'} className={`h-7`}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListShorts;