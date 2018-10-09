import React, { Component } from "react";
import "./form.css";
var humanFormat = require("human-format");

class CalcOutput extends Component {
  render () {
    return (
      <>
      <span className="label">
        {this.props.label}
      </span>
      <span className="rawValue">
        {this.props.value} {this.props.unit}
      </span>
      <span className="value">
        {humanFormat(
          this.props.value,
          {
            unit: this.props.unit,
            scale: this.props.scale
          }
        )}
      </span>
      </>
    )
  }
}

export default CalcOutput;
