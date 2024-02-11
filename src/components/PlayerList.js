import React, { useState, useEffect } from 'react';
import Player from './Player';
const NBA_API = "https://goatgrade.pythonanywhere.com/players";

export default function PlayerList({ searchTerm }) {
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getData() {
        try {
            const res = await fetch(NBA_API);
            if (!res.ok) {
                throw new Error(`API call failed with status: ${res.status}`);
            }
            const newData = await res.json();
            setData(newData);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch data:', error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const filtered = data.filter(player =>
            player.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchTerm, data]);

    return (
        <div id="wholePL">
            <div id="PL-container">
                {loading ? (
                    <div id="PL-cant-find"> Loading 300+ players...</div>
                ) : filteredData.length === 0 ? (
                    <div id="PL-cant-find"> Loading 300+ players...</div>
                ) : (
                    <>
                        <div id="last-updated"><em>Last updated on {data[0]?.last_update || 'N/A'}</em></div>
                        {filteredData.map((player, index) => (
                            <div key={index} id={`PL-player-${index}`}>
                                <Player player={player} />
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
