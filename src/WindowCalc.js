import React, { Component } from "react";
import "./form.css";
import CalcInput from "./CalcInput.js";
import CalcOutput from "./CalcOutput.js";

class WindowCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 50000000, // 50 Mbit/s
      rtt: 150, // 150 ms
      window: 65535 // 65535 bytes
    };
  }

  changeState = e => {
    if (isNaN(parseFloat(e.target.value))) {
      this.setState({
        [e.target.name]: 0
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  render() {
    const { rate, rtt, window } = this.state;
    const currentRate = ((parseInt(window) * 8) / parseFloat(rtt)) * 1000;
    const idealWindow = Math.round(
      (parseInt(rate) * parseFloat(rtt)) / 1000 / 8
    );

    return (
      <fieldset>
        <legend>Calculate window requirements</legend>
        <div className="grid">
          <CalcInput
            name="rate"
            label="Bandwidth in bits per second"
            value={rate}
            onChange={this.changeState}
            unit="b/s"
          />

          <CalcInput
            name="rtt"
            label="RTT in milliseconds"
            value={rtt}
            onChange={this.changeState}
            unit="s"
          />

          <CalcInput label="Window in bytes"
            name="window"
            value={window}
            onChange={this.changeState}
            unit="B"
          />

          <CalcOutput
            label="Theoretical transfer rate"
            value={currentRate}
            unit="b/s"
          />


        <CalcOutput
          label="Theoretical ideal window"
          value={idealWindow}
          unit="B"
          />

          <span className="label">Transfer rate ratio</span>
          <span className="value">
            <progress max={rate} value={currentRate} />
          </span>
          <span className="value">
            {Math.round((currentRate / rate) * 10000) / 100}%
          </span>
        </div>
      </fieldset>
    );
  }
}

export default WindowCalc;
