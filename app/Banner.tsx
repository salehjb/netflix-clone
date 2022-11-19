"use client";

import { useState, useEffect } from "react";
import config from "../api/config";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Image from "next/image";
import { modalState, movieState } from "../atom/modalAtom";
import { useRecoilState } from "recoil"

function Banner({ netflixOriginalMovies }: any) {
  const [movie, setMovie] = useState<any>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  useEffect(() => {
    setMovie(
      netflixOriginalMovies[
        Math.floor(Math.random() * netflixOriginalMovies.length)
      ]
    );
  }, [netflixOriginalMovies]);

  return (
    <div className="flex flex-col justify-center space-y-2 px-10 md:space-y-4 lg:h-[100vh] lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[100vh] w-screen">
        <Image
          src={`${config.backdropImage}${
            movie?.backdrop_path || movie?.poster_path
          }`}
          alt="poster"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl text-white">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-5 md:w-5" /> Play
        </button>
        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          <IoMdInformationCircleOutline className="h-5 w-5 md:h-7 md:w-7" />{" "}
          More Info
        </button>
      </div>
    </div>
  );
}

export default Banner;
