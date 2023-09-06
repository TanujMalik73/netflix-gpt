import React from 'react'
import { IMG_CDN_URL } from '../util/constants'

const MovieCart = ({poster_path}) => {
  return (
    <div className='w-40 hover:w-52 hover:delay-700'>
        <img className=' rounded-lg ' src={IMG_CDN_URL+poster_path} alt='Movie cart'></img>
    </div>
  )
}

export default MovieCart