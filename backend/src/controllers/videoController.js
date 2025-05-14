import Video from '../models/Video.js';
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import User from "../models/User.js";
import mongoose from "mongoose";

export const uploadVideo = async (req, res) => {
    try {
        console.log(req.body)
        // const {title, description, video_url, thumbnail_url } = req.body;
        // const video= req.files.video?.[0].path;
        // const thumbnail= req.files.thumbnail?.[0].path;
        // const video_url = (await uploadOnCloudinary(video)).secure_url
        // const thumbnail_url = (await uploadOnCloudinary(thumbnail)).secure_url
        const {array} = req.body;
        const user = await User.findById(new mongoose.Types.ObjectId(req.user._id.toString())).select("-password");
        console.log("USER : ", user)
        const channelInfo = user
        for(const [key, value] of Object.entries(array)) {
            console.log(key, value);
            await Video.create(value);
        }
        // const newVideo = new Video({
        //     user_id: req.user._id,
        //     video_url,
        //     thumbnail_url,
        //     title,
        //     description,
        //     channelInfo,
        // });
        // await newVideo.save();
        const r = await Video.find()
        console.log(r)
        console.log(r.length)
        res.status(201).json(r);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateVideo = async (req, res) => {
    try {
        const updates = req.body;
        const updatedVideo = await Video.findByIdAndUpdate(req.params.id, updates, { new: true });
        res.json(updatedVideo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteVideo = async (req, res) => {
    try {
        await Video.findByIdAndDelete(req.params.id);
        res.json({ message: 'Video deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find();
        // console.log(videos)
        res.json(videos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getMyVideos = async (req, res) => {
    try {
        const videos = await Video.find({ user_id: req.user.id });
        res.json(videos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getVideoById = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        res.json(video);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getVideosByCategory = async (req, res) => {
    try {
        const videos = await Video.find({ category: req.params.category });
        res.json(videos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getVideosByTag = async (req, res) => {
    try {
        const videos = await Video.find({ tags: req.params.tag });
        res.json(videos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
