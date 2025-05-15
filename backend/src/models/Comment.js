// models/Comment.js
import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    video_id: String,
    commentText: String,
    userInfo: {},
}, {timestamps: true});

export default mongoose.model('Comment', commentSchema);
