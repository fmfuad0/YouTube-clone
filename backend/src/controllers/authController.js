import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {uploadOnCloudinary} from "../utils/cloudinary.js";
dotenv.config();

export const signup = async (req, res) => {
    try {
        const { channelName, email, phone, password } = req.body;
        if(await User.findOne({email:email})) {
            return res.status(500).json({"message": "User already exists"});
        }
        const local = req.file?.path
        console.log(local)
        const result =await uploadOnCloudinary(local)
        console.log(result)
        if(!result){
            return res.status(500).json({"message": "Logo Upload failed"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ channelName, email, phone, password: hashedPassword, logo:result.url });
        await newUser.save();
        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        const user = await User.findOne({email:email})
        console.log(user)
        if (!user) return res.status(404).json({ error: 'User not found' });
        console.log(user._id);
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });
        console.log(isMatch)
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        user.password = null
        req.user = user;
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decode)
        res.cookie("token", token).json({ token, user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
