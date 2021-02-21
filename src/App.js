import React, { useState, useEffect } from "react";
import TotalStats from './components/TotalStats/TotalStats';
import SearchBox from './components/SearchBox/SearchBox';
import BarGraph from './components/BarGraph/BarGraph';
import './App.css';

function App() {
  const [covidData, setcovidData] = useState({
    name: "",
    confirmed: 0,
    deaths: 0,
    critical: 0,
    recovered: 0
  });
  const [countries, setCountries] = useState([]);
  const [showData, setShowData] = useState(false);

  /*Should only run on initial load*/
  useEffect(()=>{
    /*Get list of countries*/
    fetch(`https://corona-api.com/countries`)
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      setCountries(body.data);
    });
    /*Give second argument as this should only run once*/
  }, [])

  let handleSearch = (countryName) => {
    /*Show data but only run on initial change*/
    if(!showData){
      setShowData(true)
    }
    /*Set country name to what was searched*/
    fetch(`https://corona-api.com/countries/${countryName}`)
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      /*Reset data to different country statistics*/
      setcovidData({
        name: body.data.name,
        confirmed: body.data.latest_data.confirmed,
        deaths: body.data.latest_data.deaths,
        critical: body.data.latest_data.critical,
        recovered: body.data.latest_data.recovered
      });
    });
  }

  /*Change in plans -> show totalStats and graph only on search*/
  return (
    <div>
        <div class = "top">
          <h1 class = "upper">Covid Tracker</h1>
          <SearchBox handleSearch = {handleSearch} countries = {countries} covidData = {covidData}/>
        </div>
        <div class = "bottom">
          <TotalStats covidData = {covidData} showData = {showData}/>
          <BarGraph covidData = {covidData} showData = {showData}/>
        </div>
    </div>
  )
}

export default App;
