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
                    <a href="/"> <img id="M" src={M} /></a> 
                </div>
                <div id="homeLinks">
                    <a href="https://github.com/asboyer/goatgrade_frontend" target="none"><img id="git" src={git} /> </a>
                </div>
            </div>


            {/* Main body */}
            <div id="homeText">
                <div id="homeTitle">
                    <div id="toprow"> <div id="GOAT">GOAT</div>{".grade()"}</div> 
                </div>
                <div id="homeContent">
                    ranking the best nba players and teams <br/> with cold. hard. data.
                </div>
                <div id="homeColorButtons">
                    <div id="buttons">
                        <p id="redButton" onClick={() => {navigate("/players");}}>Players</p>
                        <p id="greenButton" onClick={() => {navigate("/teams");}}>Teams</p>
                    </div>
                </div>
            </div>


            {/* Footer */}
            <div id="homeFooter">
                <div id="homeFooterComponents">
                    <div id="homeReact">
                        <div id="topreact">powered by</div> <div id="bottomreact"><img id="reaction" src={reaction} /></div>
                    </div>
                    <div id="homeMarta">
                        <div id="topmarta">backed by</div> <div id="bottomreact"><a href="https://www.basketball-reference.com/"><img id="mart" src={BRI} /></a></div>
                    </div>
                </div>
            </div>
        </div>
      );
}

            