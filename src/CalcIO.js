import { Component } from "react";
var humanFormat = require("human-format");

class CalcIO extends Component {
  myValue = () => {
    return this.props.value;
  }

  ppValue = () => {
    return humanFormat(
      parseFloat(this.myValue()),
      {
        unit: this.props.unit,
        scale: this.props.scale
      }
    );
  }
}

export default CalcIO;
