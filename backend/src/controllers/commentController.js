import Comment from '../models/Comment.js';
import User from "../models/User.js";
import mongoose from "mongoose";


export const addComment = async (req, res) => {
    try {
        const {video_id} = req.params;
        const {commentText } = req.body;
        const userInfo = await User.findById(new mongoose.Types.ObjectId(req.user._id)).select("channelName logo")
        const newComment = new Comment({
            video_id,
            commentText,
            userInfo
        });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const editComment = async (req, res) => {
    try {
        const updates = req.body;
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, updates, { new: true });
        res.json(updatedComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteComment = async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCommentsByVideo = async (req, res) => {
    try {
        const comments = await Comment.find({video_id: req.params.videoId }).sort({ date: -1 });
        console.log(comments);
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
