
import { useSelector } from 'react-redux';
import usePopular from '../hooks/usePopular';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import useNowPlayingMovies from '../hooks/usenowPlayingMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';


const Browser = () => {
  const showgpt = useSelector((store)=>store.gpt.ShowgptSearch)
  // usenowPlayingMovies Hook
  //fetch data && update store
  useNowPlayingMovies();
  useTopRated();
  usePopular();
  useUpcoming();



  return (
    <div className={showgpt?"bg-transparent":'bg-black'}>
      <Header/>
      {showgpt?<GptSearch/>:
      <>
      <Maincontainer/>
      <Secondarycontainer/>
      </>
      }
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