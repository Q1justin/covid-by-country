import React, {useState, useEffect} from "react";
import { Line, Bar } from "react-chartjs-2";

const BarGraph = (props) => {
  const [graphData, setGraphData] = useState({
    confirmed: "",
    recovered: "",
    deaths: "",
  });
  const [chart, setChart] = useState([]);


/*Fetch global data on # of people confirmed, recovered, and dead from covid*/
  useEffect(() => {
      fetch("https://covid19.mathdro.id/api")
        .then((response) => {
          return response.json();
        })
        .then((body) => {
          let datas = {
            confirmed: body.confirmed.value,
            recovered: body.recovered.value,
            deaths: body.deaths.value,
          };
          setGraphData(datas);
        });
    }, []);
    console.log(graphData)

  return (
    <div>
    Where Bar Graph will Go
    </div>
  )
}

export default BarGraph;
