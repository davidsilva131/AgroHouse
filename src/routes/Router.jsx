import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResposiveNavBar from "../components/Layout/ResposiveNavBar";
import Home from "../components/pages/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import PublicRouter from "./PublicRouter";
import { userLoginSync } from "../redux/actions/userAction";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined)
  const dispatch = useDispatch()
  const userStorage = useSelector((store) => store.user)
  const [check, setCheck] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true)
        if (Object.entries(userStorage).length === 0) {
          const {
            displayName,
            email,
            accessToken,
            photoURL,
            uid
          } = user.auth.currentUser;
          dispatch(
            userLoginSync({
              name: displayName,
              email,
              accessToken,
              photoURL,
              uid,
              error: false,
            })
          );
        }
      } else {
        setIsLoggedIn(false)
      }
      setCheck(false)
    })
  }, [isLoggedIn, check]);



  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ResposiveNavBar setIsLoggedIn={setIsLoggedIn} />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
