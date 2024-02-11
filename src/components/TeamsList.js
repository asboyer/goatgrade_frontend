import React, { useState, useEffect } from 'react';
import Team from './Team';
const NBA_API = "https://goatgrade.pythonanywhere.com/teams";

export default function TeamsList({ searchTerm }) {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getData() {
        try {
            setLoading(true); // Ensure loading is true when starting to fetch data
            const res = await fetch(NBA_API);
            if (!res.ok) {
                throw new Error(`API call failed with status: ${res.status}`);
            }
            const newData = await res.json();
            setData(newData);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        } finally {
            setLoading(false); // Set loading to false in finally block to ensure it happens whether the fetch succeeds or fails
        }
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const filtered = data.filter(team =>
            team.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchTerm, data]); // Include `data` to ensure filtering re-runs when data changes

    return (
        <div id="wholePL">
            <div id="PL-container" style={{ maxWidth: '1000px' }}>
                {loading ? (
                    <div id="PL-cant-find"> Loading 30 Teams...</div>
                ) : filteredData.length === 0 ? (
                    <div id="PL-cant-find"> Can not find any teams!</div>
                ) : (
                    <>
                        <div id="last-updated"><em>Last updated on {data[0]?.last_update || 'N/A'}</em></div>
                        {filteredData.map((team, index) => (
                            <div key={index} id={`PL-player-${index}`}>
                                <Team team={team} />
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
