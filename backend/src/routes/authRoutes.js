import express from 'express';
import { signup, login } from '../controllers/authController.js';

const authRouter = express.Router();
authRouter.route("/").get((req, res) => {res.json("OK")})
authRouter.route('/signup').post(signup);
authRouter.route('/login').post(login);

export default authRouter;
