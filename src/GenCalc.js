import React, { Component } from "react";
import "./form.css";
import ScalePick from "./ScalePick.js";

class GenCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 'SI' // human-format scale
    }
  }

  changeState = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
  }

  wrap(legend,inner) {
    return (
      <form>
        <fieldset>
          <legend>{legend}</legend>
          <div className="grid">
            {inner}
          <ScalePick
            scale={this.state.scale}
            onChange={this.changeState}
            />
          </div>
        </fieldset>
      </form>
    )
  }
}

export default GenCalc;
