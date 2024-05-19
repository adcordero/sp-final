import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Landing_SO from "./pages/Landing_SO";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import bg from './images'

import.meta.glob([
  './images/**',
  // '../fonts/**',
]);

const App = () => {

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/guest" element={<Landing_SO />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
