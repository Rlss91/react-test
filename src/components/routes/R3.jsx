import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class R3 extends Component {
  render() {
    return (
      <div>
        {console.log(this.props)}
        <h1>R3 {this.props.match.params.userid}</h1>
        <a href="/r1">click here</a>
        <Link to="/r1">click here link</Link>
      </div>
    );
  }
}
