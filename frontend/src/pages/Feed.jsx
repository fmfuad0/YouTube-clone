import React, {useEffect} from 'react';
import TopBar from "../components/Topbar.jsx";
import ListVideos from "../components/ListVideos.jsx";
import Category from "../components/Category.jsx";

const Feed = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
                <TopBar/>
            <div className="pt-16">
                <Category/>
            </div>
            <div className={`pt-10`}>
                <ListVideos/>
            </div>
            {/*<Category/>*/}

        </>
    );
};

export default Feed;
