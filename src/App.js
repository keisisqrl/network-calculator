import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import XferCalc from "./XferCalc.js";
import WindowCalc from "./WindowCalc.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updates: false
    };
  }

  notifyUpdates = () => {
    this.setState({
      updates: true
    });
  }

  render() {
    return (
      <div className="App">
        <XferCalc />
        <WindowCalc />
        { this.state.updates &&
          <h2 className="updateAlert">Updates ready; please refresh.</h2>
        }
      </div>
    );
  }
}

export default App;
