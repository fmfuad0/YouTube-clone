import React, { useState } from 'react';

const PostCard = ({ post }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="border border-gray-700 rounded-xl p-4 bg-[#1a1a1a]">
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">{post.uploaded}</p>
                <p className="text-sm text-gray-400">{post.likes + (liked ? 1 : 0)} likes</p>
            </div>

            <p className="mt-2 mb-3">{post.content}</p>

            {post.thumbnail_url && (
                <img
                    src={post.thumbnail_url}
                    alt="Thumbnail"
                    className="w-full rounded-md mb-3"
                />
            )}

            {post.poll && (
                <div className="mb-3">
                    {post.poll.map((option, index) => (
                        <button
                            key={index}
                            className="block w-full text-left border border-gray-600 rounded-md p-2 my-1 hover:bg-gray-700"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}

            <div className="flex gap-4 text-sm text-gray-400">
                <button onClick={() => setLiked(!liked)}>
                    {liked ? '💖 Liked' : '🤍 Like'}
                </button>
                <button>💬 {post.comments} Comments</button>
            </div>
        </div>
    );
};

export default PostCard;
