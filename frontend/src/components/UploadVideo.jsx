import React, { useState } from 'react';
import {useAppContext} from "../contexts/Context.jsx";

function UploadVideo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState(undefined);
    const [thumbnail, setThumbnail] = useState(undefined);
    const {server} = useAppContext
    const handleSubmit =async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('video', video);
        formData.append('thumbnail', thumbnail);
        const res = await fetch(`${server}/video/upload`, {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        if(res.ok){
            window.alert("Video uploaded")
        }else{
            window.alert("Video not uploaded")
        }
    };

    return (
        <div className="flex items-center justify-center px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl p-20 bg-gray-900 rounded-lg shadow-lg flex flex-col items-center gap-5"
            >
                <h1 className="font-extrabold text-white text-2xl tracking-widest">UPLOAD VIDEO</h1>

                <input
                    type="text"
                    placeholder="TITLE"
                    className="w-full p-2 bg-white text-black placeholder:text-gray-700 placeholder:font-semibold rounded"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="DESCRIPTION"
                    className="w-full p-2 bg-white text-black placeholder:text-gray-700 placeholder:font-semibold rounded"
                    onChange={(e) => setDescription(e.target.value)}
                />

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                    <label className="text-white font-semibold w-32">Video:</label>
                    <input
                        type="file"
                        accept="video/*"
                        className="flex-1 file:bg-gray-800 file:text-white file:px-4 file:py-1 file:rounded file:border-0 file:cursor-pointer text-md text-gray-300 hover:bg-gray-700 transition duration-200 hover:cursor-pointer"
                        onChange={(e) => setVideo(e.target.files[0])}
                    />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                    <label className="text-white font-semibold w-32">Thumbnail:</label>
                    <input
                        type="file"
                        accept="image/*"
                        className="flex-1 file:bg-gray-800 file:text-white file:px-4 file:py-1 file:rounded file:border-0 file:cursor-pointer text-md text-gray-300 hover:bg-gray-700 transition duration-200 hover:cursor-pointer"
                        onChange={(e) => setThumbnail(e.target.files[0])}
                    />
                </div>

                {thumbnail && (
                    <img
                        src={URL.createObjectURL(thumbnail)}
                        alt="Thumbnail Preview"
                        className="w-24 h-24 object-cover rounded mt-2"
                    />
                )}

                <button
                    type="submit"
                    className="w-full text-white bg-red-700 hover:bg-green-800 active:bg-green-700 font-semibold tracking-[8px] rounded px-5 py-2.5 hover:cursor-pointer"
                >
                    UPLOAD
                </button>
            </form>
        </div>
    );
}

export default UploadVideo;
