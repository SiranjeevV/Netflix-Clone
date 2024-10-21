import { useSelector } from "react-redux"
import MovieCard from "./MovieCard";
const SecondaryContainer = () => {
    const poster1 = useSelector((store) => store.movies.nowPlayingMovies);
    const poster2 = useSelector((store) => store.movies.popular);
    const poster3 = useSelector((store) => store.movies.topRated);
    const poster4 = useSelector((store) => store.movies.upcoming);

    if (poster1 === null || poster2 === null || poster3 === null || poster4 === null)
        return <div>loading</div>
    return (<div className="absolute z-20 mt-[-100px]">
        <h1 className="font-bold text-white text-3xl ml-7 mb-7">Now Showing</h1>
        <div className="flex overflow-x-auto scroll-bar-hidden mb-14">
            {poster1.map((movie, index) => <MovieCard key={index} movieId={movie.poster_path} />)}
        </div>
        <h1 className="font-bold text-white text-3xl ml-7 mb-7">Upcoming Movies</h1>
        <div className="flex overflow-x-auto scroll-bar-hidden mb-14">
            {poster4.map((movie, index) => <MovieCard key={index} movieId={movie.poster_path} />)}
        </div>
        <h1 className="font-bold text-white text-3xl ml-7 mb-7">Top Rated Movies</h1>
        <div className="flex overflow-x-auto scroll-bar-hidden mb-14">
            {poster3.map((movie, index) => <MovieCard key={index} movieId={movie.poster_path} />)}
        </div>
        <h1 className="font-bold text-white text-3xl ml-7 mb-7">Popular Movies</h1>
        <div className="flex overflow-x-auto scroll-bar-hidden mb-14">
            {poster2.map((movie, index) => <MovieCard key={index} movieId={movie.poster_path} />)}
        </div></div>)
}
export default SecondaryContainer