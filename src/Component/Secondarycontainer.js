import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const Secondarycontainer = () => {
  const moviedata = useSelector((store)=>store.movies)
  return (
    <div className=" -mt-56 relative z-20">
      <MovieList title="Now Playing Movies" moviesdata={moviedata?.nowPlayingMovies}/>
      <MovieList title="Top Rated" moviesdata={moviedata?.TopRated}/>
      <MovieList title="Popular" moviesdata={moviedata?.Popular}/>
      <MovieList title="Upcoming" moviesdata={moviedata?.Upcoming}/>

      {/* Movielist.js 
          MovieList.js*/}

    </div>
  )
}

export default Secondarycontainer