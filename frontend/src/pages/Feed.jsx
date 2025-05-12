import React from 'react';
import TopBar from "../components/Topbar.jsx";
import ListVideos from "../components/ListVideos.jsx";

const Feed = () => {
    return (
        <>
            <TopBar/>
            <div className={`pt-25`}>
                <ListVideos/>
            </div>
            {/*<Category/>*/}

        </>
    );
};

export default Feed;
