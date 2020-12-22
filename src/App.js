import React, { useEffect, useState } from "react";
import TotalStats from './components/TotalStats/TotalStats';
import SearchBox from './components/SearchBox/SearchBox';
import BarGraph from './components/BarGraph/BarGraph';
import './App.css';


function App() {
  return (
    <div>
      <h1>Covid Tracker</h1>
      <TotalStats />
      <SearchBox />
      <BarGraph />
    </div>
  )
}

export default App;
