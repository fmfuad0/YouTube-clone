import React from 'react';
import ReactDOM from 'react-dom/client';  // Use 'react-dom/client' in React 18+
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import { AppProvider } from './contexts/context';  // Your AppProvider
import App from './App';  // Your main App component
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create the root
root.render(  // Use `render` on the created root
    <BrowserRouter>
        <AppProvider>
            <App />
        </AppProvider>
    </BrowserRouter>
);
