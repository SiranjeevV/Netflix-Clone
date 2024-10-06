import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useRef, useState } from "react";
import { checkValidate } from "../utils/validate";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const handleClick = () => {
        setIsSignIn(!isSignIn);
    }
    const email = useRef(null);
    const password = useRef(null);
    const handleSubmit = () => {
        setErrorMessage(checkValidate(email.current.value, password.current.value));

    }

    return (<>
        <div className="h-auto relative">
            <Header />
            <div className="relative   h-[100vh] w-[100vw] ">
                <div className="absolute w-[100%] h-[100%]  z-20 bg-gradient-to-b from-zinc-950 via-zinc-950 to-neutral-900 opacity-60"></div>
                <img className="w-[100%] h-[100%]  object-cover object-left-top" src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg" alt="" />
            </div>
            <div className="w-11/12 absolute top-[15%] left-[50%] translate-x-[-50%] translate-y-[-15%] z-40 py-16 bg-black bg-opacity-80 px-16 lg:w-[450px] h-auto sm:w-4/5 md:w-1/2 ">
                <form onSubmit={(e) => {
                    e.preventDefault();
                }} className="w-full relative flex flex-col">
                    <h3 className="text-3xl text-white font-bold mb-7">{isSignIn ? "Sign In" : "Sign Up"}</h3>
                    {!isSignIn && (<input type="text" placeholder="Name" className="mb-6 w-full px-4 mx-1 py-[14px] text-white rounded-sm bg-gray-700 bg-opacity-20 border-gray-400 border-[1px] focus:ring-2 focus:ring-white" />)}
                    <input ref={email} type="email" placeholder="Email or mobile number" className="mb-6 w-full px-4 py-[14px] mx-1 text-white rounded-sm  bg-gray-700 bg-opacity-20 border-gray-400 border-[1px] focus:ring-2 focus:ring-white" />
                    <input ref={password} type="password" placeholder="Password" className="mb-6 w-full px-4 mx-1 py-[14px] text-white rounded-sm bg-gray-700 bg-opacity-20 border-gray-400 border-[1px] focus:ring-2 focus:ring-white" />
                    <p className=" text-red-500 px-1" >{errorMessage}</p>
                    <input onClick={handleSubmit} type="submit" value={isSignIn ? "Sign In" : "Sign Up"} className="mb-4 w-full px-3 py-2 text-md  mx-1 font-semibold text-white rounded-sm bg-red-700 hover:bg-red-600" />
                    {isSignIn && (<p className="text-gray-500 text-center w-full font-bold mb-4 mx-1 ">OR</p>)}
                    {isSignIn && (<button className="mb-6 w-full px-3 py-2 text-md font-semibold text-white mx-1 text-center rounded-sm bg-zinc-800 " disabled>Use a Sign In Code</button>)}
                    <p className=" text-gray-500 w-full text-sm mb-6 mx-1">{isSignIn ? "New to Netflix? " : "Already a Member? "}<Link className="text-white font-semibold" onClick={handleClick}>{!isSignIn ? "Sign In" : "Sign Up"}</Link></p>
                    <p className=" text-gray-500 text-xs mb-5 w-10/12 mx-1" >This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link className="text-blue-500">Learn more</Link></p>
                </form>
            </div>
            <Footer />
        </div>
    </>);
}
export default Login;