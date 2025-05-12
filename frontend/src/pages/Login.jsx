import React, {useContext, useState} from 'react';
import {ToastContainer, toast} from "react-toastify";
import {useAppContext} from "../contexts/Context.jsx";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUser, setIsLoggedIn} = useAppContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('https://youtube-clone-6iwf.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({email, password}),
        });
        const data = await res.json();
        toast("Logged in successfully.")
        console.log(data);
        setUser(data.user);
        setIsLoggedIn(true);
    };

    return (
        <div className="bg-[#121212] p-50 pt-15 h-screen ">
            <div className={`flex items-center justify-center`}>
                <img src="../../assets/video.png" className={`h-20`} />
                <h1 className={`font-extrabold text-4xl`}>NEW <span className={`text-[#CD201F]`}>TUBE</span></h1>
            </div>
            <div className="text-center flex flex-col items-center">
                <form className={`bg-[#010101] p-5 mt-5 border-2 flex flex-col text-black items-center border-gray-200 gap-4 w-3/5`} onSubmit={(e)=>handleSubmit(e)}>
                    <h1 className={`font-extrabold text-white text-2xl tracking-widest`}>LOGIN</h1>
                    <input type={"text"} className={`p-2 placeholder:text-gray-700 placeholder:font-semibold color-black bg-white w-100`} placeholder="EMAIL" onChange={(e)=>setEmail(e.target.value)} />
                    <input type={"password"} className={`p-2 placeholder:text-gray-700 placeholder:font-semibold color-black bg-white w-100`} placeholder="PASSWORD" autoComplete={'off'} onChange={(e)=>setPassword(e.target.value)} />
                    <button className="focus:outline-none w-5/6 text-white bg-[#FF0000] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-md px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" type="submit">

                        S U B M I T
                    </button>
                    <ToastContainer/>
                </form>
            </div>
        </div>
    );
}

export default Login;