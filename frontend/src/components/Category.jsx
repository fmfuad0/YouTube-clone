import React, {useEffect, useRef, useState} from 'react';

const categories = [
    "All", "Music", "Live", "Gaming", "News", "Sports", "Comedy", "Technology",
    "Movies", "Learning", "Fashion", "Travel", "Science", "Recently Uploaded",
    "Aircraft", "Navy", "Army", "Mega Projects"
];

function Category(props) {
    const [active, setActive] = useState("All");
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const onWheel = (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                el.scrollLeft += e.deltaY;
            }
        };

        el.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            el.removeEventListener('wheel', onWheel);
        };
    }, []);


    return (
        <div
            ref={scrollRef}
            className="fixed top-[52px] left-0 w-full flex overflow-x-auto px-4 py-2 bg-[#0f0f0f] text-white z-40 space-x-2 no-scrollbar "
        >
            {categories.map((category, idx) => (
                <button
                    key={idx}
                    onClick={() => setActive(category)}
                    className={`px-4 py-2        rounded-lg text-xs font-semibold whitespace-nowrap tracking-wide transition-colors duration-200 cursor-pointer
                            ${active === category ? "bg-white text-black" : "bg-[#272727] hover:bg-[#3c3c3c]"}`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default Category;