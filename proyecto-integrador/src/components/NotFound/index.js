import React from "react";
import './styles.css'

function NotFound() {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404 - Not Found :(</h1>
            <p className="not-found-subtitle">Oops! The page you're looking for doesn't exist.</p>
            <a 
                href="/" 
                className="not-found-button">
                Go Back to Home
            </a>
        </div>
    );
}

export default NotFound;
