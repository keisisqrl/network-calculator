import React from "react";
import "./form.css";
import CalcInput from "./CalcInput.js";
import CalcOutput from "./CalcOutput.js";
import GenCalc from "./GenCalc.js";

class XferCalc extends GenCalc {
  constructor(props) {
    super(props);
    this.state = {
      rate: 100000000, // 100 Mbit/s
      size: 8230000, // 8.23 Mbyte
      scale: 'SI' // human-format scale
    };
  }


  render() {
    const { rate, size } = this.state;
    const xferTime = (parseInt(size) * 8) / parseInt(rate);

    return this.wrap("Calculate transfer time for rate",
      <>
      <CalcInput
            name="rate"
            value={rate}
            onChange={this.changeState}
            label="Rate in bits per second"
            unit="b/s"
            scale={this.state.scale}
            />


          <CalcInput
            name="size"
            value={size}
            onChange={this.changeState}
            label="Transfer size in bytes"
            unit="B"
            scale={this.state.scale}
            />

          <CalcOutput
            name="time"
            value={xferTime}
            label="Theoretical transfer time"
            unit="s"
            scale="SI"
            /> {/* Time is always SI */}
</>
    );
  }
}

export default XferCalc;
