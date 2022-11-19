"use client"

import { Movie } from "../typings";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Thumbnail from "./Thumbnail";
import { useRef, useState } from "react";

interface Props {
  title: string;
  movies: Movie[];
}

function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;  
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });  
    }
  }  

  return (
    <div className="space-y-0.5 md:space-y-2 px-5">
      <h2 className="w-56 mb-5 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative">
        <AiOutlineLeft className="absolute top-[40%] left-2 z-40 w-9 h-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
           onClick={() => handleClick("left")} 
        />
        <div ref={rowRef} className="flex items-center space-x-0.5 overflow-auto scrollbar-hide md:space-x-2.5">
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <AiOutlineRight className="absolute top-[40%] right-2 z-40 w-9 h-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
           onClick={() => handleClick("right")} 
        />
      </div>
    </div>
  );
}

export default Row;
