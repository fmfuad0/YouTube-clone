import Comment from '../models/Comment.js';

export const addComment = async (req, res) => {
    try {
        const {video_id} = req.params;
        const {commentText } = req.body;
        const newComment = new Comment({
            video_id,
            commentText,
            user_id: req.user.id,
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
        const comments = await Comment.find({video_id: req.params.videoId });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
