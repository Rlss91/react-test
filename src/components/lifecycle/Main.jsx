import React, { Component } from "react";
import T4 from "./T4";

export default class Main extends Component {
  state = {
    tf: true
  };
  handleClick = () => {
    let tf = !this.state.tf;
    this.setState({ tf });
  };
  render() {
    return (
      <div>
        {this.state.tf ? <T4 name="component 1" /> : ""}
        {this.state.tf ? <T4 name="comp" /> : ""}
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}
