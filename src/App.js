import React, { useEffect, useState } from "react";
import SearchBox from './components/SearchBox/SearchBox';
import BarGraph from './components/BarGraph/BarGraph';
import './App.css';


function App() {
  return (
    <div>
      <h1>Covid Tracker</h1>
      {SearchBox}
      {BarGraph}
    </div>
  )
}

export default App;
