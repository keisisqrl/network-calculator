import React, { Component } from "react";
import "./form.css";
var humanFormat = require("human-format");

class XferCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 100000000, // 100 Mbit/s
      size: 8230000 // 8.23 Mbyte
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
    const { rate, size } = this.state;
    const xferTime = (parseInt(size) * 8) / parseInt(rate);

    return (
      <fieldset>
        <legend>Calculate transfer time for rate</legend>
        <div className="grid">
          <label htmlFor="rate">Rate in bits per second</label>
          <input
            type="text"
            name="rate"
            value={rate}
            onChange={this.changeState}
          />
          <span className="value">
            {humanFormat(parseInt(rate), { unit: "b/s" })}
          </span>

          <label htmlFor="size">Transfer size in bytes</label>
          <input
            type="text"
            name="size"
            value={size}
            onChange={this.changeState}
          />
          <span className="value">
            {humanFormat(parseInt(size), { unit: "B" })}
          </span>

          <label htmlFor="time">Theoretical transfer time</label>
          <span className="value">{xferTime} s</span>
          <span className="value">{humanFormat(xferTime, { unit: "s" })}</span>
        </div>
      </fieldset>
    );
  }
}

export default XferCalc;
