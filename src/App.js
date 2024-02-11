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
          <Route path={"players"} element={<PlayersPage/>} />
          <Route path={"teams"} element={<TeamsPage/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
