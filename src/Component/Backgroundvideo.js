
import { useSelector } from "react-redux";

import { useTrailerVedio } from "../hooks/useTrailerVideo";

const Backgroundvideo = ({ movieId }) => {

  //  useTrailerVedio  fetch trailer videos && update it to store
  const TrailerVedio=useSelector((store)=>store.movies?.Trailervideo)
  useTrailerVedio({movieId});
  
  return (
    <div>
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+TrailerVedio?.key+"?rel=0&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Backgroundvideo;
