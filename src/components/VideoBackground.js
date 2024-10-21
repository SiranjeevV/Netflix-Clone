import { api_options, randomTrailer } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerkey } from "../utils/movieSlice";
import { useSelector, useDispatch } from "react-redux";
const VideoBackground = ({ trailerKey }) => {
    const dispatch = useDispatch();
    const movieList = useSelector(store => store.movies.nowPlayingMovies)
    const fetchVideo = async (movieId) => {
        const trailer = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?', api_options)
        const json = await trailer.json();
        const trailerVideo = json.results.filter((video) => video.type == "Trailer");
        dispatch(addTrailerkey(trailerVideo[0].key));
    }
    useEffect(() => {
        fetchVideo(movieList[randomTrailer].id);
    }, [])
    return (<div className="w-[100vw] h-[100vh] object-cover overflow-hidden" >
        <div className="absolute w-[100%] h-[100%]  z-20 bg-gradient-to-b from-transparent via-transparent to-black bg-opacity-30" ></div>
        <iframe className="w-[100vw] h-[100vh] scale-150"
            src={"https://www.youtube.com/embed/" + trailerKey + "?si=OeXLy1TKDoyFANhs&controls=0&modestbranding=1&rel=0&autoplay=1&fs=0&disablekb=1&iv_load_policy=3&mute=1&loop=1&start=40&end=80&playlist=" + trailerKey}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
        ></iframe>

    </div>)
}
export default VideoBackground