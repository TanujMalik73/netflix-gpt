import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptSuggestions = () => {
  const gpt = useSelector((store)=>store.gpt)
  const{movieNames, movieResults}=gpt


  if(!movieNames) return null;
  return (
    <div>
      <div className='absolute mt-96 bg-black opacity-90 w-screen'>
        {movieNames.map((data,index)=>{
          return<MovieList key={data} title={data} moviesdata={movieResults[index]}/>
        })
          
        }
      </div>
    </div>
  )
}

export default GptSuggestions