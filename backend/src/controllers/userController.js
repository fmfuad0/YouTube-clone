import User from '../models/User.js';

export const updateProfile = async (req, res) => {
    try {
        const updates = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.user.id, updates, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const subscribe = async (req, res) => {
    try {
        const { channelId } = req.body;
        const user = await User.findById(req.user.id);
        if (!user.subscribedChannels.includes(channelId)) {
            user.subscribedChannels.push(channelId);
            await user.save();
        }
        const channel = await User.findById(channelId);
        if (!channel.subscribers.includes(req.user.id)) {
            channel.subscribers.push(req.user.id);
            await channel.save();
        }
        res.json({ message: 'Subscribed successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
