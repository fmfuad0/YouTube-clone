// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    channelName: String,
    email: String,
    phone: String,
    password: String,
    logo: String,
    subscribers: [String],
    subscribedChannels: [String],
}, {timestamps: true});

const User = new mongoose.model('User', userSchema);
export default User;
