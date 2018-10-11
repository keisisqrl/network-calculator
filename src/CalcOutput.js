import React from "react";
import "./form.css";
import CalcIO from "./CalcIO.js";

class CalcOutput extends CalcIO {

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
        {this.ppValue()}
      </span>
      </>
    )
  }
}

export default CalcOutput;
