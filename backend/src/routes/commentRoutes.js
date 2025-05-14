import express from 'express';
import {
    addComment,
    editComment,
    deleteComment,
    getCommentsByVideo,
} from '../controllers/commentController.js';
import {authMiddleware} from '../middlewares/authMiddleware.js';

const commentRouter = express.Router();

commentRouter.route('/').get((req, res) => res.json('comment'));
commentRouter.route('/create/:video_id').post(authMiddleware, addComment);
commentRouter.route('/edit/:id').put(authMiddleware, editComment);
commentRouter.route('/delete/:id').delete(authMiddleware, deleteComment);
commentRouter.route('/video/:videoId').get(authMiddleware, getCommentsByVideo);

export default commentRouter;
