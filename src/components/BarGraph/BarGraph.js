import React from "react";
import { Bar } from "react-chartjs-2";
import classes from './BarGraph.module.css';

const BarGraph = (props) => {
  const countryChart = {
    labels: ["Confirmed"],
    datasets: [
      {
        label: "Confirmed",
        data: [props.covidData.confirmed],
        backgroundColor: "#D3D3D3"
      },
      {
        label: "Deaths",
        data: [props.covidData.deaths],
        backgroundColor: "#fc6978"
      },
      {
        label: "Critical",
        data: [props.covidData.critical],
        backgroundColor: "#FFD700"
      },
      {
        label: "Recovered",
        data: [props.covidData.recovered],
        backgroundColor: "#69fca4"
      },
    ],
  };
  console.log(countryChart.datasets)
  let data = props.showData ? <Bar data={countryChart} /> : null
  return (
    <div className = {classes.BarGraph}>
      {data}
    </div>
  )
}

export default BarGraph;
