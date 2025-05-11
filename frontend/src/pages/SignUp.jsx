import React, {useState} from 'react';
const [channelName, setChannelName] = useState('');
const [email , setEmail] = useState('');
const [password, setPassword] = useState('');
const [phone, setPhone] = useState('');

const handelSubmit = async () => {
}

function SignUp(props) {
    return (
        <div className="bg-[#121212] p-50 pt-15 h-screen ">
            <div className={`flex items-center justify-center`}>
                <img src="../../assets/video.png" className={`h-20`} />
                <h1 className={`font-extrabold text-4xl`}>NEW TUBE</h1>
            </div>
                <div className="text-center flex flex-col items-center">
                    <form className={`bg-[#010101] p-5 mt-5 border-2 flex flex-col items-center border-gray-200 gap-4 w-3/5`} onSubmit={handelSubmit}>
                        <h1 className={`font-extrabold text-2xl`}>SIGN UP</h1>
                        <input type={"text"} className={`p-2 placeholder:text-gray-700 placeholder:font-semibold color-black bg-white w-100`} placeholder="CHANNEL NAME"/>
                        <input type={"text"} className={`p-2 placeholder:text-gray-700 placeholder:font-semibold color-black bg-white w-100`} placeholder="CHANNEL NAME"/>
                        <input type={"text"} className={`p-2 placeholder:text-gray-700 placeholder:font-semibold color-black bg-white w-100`} placeholder="CHANNEL NAME"/>
                        <input type={"text"} className={`p-2 placeholder:text-gray-700 placeholder:font-semibold color-black bg-white w-100`} placeholder="CHANNEL NAME"/>
                        <div className="flex gap-10 items-center">
                            <h3 className={`inline text-white font-semibold`}>LOGO : </h3>
                            {/*<label htmlFor="files">Select Logo</label>*/}
                            <input
                                type="file"
                                name="logo"
                                className="file:bg-gray-800 file:text-white file:px-4 file:py-2 file:rounded file:border-0 file:cursor-pointer text-sm text-gray-300"
                            />

                        </div>
                        <button className="focus:outline-none w-130 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-md px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" type="submit">

                        S U B M I T
                        </button>

                    </form>
                </div>
        </div>
    );
}

export default SignUp;