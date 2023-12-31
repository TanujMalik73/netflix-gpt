import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../util/moviesSlice";
import { Api_options } from "../util/constants";

const usePopular = () => {
  const dispatch = useDispatch();
  const Popular = useSelector((store)=>store.movies.Popular)

  const getPopular = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?&page=1',
      Api_options
    );
    const json = await data.json();
    dispatch(addPopular(json.results));
  };
  useEffect(() => {
    !Popular&&
    getPopular();
  },[]);
};
export default usePopular
