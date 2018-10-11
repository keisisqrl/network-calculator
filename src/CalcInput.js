import React from "react";
import CalcIO from "./CalcIO.js";
import "./form.css";

class CalcInput extends CalcIO {

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
        {this.ppValue()}
      </span>
      </>
    )
  }
}

export default CalcInput;
