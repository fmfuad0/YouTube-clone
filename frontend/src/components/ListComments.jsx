import React, { useState } from 'react';

const CommentBox = (props) => {
    const [visible, setVisible] = useState(false);
    const [commentText, setCommentText] = useState("");

    return (
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
    );
};

export default CommentBox;
