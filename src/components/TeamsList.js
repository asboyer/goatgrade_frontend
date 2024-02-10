import React, { useState, useEffect } from 'react';
import Team from './Team';
import allTeams from './allTeams';

export default function TeamsList({searchTerm}) {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const filtered = allTeams.filter(team =>
            team.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchTerm]);

    return (
        <div id="wholePL">
            <div id="PL-container" style={{ maxWidth: '1000px' }}>
                {filteredData.map((team, index) => (
                    <div key={index} id={`PL-player-${index}`}>
                        <Team team={team} />
                    </div>
                ))}
                {filteredData.length === 0 ? <div id="PL-cant-find"> Can not find any teams!</div> : ""}
            </div>
        </div>
    );
}
