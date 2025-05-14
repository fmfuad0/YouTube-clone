import React, {useState} from 'react';

const description =`
"Get ready to witness the power of [Product Name]! This demo video showcases how our revolutionary software will transform the way you [specific task or benefit]. We'll guide you through the key features, including [feature 1], [feature 2], and [feature 3], demonstrating how they can help you achieve [specific outcome].
Key Benefits:

    Increased Efficiency:
    [Product Name] streamlines your workflow, saving you valuable time and effort.
    Enhanced Productivity:
    Our intuitive interface and powerful tools will boost your productivity by [specific percentage or quantifiable result].
    Improved Results:
    Witness the tangible results you can achieve with [Product Name], including [specific quantifiable results].

See how [Product Name] can revolutionize your work:

    [Link to video: Click here to watch the full demo]
    [Link to website: Learn more and get a free trial]
`


function VideoDescription(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`w-full cursor-pointer  bg-[#272727] rounded-lg flex flex-col pt-1 p-4 ${isOpen? "h-fit" : "h-[100px]"} overflow-hidden`} onClick={() => setIsOpen(isOpen^true)} >
            <p className={`text-sm font-semibold`}>{description}</p>
            <div>
                {isOpen?<p className={`text-sm font-semibold mt-10`}>SHOW LESS</p>:""}
            </div>
        </div>
    );
}

export default VideoDescription;
