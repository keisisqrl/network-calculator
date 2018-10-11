import React, { Component } from "react";
import "./form.css";
import CalcInput from "./CalcInput.js";
import CalcOutput from "./CalcOutput.js";
import ScalePick from "./ScalePick.js";

class WindowCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 50000000, // 50 Mbit/s
      rtt: 150, // 150 ms
      window: 65535, // 65535 bytes
      scale: 'SI' // human-format scale
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

  changeScale = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

  render() {
    const { rate, rtt, window } = this.state;
    const currentRate = ((parseInt(window) * 8) / parseFloat(rtt)) * 1000;
    const idealWindow = Math.round(
      (parseInt(rate) * parseFloat(rtt)) / 1000 / 8
    );

    return (
      <form>
      <fieldset>
        <legend>Calculate window requirements</legend>
        <div className="grid">
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

          <CalcInput label="Window in bytes"
            name="window"
            value={window}
            onChange={this.changeState}
            unit="B"
            scale={this.state.scale}
          />

          <CalcOutput
            label="Theoretical transfer rate"
            value={currentRate}
            unit="b/s"
            scale={this.state.scale}
          />


        <CalcOutput
          label="Theoretical ideal window"
          value={idealWindow}
          unit="B"
          scale={this.state.scale}
          />

        <span className="label progLabel">Transfer rate ratio</span>
          <span className="rawValue progValue">
            <progress max={rate} value={currentRate} />
          </span>
          <span className="value">
            {Math.round((currentRate / rate) * 10000) / 100}%
          </span>

          <ScalePick
            scale={this.state.scale}
            onChange={this.changeScale}
            />
        </div>
      </fieldset>
    </form>
    );
  }
}

class RttInput extends CalcInput {
  myValue = () => {
    return this.props.value / 1000;
  }
}

export default WindowCalc;
