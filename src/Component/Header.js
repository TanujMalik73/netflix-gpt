import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../util/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeuser } from "../util/userSlice";
import { SUPPORTED_LANGUAGES, logoURl } from "../util/constants";
import { togglegptsearch } from "../util/Gptslice";
import { changelang } from "../util/confiqSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showgpt = useSelector((store)=>store.gpt.ShowgptSearch)

  const navigate = useNavigate();

  const handlesignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const toggleGpt = () => {
    dispatch(togglegptsearch());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col md:flex-row z-30 absolute w-screen bg-gradient-to-b from-black justify-between p-6">
      <img className="w-48 mx-auto md:mx-0" src={logoURl} alt="logo" />
      {user && (
        <div className="flex mx-auto my-10 md:mx-3 md:my-3">

          {showgpt&&<select onClick={(e)=>{dispatch(changelang(e.target.value))}} className="bg-red-500 text-white h-12 p-1  font-mono font-bold rounded-lg">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}

          <button
            onClick={toggleGpt}
            className="bg-red-500 text-white h-12 p-3 mx-5 font-mono font-bold rounded-lg"
          >
            {showgpt?"Movies":"GPT Search"}
          </button>
          <div>
            <img
            onClick={handlesignout}
              className="w-12 h-12 rounded-lg cursor-pointer"
              src={user?.photoURL}
              alt="userphoto"
            ></img>
            <button
              onClick={handlesignout}
              className="text-white font-bold cursor-pointer"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
