import { useDispatch } from "react-redux";
import { randomTrailer } from "../utils/constants";
import { useSelector } from "react-redux";
import { api_options } from "../utils/constants";
import { addLogoKey } from "../utils/movieSlice";
import { useEffect } from "react";
const VideoTitle = ({  trailerLogo}) => {
    const dispatch = useDispatch();
    const movieList = useSelector(store => store.movies.nowPlayingMovies)
    const fetchVideo = async (movieId) => {
        const trailer = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/images ', api_options)
        const json = await trailer.json();
        const trailerLogo = json.logos.filter((video) => video.iso_639_1 == "en");
        dispatch(addLogoKey(trailerLogo[0].file_path));
    }
    useEffect(() => {
        fetchVideo(movieList[randomTrailer].id);
    }, [])
    return (<div className="absolute top-[0%] left-0 w-[100vw] h-[100vh] bg-gradient-to-r from-black to-transparent bg-opacity-30">
        <div className="absolute top-[50%] left-12 translate-y-[-50%] w-[50%]  mt-3  z-50">
            <img className="w-96" src={"https://image.tmdb.org/t/p/w500/" + trailerLogo} />
            <div className="flex mt-6 ml-4">
                <button className="text-black bg-white px-5 py-2 mr-6 w-28 text-md rounded-sm"><i className="fa-solid fa-play"></i> Play</button>
                <button className="text-white bg-gray-400 bg-opacity-60 px-5 py-2 w-28 text-md rounded-sm">More info</button>
            </div>
        </div>
    </div>);
}
export default VideoTitle