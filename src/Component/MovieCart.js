import React from 'react'
import { IMG_CDN_URL } from '../util/constants'

const MovieCart = ({poster_path}) => {
  if(!poster_path)return
  return (
        <div className='w-36 hover:w-40 hover:delay-700'>
        <img className=' rounded-lg ' src={IMG_CDN_URL+poster_path} alt='Movie cart'></img>
        </div>
  )
}

export default MovieCart