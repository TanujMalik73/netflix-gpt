
import usePopular from '../hooks/usePopular';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import useNowPlayingMovies from '../hooks/usenowPlayingMovies';
import Header from './Header'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';


const Browser = () => {
  // usenowPlayingMovies Hook
  //fetch data && update store
  useNowPlayingMovies();
  useTopRated();
  usePopular();
  useUpcoming();



  return (
    <div className='bg-black'>
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