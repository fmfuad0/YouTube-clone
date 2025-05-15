import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import "../css/Player.css"
import 'video.js/dist/video-js.css';

export const Player = ({ options, onReady }) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    // Initialize Video.js player once
    useEffect(() => {
        if (!videoRef.current) return;

        playerRef.current = videojs(videoRef.current, options, () => {
            if (onReady) onReady(playerRef.current);
        });

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, []);

    // Update player source when options.sources changes
    useEffect(() => {
        if (playerRef.current && options.sources) {
            playerRef.current.src(options.sources);
            // Optional: play automatically
            playerRef.current.play();
        }
    }, [options.sources]);

    return (
        <div data-vjs-player>
            <video
                ref={videoRef}
                className="video-js vjs-big-play-centered "
                playsInline
            />
        </div>
    );
};
