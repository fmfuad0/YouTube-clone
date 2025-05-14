// src/App.jsx
import "./App.css"
import React, {useContext} from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import SignUp from "./pages/SignUp.jsx";
import {useAppContext} from "./contexts/Context.jsx";
import Login from "./pages/Login.jsx";
import Feed from "./pages/Feed.jsx";
import VideoPlayer from "./pages/VideoPlayer.jsx";


const App = () => {
    const {isLoggedIn } = useAppContext();
    return (
        <Routes>
            {/*<Route path="/" element={isLoggedIn? <Feed/> : <Login/>}/>*/}
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/" element={<VideoPlayer/>}/>
            {/*<Route path="/video/:id" element={<VideoDetail />} />*/}
            {/*<Route path="/login" element={<Login />} />*/}
            {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
    );
};

export default App;
