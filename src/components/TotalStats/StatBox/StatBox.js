import React from "react";
import classes from './Statbox.module.css';

const StatBox = (props) => {
  return (
    <div className = {classes.box}>
    <h1>{props.category}</h1>
    <h2>{props.displayData}</h2>
    </div>
  )
}

export default StatBox;
