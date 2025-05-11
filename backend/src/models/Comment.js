// models/Comment.js
import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    video_id: String,
    commentText: String,
    user_id: String,
}, {timestamps: true});

export default mongoose.model('Comment', commentSchema);
