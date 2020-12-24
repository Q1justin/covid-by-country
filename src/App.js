import React, { useState, useEffect } from "react";
import TotalStats from './components/TotalStats/TotalStats';
import SearchBox from './components/SearchBox/SearchBox';
import BarGraph from './components/BarGraph/BarGraph';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import './App.css';


function App() {
  const [searchCountry, setSearchCountry] = useState("");
  const [covidData, setcovidData] = useState({
    confirmed: 0,
    deaths: 0,
    critical: 0,
    recovered: 0
  });
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch(`https://corona-api.com/countries/AF`)
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      setcovidData({
        confirmed: body.data.latest_data.confirmed,
        deaths: body.data.latest_data.deaths,
        critical: body.data.latest_data.critical,
        recovered: body.data.latest_data.recovered
      });
      console.log(covidData);
    });
  }, [])

  /*Get a list of countries to display as a suggestion*/
  useEffect(()=>{
    fetch(`https://corona-api.com/countries`)
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      setCountries(body.data);
    });
  }, [])

  let handleSearch = (countryName) => {
    /*Set country name to what was searched*/
    setSearchCountry(countryName)
    /*Get specific country data*/
    fetch(`https://api.covid19api.com/`)
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      setcovidData(body);
    });
    console.log("HAPPEN")
  }

  return (
    <div>
      <h1>Covid Tracker</h1>
      <TotalStats covidData = {covidData} />
      <SearchBox onSearch = {() => handleSearch()} countries = {countries}/>
      <BarGraph covidData = {covidData}/>
    </div>
  )
}

export default App;
