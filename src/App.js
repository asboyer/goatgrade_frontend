import './App.css';
import React, { useState,useEffect } from 'react';
import Home from "./pages/Home.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayersPage from "./pages/PlayersPage";
import TeamsPage from "./pages/TeamsPage";
import MvpPage from "./pages/MvpPage";
import About from "./pages/About";



function App() {

  // const [propColor, setPropColor] = useState("");
  

  return (

    
    <div id="WholeApp">
      <BrowserRouter>
        <Routes>
        <Route index element={<Home/>} />
          <Route path={"playerspage"} element={<PlayersPage/>} />
          <Route path={"teamspage"} element={<TeamsPage/>} />
          <Route path={"mvppage"} element={<MvpPage />} />
          <Route path={"about"} element={<About />} />

        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
