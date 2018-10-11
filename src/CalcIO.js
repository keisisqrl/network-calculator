import { Component } from "react";
var humanFormat = require("human-format");

class CalcIO extends Component {
  myValue = () => {
    return parseFloat(this.props.value);
  }

  ppValue = () => {
    let val = this.myValue();
    return humanFormat(
      (Number.isNaN(val) ? 0 : val),
      {
        unit: this.props.unit,
        scale: this.props.scale
      }
    );
  }
}

export default CalcIO;
