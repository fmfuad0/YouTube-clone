import React, {useEffect, useState} from 'react';
import {useAppContext} from "../contexts/Context.jsx";

const ListComments = (props) => {
    const {server} = useAppContext()
    const [visible, setVisible] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [isliked, setIsliked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const handleClick = async (e) => {
        e.preventDefault();
        const res = await fetch(`${server}/comment/create/${props.video_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({commentText})
        })
        const data = await res.json()
        console.log(data)
        if(data)
            window.alert("Comment successfully created")
        else
            window.alert("Comment not created")
        setCommentText("")
        setRefresh(!refresh);
    }

    useEffect(() => {
        const getComments = async () => {
            console.log(localStorage.getItem("token"));
            const res = await fetch(`${server}/comment/video/${props.video_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                }

            })
            const data = await res.json()
            console.log(data)
            console.log(data)
            setComments(data || [])
        }
        getComments()
    }, [refresh]);


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
                            disabled={commentText.trim() === ""} onClick={(e)=>handleClick(e)}>
                            Comment
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                {comments.length}
                {comments.map((comment) => (comment?.userInfo &&
                    <div key={comment._id} className={`flex flex-row w-full gap-5 p-3 pl-0 justify-end`}>
                        <img src={comment.userInfo.logo} alt="avatar" className={`h-10 w-10 border rounded-full`} />
                        <div className="flex flex-col gap-2 w-full">
                            <div className={`flex flex-row gap-2`}>
                                <h2 className={`text-sm font-semibold`}>{comment.userInfo.channelName}</h2>
                                <p className={`text-sm`}>• 1 year ago</p>
                            </div>
                            <p className={`text-sm`}>{comment.commentText} </p>
                            <div className={`flex flex-row rounded-3xl max-w-screen items-center`}>
                                <div className={`border-r-[#aaa] pr-5 border-r flex flex-row items-center text-[#A49A9AFF] rounded-l-3xl gap-2`}>
                                    <img src={`../../assets/icons8-like-96-${isliked?"fill":"normal"}.png`} alt="" className={`w-5 h-5 transition duration-300  rounded-full cursor-pointer ${isliked?" scale-150 bg-none hover:scale-180" : "hover:scale-120"} `} onClick={()=> {
                                        setIsliked(!isliked);setIsDisliked(false);
                                    }}/>
                                    <p className={`text-xs`}>2.9K</p>
                                </div>
                                <div className={`flex flex-row items-center px-1 rounded-r-3xl gap-1    `}>
                                    <p className={`text-xs `}>2.9K</p>
                                    <img src={`../../assets/icons8-like-96-${isDisliked?"fill":"normal"}.png`} alt="" className={`w-5 h-5 rotate-180 transition duration-300  ${isDisliked?"hover:scale-180  scale-150 " : "hover:scale-120"} rounded-full cursor-pointer`} onClick={()=> {
                                        setIsDisliked(!isDisliked);setIsliked(false);
                                    }}/>
                                </div>
                                <button
                                    className="px-5 py-1 font-semibold h-[35px] rounded-3xl cursor-pointer text-white text-xs hover:bg-[#262626FF]"
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

export default ListComments;
