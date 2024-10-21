import Header from "./Header";
import { useEffect } from "react";
import { api_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addPopular, addTopRated , addUpComing} from "../utils/movieSlice";
import MainContainer from "./MainConatiner"
import SecondaryContainer from "./SecondaryContainer";
import Search from "./Search";
const Browse = () => {
    const dispatch = useDispatch();
    const searchView = useSelector(store => store.search.searchView)
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', api_options);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', api_options);
        const json = await data.json();
        dispatch(addPopular(json.results));
    }
    const getTopRated = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', api_options);
        const json = await data.json();
        dispatch(addTopRated(json.results));
    }
    const getUpcoming = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', api_options);
        const json = await data.json();
        dispatch(addUpComing(json.results));
    }
    useEffect(() => {
        getNowPlayingMovies();
        getPopularMovies();
        getTopRated();
        getUpcoming();
    }, [])

    return (<div><Header />
        {searchView ? (
            <Search />
        ) : (
            <>
                <MainContainer />
                <SecondaryContainer />
            </>
        )}
    </div>)
}
export default Browse;