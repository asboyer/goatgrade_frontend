import { useState } from "react";
import logo from './logo.svg'
import { useNavigate } from "react-router-dom";
import M from './NBA.PNG';
import git from './git.png'
import linkedIn from './linkedIn.png'
import mart from "./mart-modified.png"
import playerDisplay from "./playerDisplay.png"



export default function About({setPropColor}) {
    const navigate = useNavigate();
    return (
        <div id="aboutBody">

            {/* Heading */}
            <div id="homeHeading">
                <div id="homeIcon">
                    <img id="M" src={M} /> 
                    <div id="homeMartaTracker">GOAT.grade()</div>
                    <div id="homeAboutMe"><p onClick={() => {navigate("/");}}>Go Back</p>
                    </div>
                </div>
                <div id="homeLinks">
                    <a href="https://github.com/DanielChee/gg_frontend" target="none"><img id="git" src={git} /> </a>
                </div>
            </div>

            <h1>About Us</h1>

            <div id="aboutContent">
                <div id="aboutImage">
                    <img id="aboutTrain" src={playerDisplay} />
                </div>
                <div id="aboutText">
                    <p>
                        Welcome to our sports analytics platform, founded by Andrew Boyer, Daniel Ayoung-Chee, and Joshua Thomas. Our mission is simple: <b id="bold-about">to revolutionize sports rankings and MVP predictions through the power of data science and machine learning.</b>
                    </p>

                    <p>
                        Andrew specializes in backend API work and data manipulation, ensuring our data is accurate and reliable. Daniel leads our design and frontend development, crafting a user-friendly website that makes complex data accessible. Joshua applies machine learning algorithms to predict future MVPs, turning statistical analysis into insightful forecasts.
                    </p>

                    <p>
                        Together, we provide a comprehensive analysis and ranking of players and teams, coupled with forward-looking predictions about the next sports legends. Join us as we blend technology and sports to uncover new insights and celebrate the future of sporting excellence.
                    </p>
                </div>
            </div>
        </div>
      );
}

            