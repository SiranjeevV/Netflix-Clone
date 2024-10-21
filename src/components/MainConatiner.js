import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { randomTrailer } from "../utils/constants";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies.nowPlayingMovies)
    const trailer = useSelector((store) => store.movies.trailerKey)
    const trailerLogo = useSelector((store) => store.movies.logoKey)

    if (movies === null) return;
    const mainMovie = movies[randomTrailer];
    return (<div>
        <VideoBackground trailerKey={trailer} />
        <VideoTitle  trailerLogo={trailerLogo} />
    </div>)
}
export default MainContainer