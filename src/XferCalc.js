import React, { Component } from "react";
import "./form.css";
import CalcInput from "./CalcInput.js";
import CalcOutput from "./CalcOutput.js";

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

          <CalcInput
            name="rate"
            value={rate}
            onChange={this.changeState}
            label="Rate in bits per second"
            unit="b/s"
            />


          <CalcInput
            name="size"
            value={size}
            onChange={this.changeState}
            label="Transfer size in bytes"
            unit="B"
            />

          <CalcOutput
            name="time"
            value={xferTime}
            label="Theoretical transfer time"
            unit="s"
            />
        </div>
      </fieldset>
    );
  }
}

export default XferCalc;
