import './App.css'
import React from "react";
import GameBoard from "./GameBoard";

const App = () => {
  return (
    <div className="App">
      <GameBoard/>
      <Score/>
    </div>
  );
}

export default App;
