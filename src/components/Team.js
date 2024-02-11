import React from 'react';
import lebron from "../pages/lebron.png"
import lakers from "../pages/lakers.png"
import down from "../pages/down.png"
import up from "../pages/up.png"

export default function Player({ team }) { // Destructure team from props

    function getBoxShadowColor(percentile) {
        if (percentile <= 5) return "purple";
        else if (percentile <= 10) return "blue";
        else if (percentile <= 15) return "green";
        else if (percentile <= 20) return "yellow";
        else if (percentile <= 25) return "orange";
        else if (percentile <= 30) return "red";
        else return "gray"; // Default case, in case something goes wrong
    }

    const boxShadowColor = getBoxShadowColor(team.rank);
    const boxShadowStyle = { 
        boxShadow: `0px 0px 30px ${boxShadowColor}`,
        borderColor: `${boxShadowColor}`
    };

    return (
        <div id="team-card" style={boxShadowStyle}>
            <div id="team-info">
                <img id="team-image" src={team.img} style={{ width: '80px', height: 'auto' }}/>
                <div id="team-text">
                    <div id="team-name">
                        {team.name}
                    </div>
                    <div id="team-standing">
                        {team.standing}
                    </div>
                </div>
            </div>
            <div id="team-rank-numbers">
                <div id="team-rank">
                    {team.rank}
                </div>
                {
                    team.change < 0 ? (
                        <div id="player-rank-change-red"><img src={down} style={{ width: '15px', height: 'auto', marginTop: '5px' }}/>-{Math.abs(team.change)}</div>
                    ) : team.change > 0 ? (
                        <div id="player-rank-change-green"><img src={up} style={{ width: '15px', height: 'auto', marginTop: '5px' }}/>+{team.change}</div>
                    ) : <div id="player-rank-change-green">_</div>
                }
            </div>
        </div>
    );
}
