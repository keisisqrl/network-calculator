import React, { Component } from "react";
import "./form.css";
var humanFormat = require("human-format");

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
          <label htmlFor="rate">Bandwidth in bits per second</label>
          <input
            type="text"
            name="rate"
            value={rate}
            onChange={this.changeState}
          />
          <span className="value">
            {humanFormat(parseInt(rate), { unit: "b/s" })}
          </span>

          <label htmlFor="rtt">RTT in milliseconds</label>
          <input
            type="text"
            name="rtt"
            value={rtt}
            onChange={this.changeState}
          />
          <span className="value">
            {humanFormat(parseFloat(rtt) / 1000, { unit: "s" })}
          </span>

          <label htmlFor="window">Window in bytes</label>
          <input
            type="text"
            name="window"
            value={window}
            onChange={this.changeState}
          />
          <span className="value">
            {humanFormat(parseInt(window), { unit: "B" })}
          </span>

          <span className="label">Theoretical transfer rate</span>
          <span className="value">{currentRate} bits/s</span>
          <span className="value">
            {humanFormat(parseInt(currentRate), { unit: "b/s" })}
          </span>

          <span className="label">Theoretical ideal window</span>
          <span className="value">{idealWindow} Bytes</span>
          <span className="value">
            {humanFormat(idealWindow, { unit: "B" })}
          </span>

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
