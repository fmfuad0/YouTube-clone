import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '../css/Player.css'; // custom styles to override defaults

const Player = ({ options, onReady }) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        if (!playerRef.current) {
            const player = videojs(videoRef.current, {
                ...options,
                controlBar: {
                    volumePanel: { inline: false }, // vertical YouTube-style volume
                    pictureInPictureToggle: false, // hide if not needed
                }
            }, () => {
                onReady && onReady(player);
            });

            playerRef.current = player;
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, [options, onReady]);

    return (
        <div className="video-player-wrapper">
            <video
                ref={videoRef}
                className="video-js vjs-youtube-theme vjs-big-play-centered"
                playsInline
            />
        </div>
    );
};

export default Player;
