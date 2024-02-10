import { useState } from "react";
import logo from './logo.svg'
import { generatePath, useNavigate } from "react-router-dom"
import M from './NBA.PNG';
import BRI from './BRI.png';
import git from './git.png'
import linkedIn from './linkedIn.png'
import mart from "./mart-modified.png"
import reaction from "./reaction-modified.png"


export default function Home({setPropColor}) {
    const navigate = useNavigate();
    return (
        <div id="homeBody">

            {/* Heading */}
            <div id="homeHeading">
                <div id="homeIcon">
                    <img id="M" src={M} /> 
                    <div id="homeMartaTracker">GOAT.grade()</div>
                    <div id="homeAboutMe"><p onClick={() => {navigate("/about");}}>About</p>
                    </div>
                </div>
                <div id="homeLinks">
                    <a href="https://github.com/DanielChee/gg_frontend" target="none"><img id="git" src={git} /> </a>
                </div>
            </div>


            {/* Main body */}
            <div id="homeText">
                <div id="homeTitle">
                    <div id="toprow"> <div id="GOAT">GOAT</div>{".grade()"}</div> 
                </div>
                <div id="homeContent">
                    Ranking the best NBA players and teams <br/> with cold hard data. Unbiased.
                </div>
                <div id="homeColorButtons">
                    <div id="buttons">
                        <p id="redButton" onClick={() => {navigate("/playerspage");}}>Players</p>
                        <p id="goldButton" onClick={() => {navigate("/mvppage");}}>MVP</p>
                        <p id="greenButton" onClick={() => {navigate("/teamspage");}}>Teams</p>
                    </div>
                </div>
            </div>


            {/* Footer */}
            <div id="homeFooter">
                <div id="homeFooterComponents">
                    <div id="homeReact">
                        <div id="topreact">Powered By</div> <div id="bottomreact"><img id="logo" src={logo} /><img id="reaction" src={reaction} /></div>
                    </div>
                    <div id="homeMarta">
                        <div id="topmarta">Backed By</div> <div id="bottomreact"><img id="mart" src={BRI} /></div>
                    </div>
                </div>
            </div>
            <p id="madeBy">Made By Andrew Boyer, Daniel Ayoung-Chee, and Joshua Thomas for the 2024 Hacklytics</p>
        </div>
      );
}

            