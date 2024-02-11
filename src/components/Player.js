import React from 'react';
import down from "../pages/down.png"
import up from "../pages/up.png"

export default function Player({ player }) {

    function getBoxShadowColor(percentile) {
        if (percentile <= 60) return "red";
        else if (percentile <= 70) return "orange";
        else if (percentile <= 80) return "yellow";
        else if (percentile <= 89) return "green";
        else if (percentile <= 94) return "blue";
        else if (percentile <= 100) return "purple";
        else return "gray";
    }

    const boxShadowColor = getBoxShadowColor(player.grade);
    const boxShadowStyle = { 
        boxShadow: `0px 0px 30px ${boxShadowColor}`,
        borderColor: `${boxShadowColor}`
    };

    return (
        <div id="player-card" style={boxShadowStyle}>
            <div id="player-info">
                <div id="player-plaque">
                        <a href={player.link}>
                        <img id="player-image" src={player.img} style={{ width: '40px', height: 'auto' }}/>
                        </a>
                    <div id="player-percentile">
                        {player.grade}
                    </div>
                </div>
                
                <div id="player-text">
                    <div id="player-name">
                        {player.name}
                    </div>
                    <div id="player-team">
                        <div id="player-team-image">

                            <img src={player.team_img} style={{ width: '20px', height: 'auto' }}/>
                        </div>
                        <div id="player-team-description">
                            <span id="team-str">{player.team}</span> <br/> <span id="standing-str">{player.team_standing_string}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="player-rank-numbers">
                {
                    player.change < 0 ? (
                        <div id="player-rank-change-red"><img src={down} style={{ width: '15px', height: 'auto', marginTop: '5px' }}/>-{Math.abs(player.change)}</div>
                    ) : player.change > 0 ? (
                        <div id="player-rank-change-green"><img src={up} style={{ width: '15px', height: 'auto', marginTop: '5px' }}/>+{player.change}</div>
                    ) : <div id="player-rank-change-green">_</div>
                }
                <div id="player-rank">
                    {player.rank}
                </div>
            </div>
        </div>
    );
}
