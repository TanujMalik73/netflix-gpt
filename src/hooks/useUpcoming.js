import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcoming } from "../util/moviesSlice";
import { Api_options } from "../util/constants";

const useUpcoming = () => {
  const dispatch = useDispatch();
  const Upcoming=useSelector((store)=>store.movies?.Upcoming)

  const getUpcoming = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?&page=1',
      Api_options
    );
    const json = await data.json();
    dispatch(addUpcoming(json.results));
  };
  useEffect(() => {
    !Upcoming&&
    getUpcoming();
  },[]);
};
export default useUpcoming
