// models/Video.js
import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    user_id: String,
    title: String,
    description: String,
    video_url: String,
    thumbnail_url: String,
    category: String,
    tags: [String],
    likes: Number,
    dislikes: Number,
    views: String,
    likedBy: [String],
    dislikedBy: [String],
    viewedBy: [String],
    uploaded:String,
    channelInfo:{}
}, {timestamps: true});

export default mongoose.model('Video', videoSchema);
