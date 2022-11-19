/* eslint-disable @next/next/no-img-element */
import config from "../api/config";
import { modalState, movieState } from "../atom/modalAtom";
import { Movie } from "../typings";
import { useRecoilState } from "recoil";

interface Props {
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div
      className="relative min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setShowModal(true);
        setCurrentMovie(movie);
      }}
    >
      <img
        src={`${config.posterImage}${movie.backdrop_path || movie.poster_path}`}
        alt="cover"
        className="h-[150px] w-[100%] object-cover rounded-sm md:rounded"
      />
    </div>
  );
}

export default Thumbnail;
