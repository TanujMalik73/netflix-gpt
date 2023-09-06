import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../util/moviesSlice";
import { Api_options } from "../util/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      Api_options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addnowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  },[]);
};
export default useNowPlayingMovies
