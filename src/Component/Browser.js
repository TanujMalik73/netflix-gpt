
import useNowPlayingMovies from '../hooks/usenowPlayingMovies';
import Header from './Header'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';


const Browser = () => {
  useNowPlayingMovies();
    // usenowPlayingMovies Hook
    //fetch data && update store
  return (
    <div>
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
      {/* -Maincontainer
              -backgroudvideo
              -maintitle        
          -seconderycontainer
              -        
      
      */}
      </div>
  )
}

export default Browser