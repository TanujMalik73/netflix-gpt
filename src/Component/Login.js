import React, { useRef, useState } from "react";
import Header from "./Header";
import { Isvalid } from "../util/Isvalid";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../util/firebase";
import { adduser } from "../util/userSlice";
import { useDispatch } from "react-redux";
import { backgroundimgURL, User_AvatarURL } from "../util/constants";

const Login = () => {
  const [signinout, setsigninout] = useState(true);
  const [messwrongIdpass, setmesswrongIdpass] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const checkvalidation = () => {
    const message = Isvalid(email.current.value, password.current.value);
    setmesswrongIdpass(message);

    if (message) return;

    //Authentication code
    if (!signinout) {
      //signup code
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:User_AvatarURL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                adduser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setmesswrongIdpass(error.message);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setmesswrongIdpass(errorCode + "-" + errorMessage);
        });
    } else {
      //Signin code
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setmesswrongIdpass(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="absolute min-h-screen object-cover"
          src={backgroundimgURL}
          alt="backgroundimg"
        />
      </div>
      <div className=" absolute md:w-1/4 mx-auto left-0 right-0 my-48 p-12 bg-black bg-opacity-80 rounded-lg ">
        <h1 className="font-bold text-3xl text-white mb-4">
          {signinout ? "Sign In" : "Sign up"}
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          {!signinout && (
            <input
              ref={name}
              className="w-full px-4 py-2 my-2 rounded-lg "
              type="text"
              placeholder="Name"
            ></input>
          )}
          <input
            ref={email}
            className="w-full px-4 py-2 my-2 rounded-lg "
            type="text"
            placeholder="Email or Phone number"
          ></input>
          <input
            ref={password}
            className="w-full px-4 py-2 my-2 rounded-lg "
            type="password"
            placeholder="password"
          ></input>
          <p className="text-red-500 my-2 font-medium">{messwrongIdpass}</p>
          <button
            onClick={checkvalidation}
            className="w-full px-4 py-2 my-6 bg-red-600 rounded-lg text-white font-bold"
          >
            {signinout ? "Sign In" : "Sign up"}
          </button>
          <h4
            onClick={() => {
              setsigninout(!signinout);
            }}
            className="text-white cursor-pointer my-6"
          >
            {signinout
              ? "New to Netflix? Sign up now."
              : "Registered already Sign in here."}
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
