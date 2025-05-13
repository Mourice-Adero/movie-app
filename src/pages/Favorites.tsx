import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";

function Favorites() {
  const { favorites } = useMovieContext();
  console.log(favorites);

  if (favorites) {
    return (
      <div>
        <h2>Favorite Movies</h2>
        <div className="flex flex-wrap">
          {favorites.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>You do not have any favorite movie</h2>
      </div>
    );
  }
}

export default Favorites;
