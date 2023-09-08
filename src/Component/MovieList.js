import React from "react";
import MovieCart from "./MovieCart";

const MovieList = ({ title, moviesdata }) => {
  return (
    <div className="ml-6">
      <h1 className=" p-4 font-bold font-mono text-white text-xl  ">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className=" flex mx-4 space-x-4">
          {moviesdata!==null&& moviesdata.map((data) => {
            return <MovieCart key={data.id} poster_path={data?.poster_path} />;
          })}
            </div>
          </div>
        
    </div>
  );
};

export default MovieList;
