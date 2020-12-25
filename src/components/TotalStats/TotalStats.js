import React from "react";
import StatBox from './StatBox/StatBox';
import classes from './TotalStats.module.css'

const TotalStats = (props) => {
  console.log(props.covidData)
  return (
    <div className = {classes.layoutColumn}>
      <StatBox displayData = {props.covidData.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} category = {"Confirmed"}/>
      <StatBox displayData = {props.covidData.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} category = {"Deaths"}/>
      <StatBox displayData = {props.covidData.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} category = {"Critical"}/>
      <StatBox displayData = {props.covidData.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} category = {"Recovered"}/>
    </div>
  )
}

export default TotalStats;
