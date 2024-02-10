import lebron from "../pages/lebron.png"
import lakers from "../pages/lakers.png"
export default function Train(props) {
    
    return (
      <div id="player-card">
        <div id="player-info">
            <div id="player-plaque">
                    <img id="player-image" src={lebron} style={{ width: '100px', height: 'auto' }}/>
                <div id="player-percentile">
                    99
                </div>
            </div>
            
            <div id="player-text">
                <div id="player-name">
                    Lebron James
                </div>
                <div id="player-team">
                    <div id="player-team-image">
                        <img src={lakers} style={{ width: '40px', height: 'auto' }}/>
                    </div>
                    <div id="player-team-description">
                        Lakers: 4th in the West
                    </div>
                </div>
            </div>
        </div>
        <div id="player-rank-numbers">
            <div id="player-rank-change-green">
                {4 > 0 ? "^ 4" : ""}
            </div>
            <div id="player-rank-change-red">
                {4 < 0 ? "v 4" : ""}
            </div>
            <div id="player-rank">
                1
            </div>
        </div>
      </div>
    );
  }