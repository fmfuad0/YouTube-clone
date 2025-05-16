import React from 'react';
import TopBar from "../components/Topbar.jsx";
import ListVideos from "../components/ListVideos.jsx";
import Category from "../components/Category.jsx";

const Feed = () => {
    return (
        <>
                <TopBar/>
            <div className="pt-16">
                <Category/>
            </div>
            <div>
                <ListVideos/>
            </div>
            {/*<Category/>*/}

        </>
    );
};

export default Feed;
