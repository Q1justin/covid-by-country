import React from "react";
import { Bar } from "react-chartjs-2";

const BarGraph = (props) => {
  const countryChart = {
    labels: ["Confirmed", "Deaths", "Critical", "Recovered"],
    datasets: [
      {
        label: ["Confirmed", "Deaths", "Critical", "Recovered"],
        data: [props.covidData.confirmed, props.covidData.deaths, props.covidData.critical, props.covidData.recovered],
        backgroundColor: ["#D3D3D3", "#fc6978", "#FFD700", "#69fca4"],
      },
    ],
  };
  return (
    <div>
    <Bar data={countryChart} />
    </div>
  )
}

export default BarGraph;
