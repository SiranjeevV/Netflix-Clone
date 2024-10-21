import Header from "./Header"

const Search = () => {
    return (<div className=" w-screen h-screen">
        <Header />
        <div className="relative   h-[100vh] w-[100vw] ">
                <div className="absolute w-[100%] h-[100%]  z-20 bg-gradient-to-b from-zinc-950 via-zinc-950 to-neutral-900 opacity-60"></div>
                <img className="w-[100%] h-[100%]  object-cover object-left-top" src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg" alt="" />
            </div>
        <div className="absolute z-50 top-[15%] left-[50%] translate-x-[-50%] flex justify-center bg-black px-10 py-5 bg-opacity-75">
            <form className="w-96 px-5 flex justify-around">
                <input type="text" placeholder="Search for a movie" className="py-2 px-3 w-[80%]  text-white rounded-sm  bg-gray-700 bg-opacity-15 border-stone-500 border-[0.3px] focus:ring-2 focus:ring-white"/>
                <button  className="text-white bg-red-600 px-3 py-2 text-xl  text-md rounded-sm w-[15%] font-semibold hover:bg-red-700 " >⌕</button>
            </form>
        </div>
    </div>)
}
export default Search