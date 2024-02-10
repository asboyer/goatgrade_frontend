import React from 'react';
import lebron from "../pages/lebron.png"
import lakers from "../pages/lakers.png"

export default function Player({ player }) { // Destructure player from props

    function getBoxShadowColor(percentile) {
        if (percentile >= 0 && percentile <= 17) return "red";
        else if (percentile >= 18 && percentile <= 33) return "orange";
        else if (percentile >= 34 && percentile <= 50) return "yellow";
        else if (percentile >= 51 && percentile <= 67) return "green";
        else if (percentile >= 68 && percentile <= 83) return "blue";
        else if (percentile >= 84 && percentile <= 100) return "purple";
        else return "gray"; // Default case, in case something goes wrong
    }

    function suffix_of(i) {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    }

    const boxShadowColor = getBoxShadowColor(player.percentile);
    const boxShadowStyle = { boxShadow: `0px 0px 30px ${boxShadowColor}` };

    return (
        <div id="player-card" style={boxShadowStyle}>
            <div id="player-info">
                <div id="player-plaque">
                        <img id="player-image" src={lebron} style={{ width: '80px', height: 'auto' }}/>
                    <div id="player-percentile">
                        {player.percentile}
                    </div>
                </div>
                
                <div id="player-text">
                    <div id="player-name">
                        {player.name}
                    </div>
                    <div id="player-team">
                        <div id="player-team-image">
                            <img src={lakers} style={{ width: '40px', height: 'auto' }}/>
                        </div>
                        <div id="player-team-description">
                            {player.team}: {suffix_of(player.team_placing)} in the {player.division}
                        </div>
                    </div>
                </div>
            </div>
            <div id="player-rank-numbers">
                {
                    player.rank_change < 0 ? (
                        <div id="player-rank-change-red">v {Math.abs(player.rank_change)}</div>
                    ) : player.rank_change > 0 ? (
                        <div id="player-rank-change-green">^ {player.rank_change}</div>
                    ) : null
                }
                <div id="player-rank">
                    {player.rank}
                </div>
            </div>
        </div>
    );
}
