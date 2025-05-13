import { Link } from "react-router";
import type { Movie } from "../services/api";
// import Favorite from "./Favorite";
import { useMovieContext } from "../contexts/MovieContext";

type Props = {
  movie: Movie;
};
function MovieCard({ movie }: Props) {
  const movieContext = useMovieContext();
  const { addFavorites, removeFavorites, isFavorite } = movieContext;
  const favorite = isFavorite(movie.id);

  const onFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (favorite) removeFavorites(movie.id);
    else addFavorites(movie);
  };
  return (
    <div
      key={movie.id}
      className="rounded-lg p-2 bg-[#3b3a3abd] m-2 shadow-gray-500"
    >
      <img
        src={movie.medium_cover_image}
        alt={movie.medium_cover_image}
        className="h-60 max-w-40"
      />
      <div className="h-18">
        <h3 className="max-w-40">{movie.title}</h3>
        <p>{movie.year}</p>
      </div>
      <div className="flex justify-between px-3">
        <Link
          to={`/watch/${movie.id}`}
          className="text-[#4CAF50] no-underline hover:underline shadow p-2"
        >
          Watch
        </Link>
        <div className="flex text-center">
          <button
            onClick={onFavoriteClick}
            className={`px-2 py-1 rounded ${
              favorite ? "bg-red-500" : "bg-blue-500"
            } text-white`}
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
