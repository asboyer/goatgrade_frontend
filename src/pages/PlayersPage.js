import React, { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerList from "../components/PlayerList.js"
import { generatePath, useNavigate } from "react-router-dom"
import M from './NBA.PNG';
import git from './git.png'



export default function PlayersPage() {
  
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
          placeholder="Search players..."
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
          style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        />
        <div id="homeLinks">
            <></>
        </div>
      </div>
      <div id="players-page-content">
        <h1>2024 Player Rankings</h1>
        <div styles="align-self: center">
          <PlayerList searchTerm={searchTerm}/>
        </div>
      </div>
      <div id="Legend">
        <h1>Grade Range</h1>
        <p style={{ color: 'purple' }}>94 - 100</p>
        <p style={{ color: 'blue' }}>89 - 94</p>
        <p style={{ color: 'green' }}>80 - 89</p>
        <p style={{ color: 'gold' }}>70 - 80</p>
        <p style={{ color: 'orange' }}>60 - 70</p>
        <p style={{ color: 'red' }}>0 - 60</p>
      </div>

    </div>
  );
}


