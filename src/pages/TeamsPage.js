import React, { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamsList from "../components/TeamsList.js"
import { generatePath, useNavigate } from "react-router-dom"
import M from './NBA.PNG';
import git from './git.png'



export default function TeamsPage() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  return (
    <div id="whole-players-page">
      <div id="homeHeading">
        <div id="homeIcon">
            <img id="M" src={M} /> 
            <div id="homeMartaTracker">GOAT.grade()</div>
            <div id="homeAboutMe"><p onClick={() => {navigate("/");}}>Back Home</p></div>
        </div>
        <input
          type="text"
          id="PL-search-bar"
          placeholder="Search teams..."
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        />
        <div id="homeLinks">
            <></>
        </div>
      </div>
      <div id="players-page-content">
        <h1>2024 Team Rankings</h1>
        <div styles="align-self: center">
          <TeamsList searchTerm={searchTerm}/>
        </div>
      </div>
    </div>
  );
}


