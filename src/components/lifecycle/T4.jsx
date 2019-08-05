import React, { Component } from "react";
import T1 from "../T1";

export default class T4 extends Component {
  state = {
    c: 0
  };
  handleClick = () => {
    let { c } = this.state;
    c++;
    this.setState({ c });
  };
  componentDidMount() {
    console.log(
      "%c componentDidMount " + this.props.name,
      this.props.name.length === 4 ? "color:red" : "color:green"
    );
  }
  componentWillUnmount() {
    console.log(
      "%c componentWillUnmount " + this.props.name,
      this.props.name.length === 4 ? "color:blue" : "color:#324212"
    );
  }
  componentWillUpdate() {
    console.log(
      "%c componentWillUpdate " + this.props.name,
      this.props.name.length === 4 ? "color:#111111" : "color:#222222"
    );
  }
  componentDidUpdate() {
    console.log(
      "%c componentDidUpdate " + this.props.name,
      this.props.name.length === 4 ? "color:#333333" : "color:#444444"
    );
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.state.c}</h2>
        <button onClick={this.handleClick}>click me T1</button>
      </div>
    );
  }
}
