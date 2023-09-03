import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const[signinout,setsigninout]=useState(false)
  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="absolute "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundimg"
        />
      </div>
      <div className=" absolute w-1/4 mx-auto left-0 right-0 my-48 p-12 bg-black bg-opacity-80 rounded-lg " >
        <h1 className="font-bold text-3xl text-white mb-4">{signinout?"Sign In":"Sign up"}</h1>
        <form>
        {!signinout&&<input
            className="w-full px-4 py-2 my-2 rounded-lg "
            type="text"
            placeholder="Name"
          ></input>}
          <input
            className="w-full px-4 py-2 my-2 rounded-lg "
            type="text"
            placeholder="Email or Phone number"
          ></input>
          <input
            className="w-full px-4 py-2 my-2 rounded-lg "
            type="password"
            placeholder="password"
          ></input>
          <button className="w-full px-4 py-2 my-6 bg-red-600 rounded-lg text-white font-bold">{signinout?"Sign In":"Sign up"}</button>
          <h4 onClick={()=>{
            setsigninout(!signinout)
          }} className="text-white cursor-pointer my-6">{signinout?"New to Netflix? Sign up now.":"Registered already Sign in here."}</h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
