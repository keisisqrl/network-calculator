import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import XferCalc from "./XferCalc.js";
import WindowCalc from "./WindowCalc.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <XferCalc />
        <WindowCalc />
      </div>
    );
  }
}

export default App;
