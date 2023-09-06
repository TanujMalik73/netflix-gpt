import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../util/moviesSlice";
import { Api_options } from "../util/constants";

const useUpcoming = () => {
  const dispatch = useDispatch();

  const getUpcoming = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?&page=1',
      Api_options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcoming(json.results));
  };
  useEffect(() => {
    getUpcoming();
  },[]);
};
export default useUpcoming
