import express from 'express';
import { updateProfile, subscribe } from '../controllers/userController.js';
import {authMiddleware} from "../middlewares/authMiddleware.js"

const userRouter = express.Router();

userRouter.route('/update').put(authMiddleware, updateProfile);
userRouter.route('/subscribe').post( authMiddleware, subscribe);

export default userRouter;
