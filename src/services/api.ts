const BASE_URL = "https://yts.mx/api/v2/list_movies.json";

export interface Torrent {
  url: string;
  hash: string;
  quality: string;
  type: string;
  is_repack: string; // "0" or "1" as string
  video_codec: string;
  bit_depth: string;
  audio_channels: string;
  seeds: number;
  peers: number;
  size: string;
  size_bytes: number;
  date_uploaded: string;
  date_uploaded_unix: number;
}

export interface Movie {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state: string;
  torrents: Torrent[];
  date_uploaded: string;
  date_uploaded_unix: number;
}

export interface MovieData {
  movie_count: number;
  limit: number;
  page_number: number;
  movies: Movie[];
}

export interface MetaInfo {
  server_time: number;
  server_timezone: string;
  api_version: number;
  execution_time: string;
}

export interface MoviesApiResponse {
  status: string;
  status_message: string;
  data: MovieData;
  "@meta": MetaInfo;
}


export async function getMovies(): Promise<Movie[]>{
    const req = await fetch(`${BASE_URL}`);
    const res = await req.json();
    if(!req.ok){
        return [];
    }
      return res.data.movies;
}

export async function searchMovies(searchQuery: string) {
    const response = await getMovies();
    return response.filter((movie)=> movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
}

export async function singleMovie(movieId: string) {
    const response = await getMovies();
    return response.find((movie)=>movie.id === +movieId)?? null

}
