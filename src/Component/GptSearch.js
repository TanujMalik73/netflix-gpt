import React from 'react'
import Searchbar from './Searchbar'
import GptSuggestions from './GptSuggestions'
import { backgroundimgURL } from '../util/constants'

const GptSearch = () => {
  return (
    <div>
        <img 
          className="fixed min-h-screen object-cover"
          src={backgroundimgURL}
          alt="backgroundimg"
        />
      <Searchbar/>
      <GptSuggestions/>

      {/* -Searchbar
      -GptSuggestions */}
    </div>
  )
}

export default GptSearch