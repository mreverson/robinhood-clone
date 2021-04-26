import { MapTwoTone } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import '../css/LineGraph.css';

function LineGraph() {
    const [ grahpData, setGraphData ] = useState([]);

    const createMockData = () => {
        let data = [];
        let value = 50;
        for(var i = 0; i < 366; i++){
            let date = new Date();
            date.setHours(0,0,0,0);
            date.setDate(i);
            value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
            data.push({x: date, y: value});
        }
        setGraphData(data);
    }

    useEffect(() => {
        createMockData();
    }, [])

    return (
        <div className="linegraph">
            <Line
                data={{
                    datasets: [
                        {
                            type: "line",
                            data: grahpData,
                            backgroundColor: '#000',
                            borderColor: '#5ac53b',
                            borderWidth: 2,
                            pointBorderColor: 'rgba(0,0,0,0)',
                            pointBackgroundColor: 'rgba(0,0,0,0)',
                            pointHoverBackgroundColor: '#5ac53b',
                            pointHoverBorderColor: '#000',
                            pointHoverBorderWidth: 4,
                            pointHoverRadius: 6,
                        }
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    legend: {
                        display:false
                    },
                    tooltips: {
                        mode: "index",
                        intersect: false,
                    },
                    scales: {
                        xAxes: [{
                            type: "time",
                            time: {
                                format: "MM/DD/YY",
                                tooltipFormat: 'll',
                            },
                            ticks: {
                                display: false,
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                display: false,
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}

export default LineGraph;
