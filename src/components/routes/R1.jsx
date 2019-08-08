import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class R1 extends Component {
  render() {
    return (
      <div>
        <h1>R1</h1>
        <a href="/r2">click here</a>
        <Link to="/r2">click here link</Link>
      </div>
    );
  }
}
