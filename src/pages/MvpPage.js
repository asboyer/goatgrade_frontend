import React, { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamsList from "../components/TeamsList.js"
import { generatePath, useNavigate } from "react-router-dom"
import M from './NBA.PNG';
import lebron from "./lebron.png"


export default function MvpPage() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const mvp = {
    percentile: 99,
    name: "Nikola Jokic",
    rank_change: 1,
    team: "Lakers",
    division: "West",
    team_placing: 2,
    Pos: "Power Forward",
    rank: 1,
    age: 28,
    games: 51,
    pos: "Center"
  }

  return (
    <div id="mvp-whole">
        {/* Heading */}
        <div id="homeHeading">
                <div id="homeIcon">
                    <img id="M" src={M} /> 
                    <div id="homeMartaTracker">GOAT.grade()</div>
                    <div id="homeAboutMe"><p onClick={() => {navigate("/");}}>Go Back</p>
                    </div>
                </div>
            </div>
        <div id="mvp-page">
            <div id="mvp-title">
                <h1>Predicted</h1>
                <h1 id="GOAT">MVP:</h1>
            </div>

            <div id="mvp-image">
                <img src={lebron}/>
            </div>
            <h2>{mvp.name} ({mvp.percentile})</h2>
            <p>Age: {mvp.age}</p>
            <p>Games Played: {mvp.games}</p>
            <p>Individual Rank: {mvp.rank}</p>
            <p>Current Team: {mvp.team}</p>
            <p>Position: {mvp.pos}</p>
        </div>
    </div>
  );
}


