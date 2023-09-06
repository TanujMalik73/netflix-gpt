import { useSelector } from "react-redux";
import Backgroundvideo from "./Backgroundvideo";
import Maincontainertitle from "./Maincontainertitle";

const Maincontainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movie) return;
  const MainMovie = movie[2];

  const{original_title,overview,id}=MainMovie;

  return (
    <div>
      {/* -backgroudvideo
            -Maincontainertitle */}
      <Maincontainertitle title={original_title} overview={overview}/>
      <Backgroundvideo movieId={id}/>
    </div>
  );
};

export default Maincontainer;
