import React, { Component } from "react";
import "./form.css";
var humanFormat = require("human-format");

class CalcInput extends Component {
  render () {
    return (
      <>
      <label htmlFor={this.props.name}>
        {this.props.label}
      </label>
      <input
        type="text"
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}
        />
      <span className="value">
        {humanFormat(
          parseInt(this.props.value),
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

export default CalcInput;
