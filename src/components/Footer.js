import { Link } from "react-router-dom";

const Footer = () => {
    return (<div className="h-[100vh] w-[100%] bg-black">
        <div className="absolute bottom-0 w-full h-[200px] mb-20">
            <div className="flex flex-col h-[100%] justify-around px-40">
                <div className="flex ">
                    <h3 className="text-base  text-gray-400">Questions? Call 000-800-919-1694</h3>
                </div>
                <div className="flex  w-full flex-wrap">
                    <Link className=" underline w-1/4  text-gray-400 mb-5">FAQ </Link>
                    <Link className=" underline w-1/4  text-gray-400 mb-5">Help Center </Link>
                    <Link className=" underline w-1/4  text-gray-400 mb-5">Terms of Use </Link>
                    <Link className=" underline w-1/4  text-gray-400 mb-5">Privacy </Link>
                    <Link className=" underline w-1/4  text-gray-400">Cookie Preferences </Link>
                    <Link className=" underline w-1/4  text-gray-400">Corporate Information </Link>
                </div>
                <div className="flex ">
                    <h3 className="text-lg border-[1px] px-4   border-stone-500  rounded-sm text-white">English</h3>
                </div>
            </div>
        </div>
    </div>);
}
export default Footer