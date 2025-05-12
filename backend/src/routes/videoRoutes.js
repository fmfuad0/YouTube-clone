import express from 'express';
import {
    uploadVideo,
    updateVideo,
    deleteVideo,
    getAllVideos,
    getMyVideos,
    getVideoById,
    getVideosByCategory,
    getVideosByTag,
} from '../controllers/videoController.js';
import {authMiddleware} from '../middlewares/authMiddleware.js';
import {upload} from "../middlewares/multerMiddleware.js";

const videoRouter = express.Router();


// videoRouter.route('/').get((req, res) => {res.json("Video")});
videoRouter
    .route('/upload')
    .post(
        authMiddleware,
        upload.fields([
            { name: 'video'},
            { name: 'thumbnail'}
        ]),
        uploadVideo
    );

videoRouter.route('/update/:id').put(authMiddleware, updateVideo);
videoRouter.route('/delete/:id').delete(authMiddleware, deleteVideo);
videoRouter.route('/').get(getAllVideos);
videoRouter.route('/my-videos').get(authMiddleware, getMyVideos);
videoRouter.route('/:id').get(getVideoById);
videoRouter.route('/category/:category').get(getVideosByCategory);
videoRouter.route('/tags/:tag').get(getVideosByTag);

export default videoRouter;
