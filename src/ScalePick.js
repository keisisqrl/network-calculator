import React, { Component } from "react";
import "./ScalePick.css";

class ScalePick extends Component {
  render () {
    return (
<span className="scalePick">
  <span>Scale:</span>
  <span>
    SI
  <input type="radio"
    name="scale"
    value="SI"
    checked={this.props.scale === "SI"}
    onChange={this.props.onChange}
  />
</span>
<span>
  binary
    <input type="radio"
      name="scale"
      value="binary"
      checked={this.props.scale === "binary"}
      onChange={this.props.onChange}
      />
  </span>
</span>
)
}
}

export default ScalePick;
