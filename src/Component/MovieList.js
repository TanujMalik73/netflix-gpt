import React from "react";
import MovieCart from "./MovieCart";

const MovieList = ({ title, moviesdata }) => {
  console.log(moviesdata);
  return (
    <div className=" flex">
      <h1 className="text-white">{title}</h1>
        <div className=" flex flex-wrap">
          {moviesdata!==null&& moviesdata.map((data) => {
              return <MovieCart key={data.id} poster_path={data?.poster_path} />;
            })}
            </div>
        
    </div>
  );
};

export default MovieList;
