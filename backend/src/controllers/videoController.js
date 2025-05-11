import Video from '../models/Video.js';

export const uploadVideo = async (req, res) => {
    try {
        const { video_url, thumbnail_url, category, tags } = req.body;
        const newVideo = new Video({
            user_id: req.user.id,
            video_url,
            thumbnail_url,
            category,
            tags,
        });
        await newVideo.save();
        res.status(201).json(newVideo);
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
