import React, {useState} from 'react';

const description =`
Listen to 'Eyes Closed' out now: https://ImagineDragons.lnk.to/EyesClosed
Watch the official video for ‘Eyes Closed here: https://ImagineDragons.lnk.to/EyesClo...

Listen to “Sharks” : https://ImagineDragons.lnk.to/Sharks 
“Mercury Acts 1 & 2” is out now: https://ImagineDragons.lnk.to/Mercury

Shop Imagine Dragons: https://ImagineDragons.lnk.to/Merch 
Sign up for email updates: https://ImagineDragons.lnk.to/EmailList
Catch Imagine Dragons on tour: http://ImagineDragonsmusic.com/Tour
Join the Imagine Dragons Discord: https://ImagineDragons.lnk.to/Discord

Follow Imagine Dragons:
Facebook: https://ImagineDragons.lnk.to/Facebook
Twitter: https://ImagineDragons.lnk.to/Twitter
Instagram: https://ImagineDragons.lnk.to/Instagram
YouTube: https://ImagineDragons.lnk.to/YouTube
TikTok: https://ImagineDragons.lnk.to/TikTok
 
Starring: Dan Reynolds, Wayne Serman, Ben McKee and Daniel Platzman
Directed by Drew Kirsch
Director Of Photography: Michael Gioulakis
Editor: Sebastian Zotoff
Colorist: Sean Coleman
Costumer Designer: Mercedes Natalia
Production Designer: Joshua Brokaw
Executive Producers: Tara Razavi, Santina Guiliano, and Mac Reynolds
Producers: Stephan Bielecki and Jared Shelton
Record Label: Interscope Records / KIDinaKORNER
Production Company: Happy Place
Special thanks to Stacy Hamilton, MGM Resorts International, Allegiant Stadium, and the entire Cast and Crew of Cirque Du Soleil’s “O”.
 
“Sharks” Lyrics: 
 
Trouble
Blood is in the rocky waters
Hide away your sons and daughters
Eat you alive
 
Levels better put your head on swivels
Dancing with the very devil
Butter to knife
 
You think you're better than them, better than them
You think they're really your friends, really your friends
But when it comes to the end, to the end
You're just the same as them, same as them
 
So let it go, let it go 
That's the way that it goes
First you're in then you're out, everybody knows
You're hot then you're cold, you're a light in the dark
Just you wait and you’ll see that you're swimming with sharks
 
He's coming to get you, he's coming to get you, get you
 
Bubbles, drowning you're seeing doubles
Don't you let them see your struggles hiding your tears
Crisis, take advantage of your niceness
Cut you up in even slices
Prey on your fears
 
You think you're better than them, better than them
You think they're really your friends, really your friends
But when it comes to the end, to the end
You're just the same as them, same as them
 
So let it go, let it go 
That's the way that it goes
First you're in then you're out, everybody knows
You're hot then you're cold, you're a light in the dark
Just you wait and you’ll see that you're swimming with sharks
 
My blood is pumping, coming to get you, don't take it from me
My blood is pumping, coming to get you, don't take it from me
My blood is pumping, coming to get you, don't take it from me
My blood is pumping, coming to get you, don't take it from me
 
Every time my heart is beating I can feel the recipe
I wonder if my day is coming, blame it on the entropy
My blood is pumping I can see the end is right in front of me
Don't take it from me
I could be everything....everything
 
(don't take it from me)
(my blood is pumping)
(don't take it from me)
(I could be everything....everything)
 
So let it go, let it go 
That's the way that it goes
First you're in then you're out, everybody knows
You're hot then you're cold, you're a light in the dark
Just you wait and you’ll see that you're swimming with sharks
 
My blood is pumping, coming to get you, don't take it from me
My blood is pumping, coming to get you, don't take it from me
My blood is pumping, coming to get you, don't take it from me
 
My blood is pumping, coming to get you, don't take it from me
 
`


function VideoDescription(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`w-full cursor-pointer bg-[#272727] shadow-2xl shadow-blue-500/10 rounded-lg flex flex-col pt-1 p-4 ${isOpen? "h-fit" : "h-[100px]"} overflow-hidden`} onClick={() => setIsOpen(isOpen^true)} >
            <h2 className={`font-bold text-white `}>171,979,439 views  Premiered Jun 24, 2022  <span className={`text-gray-400`}>#Sharks #ImagineDragons #Mercury</span></h2>
            <p className={`text-sm font-semibold`}>{description}</p>
            <div>
                {isOpen?<p className={`text-sm font-semibold mt-10`}>SHOW LESS</p>:""}
            </div>
        </div>
    );
}

export default VideoDescription;
