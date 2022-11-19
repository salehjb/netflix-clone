const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const config = {
  api_key: API_KEY,
  baseUrl: "https://api.themoviedb.org/3",
  backdropImage: "https://image.tmdb.org/t/p/original",
  posterImage: "https://image.tmdb.org/t/p/w500",
}

export default config