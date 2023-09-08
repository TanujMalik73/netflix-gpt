import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../util/moviesSlice";
import { Api_options } from "../util/constants";

const useTopRated = () => {
  const dispatch = useDispatch();
  const TopRated = useSelector((store)=>store.movies.TopRated)

  const getTopRated = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?&page=1',
      Api_options
    );
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };
  useEffect(() => {
    !TopRated&&
    getTopRated();
  },[]);
};
export default useTopRated
