import React from "react";
import StatBox from './StatBox/StatBox';
import classes from './TotalStats.module.css'

const TotalStats = (props) => {
  return (
    <div className = {classes.layoutColumn}>
      <StatBox displayData = {""} category = {"Confirmed"}/>
      <StatBox displayData = {""} category = {"Deaths"}/>
      <StatBox displayData = {""} category = {"Critical"}/>
      <StatBox displayData = {""} category = {"Recovered"}/>
    </div>
  )
}

export default TotalStats;
