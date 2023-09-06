import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const Secondarycontainer = () => {
  const moviedata = useSelector((store)=>store.movies?.nowPlayingMovies)
  return (
    <div>
      <MovieList title="Now Playing Movies" moviesdata={moviedata}/>
      {/* Movielist.js 
          MovieList.js*/}

    </div>
  )
}

export default Secondarycontainer