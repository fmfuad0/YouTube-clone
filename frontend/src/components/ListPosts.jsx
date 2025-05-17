import React, {useState} from 'react';
const posts = [
    {
        thumbnail_url: "https://images.pexels.com/photos/1129371/pexels-photo-1129371.jpeg",
        content: "Exploring the serene landscapes of the countryside, where nature's beauty unfolds in every direction. A perfect escape from the hustle and bustle of city life.",
        uploaded: "2 hours ago"
    },
    {
        thumbnail_url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        content: "Capturing the vibrant energy of urban life, this snapshot showcases the dynamic interplay between architecture and the daily rhythm of the city.",
        uploaded: "5 hours ago"
    },
    {
        thumbnail_url: "https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg",
        content: "A moment of tranquility by the lakeside, where the gentle ripples of water mirror the calmness of the surrounding environment.",
        uploaded: "1 day ago"
    },
    {
        thumbnail_url: "https://images.pexels.com/photos/1640780/pexels-photo-1640780.jpeg",
        content: "The golden hues of sunset cast a warm glow over the landscape, creating a picturesque scene that evokes a sense of peace and reflection.",
        uploaded: "2 days ago"
    },
    {
        thumbnail_url: "https://images.pexels.com/photos/1640779/pexels-photo-1640779.jpeg",
        content: "An adventurous journey through rugged terrains, where each step uncovers new vistas and the thrill of exploration.",
        uploaded: "3 days ago"
    },
    {
        thumbnail_url: "https://images.pexels.com/photos/1640780/pexels-photo-1640780.jpeg",
        content: "Delving into the heart of the forest, this image captures the lush greenery and the rich tapestry of flora that thrives within.",
        uploaded: "4 days ago"
    },
    {
        thumbnail_url: "https://images.pexels.com/photos/1640783/pexels-photo-1640783.jpeg",
        content: "A bustling marketplace scene, teeming with colors, sounds, and the vibrant energy of people engaging in daily commerce.",
        uploaded: "5 days ago"
    },
    {
        thumbnail_url: "https://images.pexels.com/photos/1640783/pexels-photo-1640783.jpeg",
        content: "The intricate details of historic architecture stand as a testament to the craftsmanship and cultural heritage of bygone eras.",
        uploaded: "1 week ago"
    },
    {
        thumbnail_url: "https://images.pexels.com/photos/1640783/pexels-photo-1640783.jpeg",
        content: "A serene coastal view where the meeting of land and sea creates a harmonious blend of natural elements.",
        uploaded: "2 weeks ago"
    },
    {
        thumbnail_url: "https://images.pexels.com/photos/1640784/pexels-photo-1640784.jpeg",
        content: "An aerial perspective reveals the sprawling expanse of the cityscape, highlighting the intricate network of streets and buildings.",
        uploaded: "3 weeks ago"
    }
];


function ListPosts(props) {
    const [isliked, setIsliked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    return (
        <div className={`flex flex-col justify-center px-30 gap-15 py-20 w-[70%]`}>
            {posts.map(post => (
                <div className={`flex flex-row gap-3 h-full p-5 rounded-2xl shadow-xs shadow-gray-200`}>
                    <div className={`p-1`}>
                        <img src={`../../assets/pink-floyd-dp.jpg`} className={`w-15 rounded-full`}/>
                    </div>
                    <div className={`flex flex-col gap-4`}>
                        <div className={`flex flex-row gap-3 text-sm font-semibold`}>
                            <h3>Pink Floyd</h3>
                            <li className={`text-gray-400 ml-3`}>{post.uploaded}</li>
                        </div>
                        <div>
                            <p className={`max-w-[70%]`}>{post.content}</p>

                        </div>
                        <div className={`flex flex-col`}>
                            <img src={post.thumbnail_url} alt="" className={`w-[620px] h-[620px] opacity-70 rounded-3xl `} />
                        </div>

                        <div className={`flex flex-row rounded-3xl max-w-screen items-center`}>
                            <div className={`flex flex-row items-center text-[#A49A9AFF] rounded-l-3xl py-2 gap-1`}>
                                <img src={`../../assets/icons8-like-96-${isliked?"fill":"normal"}.png`} alt="" className={`w-5 h-5  transition duration-300  rounded-full cursor-pointer ${isliked?" scale-150 bg-none hover:scale-180" : "hover:scale-120"} `} onClick={()=> {
                                    setIsliked(!isliked);setIsDisliked(false);
                                }}/>
                                <p className={`text-xs`}>2.9K</p>
                            </div>
                            <div className={`flex flex-row items-center`}>
                                <hr className={`w-4 rotate-90`} />
                            </div>
                            <div className={`flex flex-row items-center rounded-r-3xl py-2 gap-1`}>
                                <p className={`text-xs `}>2.9K</p>
                                <img src={`../../assets/icons8-like-96-${isDisliked?"fill":"normal"}.png`} alt="" className={`w-5 h-5 rotate-180 transition duration-300  ${isDisliked?"hover:scale-180  scale-150 " : "hover:scale-120"} rounded-full cursor-pointer`} onClick={()=> {
                                    setIsDisliked(!isDisliked);setIsliked(false);
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListPosts;