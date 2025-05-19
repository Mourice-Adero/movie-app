import { createContext, useContext, useEffect, useState } from "react";
import type { Movie } from "../services/api";

type MovieContextType = {
  addFavorites: (movie: Movie) => void;
  removeFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
  favorites: Movie[];
};
const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("");
  }
  return context;
};

function MovieProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    try {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        const parsed = JSON.parse(storedFavorites);
        setFavorites(parsed);
      }
    } catch (error) {
      console.error("Failed to parse favorites:", error);
      localStorage.removeItem("favorites");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFavorites = (movieId: number) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId: number) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addFavorites,
    removeFavorites,
    isFavorite,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}

export default MovieProvider;
