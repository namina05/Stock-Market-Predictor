import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";


function Chart({ticker}){
     const [chartData, setChartData] =
    useState([]);

    useEffect(() => {

        if (!ticker) return;

        async function loadChart() {

            try {

                const response =
                await fetch(
                    `http://127.0.0.1:8000/predict/${ticker}/chart`
                );

                const data =
                await response.json();

                const formatted =
                data.dates.map(
                    (date, index) => ({
                        date,
                        price:
                        data.prices[index]
                    })
                );

                setChartData(
                    formatted
                );

            } catch (error) {

                console.error(
                    error
                );
            }
        }

        loadChart();

    }, [ticker]);

    if (
        chartData.length === 0
    ) return null;

    return (
        <div className="card">
            <h2>PRICE HISTORY</h2>
            <ResponsiveContainer width="100%" height= {300}>
                <LineChart data={chartData}>
                    <XAxis dataKey="date" fontSize="2px"/>
                    <YAxis/>
                    <Tooltip contentStyle={{
                        background: "#162033",
                        border: "1px solid #00e5ff",
                        borderRadius: "12px",
                        color: "white"
                    }}/>
                    <Line type="monotone" dataKey="price" dot={false}/>
                </LineChart>    
            </ResponsiveContainer> 
        </div>
    )

}

export default Chart