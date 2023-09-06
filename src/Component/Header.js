import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../util/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeuser } from "../util/userSlice";
import { logoURl } from "../util/constants";

const Header = () => {

  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user)

  const navigate = useNavigate();

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
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
    <div className="flex z-30 absolute w-screen bg-gradient-to-b from-black justify-between p-6">
      <img
        className="w-48"
        src={logoURl}
        alt="logo"
      />
    { user&&<div>
        <img
          className="w-12 h-12 rounded-lg"
          src={user?.photoURL}
          alt="userphoto"
        ></img>
        <button
          onClick={handlesignout}
          className="text-white font-bold cursor-pointer"
        >
          (Sign out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
