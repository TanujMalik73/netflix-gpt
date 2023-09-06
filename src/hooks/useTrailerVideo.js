import { useDispatch, useSelector } from "react-redux";
import { Api_options } from "../util/constants";
import { useEffect } from "react";
import { addTrailervideo } from "../util/moviesSlice";

export const useTrailerVedio = ({ movieId }) => {
  const dispatch = useDispatch();
  const TrailerVedio=useSelector((store)=>store.movies?.Trailervideo)

  const movievideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      Api_options
    );
    const json = await data.json();
    // console.log(json.results);
    if(json.results!==undefined){
      const Trailerfilter = json?.results.filter(
        (data) =>data!==undefined && data?.type ==="Trailer",
        );
        const Trailer = Trailerfilter.length? Trailerfilter[0] : json?.results[0];
        dispatch(addTrailervideo(Trailer));
      }
  };
  useEffect(() => {
    !TrailerVedio&&
    movievideos();
  },[]);
};
