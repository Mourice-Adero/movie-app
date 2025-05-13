import { useEffect, useMemo, useState } from "react";
import { getMovies, type Movie } from "../services/api";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const filteredMovies = useMemo(() => {
    return search.trim() === ""
      ? movies
      : movies.filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase())
        );
  }, [search, movies]);

  useEffect(() => {
    const loadMovies = async () => {
      const req = await getMovies();
      setMovies(req);
      setLoading(false);
    };
    loadMovies();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="max-w-7xl mx-auto p-5 text-white bg-[#222121]">
      <div className="flex justify-center p-2">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="border rounded-2xl px-2 text-center"
          placeholder="search..."
        />
      </div>
      <div className="flex flex-wrap">
        {filteredMovies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
