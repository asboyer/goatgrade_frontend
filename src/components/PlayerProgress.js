import React from "react";
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

function PlayerProgressionGraph({ playerData }) {
    // Flatten the arrays inside the object into a single array
    const flattenedData = Object.values(playerData).flat();

    // Extract the dates and grades
    const dates = flattenedData.map((data) => data.date);
    const grades = flattenedData.map((data) => data.grade);

    // Prepare the data for the graph
    const data = {
        labels: dates,
        datasets: [
            {
                label: "Player Grade Progression",
                data: grades,
                fill: false,
                backgroundColor: "rgb(75, 192, 192)",
                borderColor: "rgba(75, 192, 192, 0.2)",
            },
        ],
    };

    return (
        <div>
            <Line data={data} />
        </div>
    );
}

export default PlayerProgressionGraph;
