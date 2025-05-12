import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import commentRouter from "./routes/commentRoutes.js";
import videoRouter from "./routes/videoRoutes.js";

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // frontend origins allowed
    credentials: true
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true })); // Add extended: true here
app.use(express.static("public"));
app.use(cookieParser());

app.use("/", authRouter);
app.use("/user", userRouter);
app.use("/comment", commentRouter)
app.use("/video", videoRouter);

export { app };