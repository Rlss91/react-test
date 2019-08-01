import React, { Component } from "react";

export default class T3 extends Component {
  render() {
    // console.log(this.props.src)
    return (
      <div>
        <h1>hello {this.props.name}</h1>
      </div>
    );
  }
}
