// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                {/*<Route path="/video/:id" element={<VideoDetail />} />*/}
                {/*<Route path="/login" element={<Login />} />*/}
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
        </Router>
    );
};

export default App;
