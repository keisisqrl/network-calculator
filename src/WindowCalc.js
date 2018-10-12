import React from "react";
import "./form.css";
import CalcInput from "./CalcInput.js";
import CalcOutput from "./CalcOutput.js";
import GenCalc from "./GenCalc.js";

class WindowCalc extends GenCalc {
  constructor(props) {
    super(props);
    this.state = {
      rate: 50000000, // 50 Mbit/s
      rtt: 150, // 150 ms
      window: 65535, // 65535 bytes
      scale: 'SI' // human-format scale
    };
  }

  render() {
    const { rate, rtt, window } = this.state;
    const currentRate = Math.floor(
      ((parseInt(window) * 8) / parseFloat(rtt)) * 1000
    );
    const idealWindow = Math.round(
      (parseInt(rate) * parseFloat(rtt)) / 1000 / 8
    );

    return this.wrap("Calculate window requirements",
      <>
          <CalcInput
            name="rate"
            label="Bandwidth in bits/second"
            value={rate}
            onChange={this.changeState}
            unit="b/s"
            scale={this.state.scale}
          />

        <RttInput
            name="rtt"
            label="RTT in milliseconds"
            value={rtt}
            onChange={this.changeState}
            unit="s"
            scale="SI"
          /> {/* Time is always SI */}

          <CalcOutput
            label="Ideal window"
            value={idealWindow}
            unit="B"
            scale={this.state.scale}
            />

          <CalcInput label="Current window in bytes"
            name="window"
            value={window}
            onChange={this.changeState}
            unit="B"
            scale={this.state.scale}
          />

          <CalcOutput
            label="Max current transfer rate"
            value={currentRate}
            unit="b/s"
            scale={this.state.scale}
          />


        <span className="label progLabel">Transfer rate ratio</span>
          <span className="rawValue progValue">
            <progress max={rate} value={currentRate} />
          </span>
          <span className="value">
            {Math.round((currentRate / rate) * 10000) / 100}%
          </span>

          </>
    );
  }
}

class RttInput extends CalcInput {
  myValue = () => {
    return parseFloat(this.props.value) / 1000;
  }
}

export default WindowCalc;
