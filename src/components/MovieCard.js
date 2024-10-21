

const MovieCard = (movieId) => {

    return (
        <img className="w-40 mx-7" src={"https://image.tmdb.org/t/p/w500/" + movieId.movieId} />
)
}
export default MovieCard