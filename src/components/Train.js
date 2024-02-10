import lebron from "../pages/lebron.png"
import lakers from "../pages/lakers.png"
export default function Train(props) {

    const player = {
        "rank": 100,
        "name": "LeBron James",
        "rank_change": 4,
        "team": "Lakers",
        "division": "West",
        "team_placing": 4,
        "Pos": "Power Forward"
    }
    function getBoxShadowColor(rank) {
        if (rank >= 0 && rank <= 17) return "red";
        else if (rank >= 18 && rank <= 33) return "orange";
        else if (rank >= 34 && rank <= 50) return "yellow";
        else if (rank >= 51 && rank <= 67) return "green";
        else if (rank >= 68 && rank <= 83) return "blue";
        else if (rank >= 84 && rank <= 100) return "purple";
        else return "gray"; // Default case, in case something goes wrong
    }

    function PlayerComponent({ player }) {
        const boxShadowColor = getBoxShadowColor(player.rank);
        const boxShadowStyle = { boxShadow: `0px 0px 30px ${boxShadowColor}` };
    
        return (
            <div id="player-card" style={boxShadowStyle}>
                <div id="player-info">
                    <div id="player-plaque">
                            <img id="player-image" src={lebron} style={{ width: '100px', height: 'auto' }}/>
                        <div id="player-percentile">
                            {player.rank}
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
                                {player.team}: {player.team_placing}th in the {player.division}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="player-rank-numbers">
                    {player.rank_change < 0 ? 
                        <div id="player-rank-change-red">v {player.rank_change * -1}</div>
                    :
                        <div id="player-rank-change-green">^ {player.rank_change}</div>
                    }
            
                    <div id="player-rank">
                        1
                    </div>
                </div>
            </div>
        );
    }


    return (
        <>
            <PlayerComponent player={player} />
        </>
      
    );
  }