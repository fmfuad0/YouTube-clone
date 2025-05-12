// context.jsx
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const navigate = useNavigate();  // No need to wrap in Router
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const server = "https://youtube-clone-6iwf.onrender.com";

    return (
        <AppContext.Provider value={{ user, isLoggedIn, setUser, setIsLoggedIn, navigate, server }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
