import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerList from "../components/PlayerList.js";
import { generatePath, useNavigate } from "react-router-dom";
import M from "./NBA.PNG";
import git from "./git.png";

export default function PlayersPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    return (
        <div id="whole-players-page">
            <div id="homeHeading" class="hh">
                <div id="homeIcon">
                    <a href="/">
                        {" "}
                        <img id="M" src={M} />
                    </a>
                </div>

                <input
                    type="text"
                    id="PL-search-bar"
                    placeholder="Search players..."
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
                <div id="homeLinks" class="hl-pl">
                    <a
                        href="https://github.com/asboyer/goatgrade_frontend"
                        target="none"
                    >
                        <img id="git" src={git} />{" "}
                    </a>
                </div>
            </div>
            <div id="players-page-content">
                <div styles="align-self: center">
                    <PlayerList searchTerm={searchTerm} />
                </div>
            </div>
        </div>
    );
}
