import React from "react";
import StatBox from './StatBox/StatBox';
import classes from './TotalStats.module.css'

const TotalStats = (props) => {
  console.log(props.covidData)
  return (
    <div className = {classes.layoutColumn}>
      <StatBox displayData = {props.covidData.confirmed} category = {"Confirmed"}/>
      <StatBox displayData = {props.covidData.deaths} category = {"Deaths"}/>
      <StatBox displayData = {props.covidData.critical} category = {"Critical"}/>
      <StatBox displayData = {props.covidData.recovered} category = {"Recovered"}/>
    </div>
  )
}

export default TotalStats;
