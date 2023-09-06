import React from 'react'
import { IMG_CDN_URL } from '../util/constants'

const MovieCart = ({poster_path}) => {
  return (
    <div>
        <img className='w-56'src={IMG_CDN_URL+poster_path} alt='Movie cart'></img>
    </div>
  )
}

export default MovieCart