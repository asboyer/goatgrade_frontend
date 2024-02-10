import React, { useState, useEffect } from 'react';
import Player from './Player';
import allPlayers from './allPlayers';

export default function PlayerList({searchTerm}) {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const filtered = allPlayers.filter(player =>
            player.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchTerm]);

    return (
        <div id="wholePL">
            <div id="PL-container" style={{ maxWidth: '1000px' }}>
                {filteredData.map((player, index) => (
                    <div key={index} id={`PL-player-${index}`}>
                        <Player player={player} />
                    </div>
                ))}
                {filteredData.length === 0 ? <div id="PL-cant-find"> Can not find any players!</div> : ""}
            </div>
        </div>
    );
}
