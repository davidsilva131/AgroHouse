import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResposiveNavBar from "../components/Layout/ResposiveNavBar";
import Home from "../components/pages/Home";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ResposiveNavBar />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
