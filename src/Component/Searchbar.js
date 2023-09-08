import React, { useRef } from "react";
import lang from "../util/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../util/openai";
import { Await } from "react-router-dom";
import { Api_options } from "../util/constants";
import { addGptMovieResult } from "../util/Gptslice";

const Searchbar = () => {

  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.confiq.langtype);
  const SearchText = useRef(null);

  const handleGptSearchClick=async()=>{
    console.log(SearchText.current.value)
    //// make api call to search movies results
    // const gptQuery = "Act as a Movies Recommendation System and Suggest me Top 7 movies names for the query:"+SearchText.current.value;

    // const Gptresults = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: gptQuery }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(Gptresults.choices);
    // if (!Gptresults.choices) {
    //   // TODO: Write Error Handling
    // }
    // const gptMovies = Gptresults.choices?.[0]?.message?.content.split(",");

    const gptMovies =["razz","bhoot", "Hera Pheri","Andaz Apna Apna", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]
        //movie search on tmdb 
        const searchMovieTMDB = async(movie)=>{
          const data = await fetch( "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1", Api_options)
          const json = await data.json();
          return json.results;
        }
    //  each movie search on tmdb
    const promiseArray= gptMovies.map((data)=>{
       return searchMovieTMDB(data)
    })  
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );

    
  }
  return (
    <div>
      <form className="absolute grid grid-cols-12 pt-72  px-5 md:px-96" onSubmit={(e) => e.preventDefault()}>
        <input
        ref={SearchText}
          className=" col-span-9  p-2 rounded-lg  text-sm md:text-xl"
          type="text"
          placeholder={lang[langkey].gptSearchPlaceholder}
        ></input>
        <button onClick={handleGptSearchClick} className=" col-span-2 bg-red-500 text-white h-10 md:h-12 w-16 md:w-20 px-1 md:px-4 py-1 mx-2 md:mx-5 font-mono font-bold rounded-lg">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
