import React from 'react'
import lang from '../util/languageConstants'
import { useSelector } from 'react-redux'

const Searchbar = () => {
  const langkey = useSelector((store)=>store.confiq.langtype)
  return (
    <div >
        <form className='absolute pt-64 px-96'>
            <input  className='w-96 p-2 rounded-lg text-xl' type='text' placeholder ={lang[langkey].gptSearchPlaceholder}></input>
            <button className="bg-red-500 text-white h-12 w-20 px-4 py-1 mx-5 font-mono font-bold rounded-lg">{lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default Searchbar