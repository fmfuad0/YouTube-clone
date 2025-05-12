import React from 'react';

const videos = [
    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },

    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_RLdn3ItQ9c5HbQOujy99Q.png",
        channelName: "CodeAcademy",
        views: "1.2M views",
        uploaded: "2 days ago",
        channelLogo: "../../assets/youtube.png",
    },
    {
        id: 2,
        title: "How to Build a MERN Stack App",
        thumbnail: "https://upviews.com/blog/wp-content/uploads/2022/06/Best-YouTube-Thumbnail-Maker-Sites-and-Apps-2048x1152.png",
        channelName: "DevSimplified",
        views: "850K views",
        uploaded: "1 week ago",
        channelLogo: "../../assets/world_4277307.png"
    },
    {
        id: 3,
        title: "JavaScript in 100 Seconds",
        thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325470685/original/f8786376f836db4f3e06bf3529c122cf77bf2d47/provide-you-with-eye-catchy-and-impressive-youtube-thumbnail.png",
        channelName: "Fireship",
        views: "2.1M views",
        uploaded: "3 weeks ago",
        channelLogo: "../../assets/video_1179120.png"
    },


    // Add more items as needed
];


function ListVideos(props) {
    return (
        <div className="grid rounded grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-[#0f0f0f] min-h-screen text-white overflow-hidden">
            {videos.map(video => (
                <div key={video.id} className="cursor-pointer">
                    <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden mb-2">
                        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover hover:scale-110 transition duration-100" />
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={video.channelLogo} className="w-10 h-10 rounded-full" alt="channel logo" />
                        <div>
                            <h3 className="font-semibold line-clamp-2">{video.title}</h3>
                            <p className="text-sm text-gray-400">{video.channelName}</p>
                            <p className="text-sm text-gray-500">{video.views} • {video.uploaded}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListVideos;