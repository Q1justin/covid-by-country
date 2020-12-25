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

  /*Should only run on initial load*/
  useEffect(()=>{
    /*Default start in the U.S.*/
    fetch(`https://corona-api.com/countries/US`)
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      setcovidData({
        name: body.data.name,
        confirmed: body.data.latest_data.confirmed,
        deaths: body.data.latest_data.deaths,
        critical: body.data.latest_data.critical,
        recovered: body.data.latest_data.recovered
      });
    });
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
    /*Set country name to what was searched*/
    /*Get specific country data*/
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

  return (
    <div>
      <h1>Covid Tracker</h1>
      <TotalStats covidData = {covidData} />
      <SearchBox handleSearch = {handleSearch} countries = {countries} covidData = {covidData}/>
      <BarGraph covidData = {covidData}/>
    </div>
  )
}

export default App;
