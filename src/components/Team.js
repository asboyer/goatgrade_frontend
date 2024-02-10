import React from 'react';
import lebron from "../pages/lebron.png"
import lakers from "../pages/lakers.png"

export default function Player({ team }) { // Destructure team from props

    function getBoxShadowColor(percentile) {
        if (percentile >= 1 && percentile <= 5) return "purple";
        else if (percentile >= 6 && percentile <= 10) return "blue";
        else if (percentile >= 11 && percentile <= 15) return "green";
        else if (percentile >= 16 && percentile <= 20) return "yellow";
        else if (percentile >= 21 && percentile <= 25) return "orange";
        else if (percentile >= 26 && percentile <= 30) return "red";
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

    const boxShadowColor = getBoxShadowColor(team.rank);
    const boxShadowStyle = { boxShadow: `0px 0px 30px ${boxShadowColor}` };

    return (
        <div id="team-card" style={boxShadowStyle}>
            <div id="team-info">
                <img id="team-image" src={lakers} style={{ width: '80px', height: 'auto' }}/>
                <div id="team-text">
                    <div id="team-name">
                        {team.name}
                    </div>
                    <div id="team-standing">
                        {suffix_of(team.standing)} in the {team.division} division
                    </div>
                </div>
            </div>
            <div id="team-rank-numbers">
                <div id="team-rank">
                    {team.rank}
                </div>
                {
                    team.rank_change < 0 ? (
                        <div id="team-rank-change-red">v {Math.abs(team.rank_change)}</div>
                    ) : team.rank_change > 0 ? (
                        <div id="team-rank-change-green">^ {team.rank_change}</div>
                    ) : null
                }
            </div>
        </div>
    );
}
