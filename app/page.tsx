import config from "../api/config";
import Banner from "./Banner";
import queryString from "query-string";
import Row from "./Row";
import Header from "./Header";
import Modal from "./Modal";
import ModalProvider from "./ModalProvider";

const fetchMovieList = async (url: string, params: {}) => {
  const stringifiedParams = queryString.stringify(params);
  const response = await fetch(
    `${config.baseUrl}/${url}?api_key=${config.api_key}&${stringifiedParams}`
  );
  return response.json();
};

export default async function Home() {
  const trendingMovies = await fetchMovieList("trending/all/week", {});
  const netflixOriginalMovies = await fetchMovieList("discover/movie", {
    with_networks: 213,
  });
  const topRatedMovies = await fetchMovieList("movie/top_rated", {});
  const actionMovies = await fetchMovieList("discover/movie", {
    with_genres: 28,
  });
  const comedyMovies = await fetchMovieList("discover/movie", {
    with_genres: 35,
  });
  const horrorMovies = await fetchMovieList("discover/movie", {
    with_genres: 27,
  });
  const romanceMovies = await fetchMovieList("discover/movie", {
    with_genres: 10749,
  });
  const documentaries = await fetchMovieList("discover/movie", {
    with_genres: 99,
  });

  return (
    <>
      <Header />
      <div className="relative h-full bg-gradient-to-b from-gray-900/10 to-[#010511]">
        <main className="relative py-4 lg:py-16 pb-24 lg:space-y-24">
          <Banner netflixOriginalMovies={netflixOriginalMovies.results} />
          <section className="md:space-y-24">
            <Row title="Trending Now" movies={trendingMovies.results} />
            <Row title="Top Rated" movies={topRatedMovies.results} />
            <Row title="Action Thrillers" movies={actionMovies.results} />
            {/* My List */}
            <Row title="Comedies" movies={comedyMovies.results} />
            <Row title="Scary Movies" movies={horrorMovies.results} />
            <Row title="Romance Movies" movies={romanceMovies.results} />
            <Row title="Documentaries" movies={documentaries.results} />
          </section>
        </main>
        <ModalProvider>
          <Modal />
        </ModalProvider>
      </div>
    </>
  );
}
