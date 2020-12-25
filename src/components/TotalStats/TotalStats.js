import React from "react";
import StatBox from './StatBox/StatBox';
import classes from './TotalStats.module.css'

const TotalStats = (props) => {
  let data = props.showData ?   <div className = {classes.layoutColumn}>
      <StatBox displayData = {props.covidData.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} category = {"Confirmed"}/>
      <StatBox displayData = {props.covidData.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} category = {"Deaths"}/>
      <StatBox displayData = {props.covidData.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} category = {"Critical"}/>
      <StatBox displayData = {props.covidData.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} category = {"Recovered"}/>
    </div> 
    : null
  return (
    <div>
      {data}
    </div>
  )
}

export default TotalStats;
