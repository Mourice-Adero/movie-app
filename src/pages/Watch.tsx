import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { singleMovie, type Movie } from "../services/api";

function Watch() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null!);
  const [loading, setLoading] = useState(true);

  const loadMovie = useCallback(async () => {
    const res = await singleMovie(movieId!);
    const movie = res;
    setMovie(movie);
    setLoading(false);
  }, [movieId]);

  useEffect(() => {
    // setLoading(false);
    loadMovie();
  }, [loadMovie]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col max-w-7xl mx-auto p-5 text-white bg-[#222121]">
      <div className="mb-7">
        <h1>
          {movie?.title} ({movie?.year})
        </h1>
        <div className="relative pb-[56.25%] h-0 overflow-hidden mb-5">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${movie?.yt_trailer_code}`}
            title={`${movie?.title} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="bg-[#535151] p-4 rounded-lg mt-5">
          <h3>Download Options</h3>
          <ul className="list-none p-0">
            {movie?.torrents.map((torrent, index) => {
              return (
                <li key={index} className="my-2">
                  <Link
                    to={torrent.url}
                    className="text-[#4CAF50] no-underline hover:underline"
                  >
                    {torrent.quality} - {torrent.size} -{" "}
                    {torrent.audio_channels}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex gap-[30px] md:flex-col">
        <img
          className="w-[300px] h-auto rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.3)] md:w-full md:max-w-[400px] md:mx-auto"
          src={movie?.medium_cover_image}
          alt={movie?.title}
        />
        <div className="flex-1">
          <p className="my-2">
            <strong>Rating:</strong>
            {movie?.rating}
          </p>
          <p className="my-2">
            <strong>Runtime:</strong>
            {movie?.runtime || "N/A"}
          </p>
          <p className="my-2">
            <strong>Genres:</strong>
            {movie?.genres.join(", ")}
          </p>
          <p className="my-2">
            <strong>Language:</strong>
            {movie?.language}
          </p>
        </div>
        <div>
          <h3>Synopsis</h3>
          <p>
            {movie?.synopsis ||
              movie?.description_full ||
              "No Synopsis Available."}
          </p>
        </div>
        <div className="mt-5 flex gap-[15px]">
          <Link
            className="text-[#2196F3] no-underline px-4 py-2 bg-[rgba(33,150,243,0.1)] rounded hover:bg-[rgba(33,150,243,0.2)]"
            to={`https://www.imdb.com/title/${movie?.imdb_code}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on IMDB
          </Link>
          <Link
            className="text-[#2196F3] no-underline px-4 py-2 bg-[rgba(33,150,243,0.1)] rounded hover:bg-[rgba(33,150,243,0.2)]"
            to={movie?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on YTS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Watch;
