import React, { useState } from 'react';
import "../css/CommunityPage.css";
import ListComments from "./ListComments.jsx";

const initialPosts = [
    {
        id: 1,
        content: "Exciting updates coming soon! Stay tuned. 🔔",
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        uploaded: "2 hours ago",
        likes: 120,
        comments: 15
    },
    {
        id: 2,
        content: "Behind the scenes of our latest video. What do you think? 🎬",
        thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg",
        uploaded: "1 day ago",
        likes: 230,
        comments: 42
    },
    {
        id: 3,
        content: "Exciting updates coming soon! Stay tuned. 🔔",
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        uploaded: "2 hours ago",
        likes: 120,
        comments: 15
    },
    {
        id: 4,
        content: "Behind the scenes of our latest video. What do you think? 🎬",
        thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg",
        uploaded: "1 day ago",
        likes: 230,
        comments: 42
    },
    {
        id: 5,
        content: "Exciting updates coming soon! Stay tuned. 🔔",
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        uploaded: "2 hours ago",
        likes: 120,
        comments: 15
    },
    {
        id: 6,
        content: "Behind the scenes of our latest video. What do you think? 🎬",
        thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg",
        uploaded: "1 day ago",
        likes: 230,
        comments: 42
    },
    {
        id: 7,
        content: "Exciting updates coming soon! Stay tuned. 🔔",
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        uploaded: "2 hours ago",
        likes: 120,
        comments: 15
    },
    {
        id: 8,
        content: "Behind the scenes of our latest video. What do you think? 🎬",
        thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg",
        uploaded: "1 day ago",
        likes: 230,
        comments: 42
    },
    {
        id: 9,
        content: "Exciting updates coming soon! Stay tuned. 🔔",
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
        uploaded: "2 hours ago",
        likes: 120,
        comments: 15
    },
    {
        id: 100,
        content: "Behind the scenes of our latest video. What do you think? 🎬",
        thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg",
        uploaded: "1 day ago",
        likes: 230,
        comments: 42
    }
];

const CommunityPost = ({ post, handleComment }) => {
    const [likes, setLikes] = useState(post.likes);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    };

    return (
        <div className="flex gap-5 bg-[#1e1e1e] p-4 rounded-xl mb-6 transition-colors duration-300 hover:bg-[#292929]">
            <div className="flex-1 flex flex-col justify-between cursor-pointer" onClick={() => handleComment(post.id)}>
                <p className="text-base leading-relaxed mb-2">{post.content}</p>
                <span className="text-sm text-gray-400 mb-2">{post.uploaded}</span>
                <div className="flex gap-4 mt-auto">
                    <button
                        onClick={handleLike}
                        className={`text-sm transition-colors ${liked ? 'text-cyan-400 font-bold' : 'text-gray-400 hover:text-white'}`}
                    >
                        👍 {likes}
                    </button>
                    <button
                        onClick={() => handleComment(post.id)}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                        💬 {post.comments}
                    </button>
                </div>
            </div>
            <img
                src={post.thumbnail}
                alt="Post Thumbnail"
                className="w-40 h-[90px] object-cover rounded-lg"
            />
        </div>
    );
};

const CommunityPage = () => {
    const [visible, setVisible] = useState(false);
    const [postId, setPostId] = useState("");

    const handleComment = (id) => {
        if (!visible) {
            setVisible(true);
            setPostId(id);
        } else if (id !== postId) {
            setPostId(id); // switch post
        } else {
            setVisible(false);
            setPostId("");
        }
    };

    return (
        <div className={`bg-[#121212] text-white pt-20 w-full flex-row flex ${visible ? "justify-start p-20 pb-10 " : "justify-center"} max-w-full mx-auto`}>
            <div className={`max-h-screen overflow-scroll w-[60%] no-scrollbar pr-10`}>
                <h2 className="text-3xl font-bold text-center border-b-2 border-gray-700 pb-2 mb-6">Community Announcements</h2>
                <div className=" h-full overflow-y-scroll">
                    {initialPosts.map((post) => (
                        <CommunityPost key={post.id} post={post} handleComment={handleComment} />
                    ))}
                </div>
            </div>
            <div className={`${visible ? "h-screen rounded-3xl overflow-y-scroll flex px-2 flex-col justify-start" : "hidden"} w-[40%] rounded-3xl h-screen flex-col flex items-center bg-neutral-800`}>
                <h2 className="text-3xl py-2  font-semibold mb-4 text-center">Comments</h2>
                <div className={`w-full scrollbar-left px-15 rounded-3xl overflow-y-scroll flex flex-col justify-start`}>
                    <ListComments />
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;