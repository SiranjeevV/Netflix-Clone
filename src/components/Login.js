import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useRef, useState } from "react";
import { checkValidate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"
const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const handleClick = () => {
        setIsSignIn(!isSignIn);
    }
    const email = useRef(null);
    const password = useRef(null);
    const handleSubmit = () => {
        const msg = checkValidate(email.current.value, password.current.value);
        setErrorMessage(msg);
        if (msg) return;
        if (!isSignIn) {
            //sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setErrorMessage("check your credentials!!!!");
                });
        } else {
            //sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage("check your credentials!!!!");

                });
        }
    }


    return (<>
        <div className="h-auto relative">
            <Header />
            <div className="relative   h-[100vh] w-[100vw] ">
                <div className="absolute w-[100%] h-[100%]  z-20 bg-gradient-to-b from-zinc-950 via-zinc-950 to-neutral-900 opacity-60"></div>
                <img className="w-[100%] h-[100%]  object-cover object-left-top" src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg" alt="" />
            </div>
            <div className="w-11/12 absolute top-[15%] left-[50%] translate-x-[-50%] translate-y-[-15%] z-40 py-12 bg-black bg-opacity-65 px-16 lg:w-[450px] h-auto sm:w-4/5 md:w-1/2 ">
                <form onSubmit={(e) => {
                    e.preventDefault();
                }} className="w-full relative flex flex-col">
                    <h3 className=" text-white font-bold mb-6 ml-1" style={{
                        fontSize: "32px"
                    }}>{isSignIn ? "Sign In" : "Sign Up"}</h3>
                    {!isSignIn && (<input type="text" placeholder="Name" className="mb-6 w-full px-4 mx-1 py-[14px] text-white rounded-sm bg-gray-700 bg-opacity-20 border-gray-400 border-[1px] focus:ring-2 focus:ring-white" />)}
                    <input ref={email} type="email" placeholder="Email or mobile number" className="mb-6 w-full px-4 py-[14px] mx-1 text-white rounded-sm  bg-gray-700 bg-opacity-15 border-stone-500 border-[0.3px] focus:ring-2 focus:ring-white" />
                    <input ref={password} type="password" placeholder="Password" className="mb-6 w-full px-4 mx-1 py-[14px] text-white rounded-sm bg-gray-700 bg-opacity-15 border-stone-500 border-[0.3px] focus:ring-2 focus:ring-white" />
                    <p className="px-1" style={{
                        color: "rgb(229, 9, 20)"
                    }} >{errorMessage}</p>
                    <input onClick={handleSubmit} type="submit" value={isSignIn ? "Sign In" : "Sign Up"} className="mb-4 w-full px-3 py-2 text-md  mx-1 font-semibold text-white rounded-sm hover:bg-red-700" style={{
                        backgroundColor: "rgb(229, 9, 20)"
                    }} />
                    {isSignIn && (<p className="text-gray-500 text-center w-full font-bold mb-4 mx-1 ">OR</p>)}
                    {isSignIn && (<button className="mb-6 w-full px-3 py-2 text-md font-semibold text-white mx-1 text-center rounded-sm bg-zinc-800 " disabled>Use a Sign In Code</button>)}
                    <p className=" text-gray-500 w-full text-sm mb-6 mx-1">{isSignIn ? "New to Netflix? " : "Already a Member? "}<Link className="text-white font-semibold" onClick={handleClick}>{!isSignIn ? "Sign In" : "Sign Up"}</Link></p>
                    <p className=" text-gray-500 text-xs mb-5 w-10/12 mx-1" >This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link className="text-blue-500" >Learn more</Link></p>
                </form>
            </div>
            <Footer />
        </div>
    </>);
}
export default Login;