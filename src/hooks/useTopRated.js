import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRated } from "../util/moviesSlice";
import { Api_options } from "../util/constants";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getTopRated = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?&page=1',
      Api_options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopRated(json.results));
  };
  useEffect(() => {
    getTopRated();
  },[]);
};
export default useTopRated
