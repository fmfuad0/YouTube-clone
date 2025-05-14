import React, {useEffect, useState} from 'react';
import {useAppContext} from "../contexts/Context.jsx";

const CommentBox = (props) => {
    const {server} = useAppContext()
    const [visible, setVisible] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await fetch(`${server}/video`)
            const data = await res.json()
            console.log(data)
            setVideos(data)
        }
        getVideos()
    }, []);

    return (
        <>
            <div className="flex flex-row w-full items-start gap-3 mt-6">
                <img className="w-10 h-10 rounded-full" src="../../assets/world_4277307.png" alt="User avatar" />
                <div className="flex flex-col w-full gap-3">
                    <textarea
                        className="border-b border-gray-600 border-dashed w-full h-10 bg-transparent text-white placeholder-gray-400 resize-none focus:outline-none"
                        placeholder="Add a comment"
                        onFocus={() => setVisible(true)}
                        onChange={(e) => {
                            setCommentText(e.target.value);
                            props.onChange?.(e);
                        }}
                        value={commentText}
                    />
                    <div className={`${visible ? "flex" : "hidden"} justify-end`}>
                        <button
                            className="bg-[#3ea6ff] px-4 py-2 rounded-3xl cursor-pointer text-black font-semibold disabled:opacity-50"
                            disabled={commentText.trim() === ""}
                        >
                            Comment
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                {videos.length}
                {videos.map(() => (
                    <div className={`flex flex-row w-full gap-3 p-3 pl-0 justify-end`}>
                        <img src={""} alt="avatar" className={`h-10 w-10 border rounded-full`} />
                        <div className="flex flex-col gap-3 w-full">
                            <div className={`flex flex-row gap-2`}>
                                <h2 className={`text-sm font-semibold`}>@Username</h2>
                                <p className={`text-sm`}>• 1 year ago</p>
                            </div>
                            <p className={`text-sm`}>{"What is this main thing"} </p>

                            <div className={`flex flex-row rounded-3xl max-w-screen`}>
                                <div className={`flex flex-row items-center rounded-l-3xl py-2 gap-1`}>
                                    <img src={"../../assets/icons8-like-96.png"} alt="" className={`w-9 h-9 p-2  hover:bg-[#6B6767D1] rounded-full cursor-pointer`} />
                                    <p className={`text-sm font-bold`}>2.9K</p>
                                </div>
                                <div className={`flex flex-row items-center`}>
                                    <hr className={`w-4 rotate-90`} />
                                </div>
                                <div className={`flex flex-row items-center rounded-r-3xl py-2 gap-1`}>
                                    <p className={`text-sm font-bold`}>2.9K</p>
                                    <img src={"../../assets/icons8-like-96.png"} alt="" className={`w-9 h-9 p-2 rotate-180 hover:bg-[#6B6767D1] rounded-full cursor-pointer`} />
                                </div>
                                <button
                                    className="px-3 py-1 rounded-3xl cursor-pointer text-white text-xs hover:bg-[#6B6767D1] font-semibold"
                                    disabled={commentText.trim() === ""}
                                >
                                    Reply
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex flex-row">
                          <span className="ml-auto">
                            <img
                                alt="three dot"
                                className="max-h-6 cursor-pointer"
                                src="../../assets/icons8-three-dots-48.png"
                            />
                          </span>
                        </div>

                    </div>
                ))}
            </div>

        </>
    );
};

export default CommentBox;
