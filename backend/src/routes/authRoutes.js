import express from 'express';
import { signup, login } from '../controllers/authController.js';
import {upload} from "../middlewares/multerMiddleware.js";

const authRouter = express.Router();
authRouter.route("/").get((req, res) => {res.json("OK")})
authRouter.route('/signup').post(upload.single("logo"), signup);
authRouter.route('/login').post(login);

export default authRouter;
