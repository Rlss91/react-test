import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class R2 extends Component {
  render() {
    return (
      <div>
        <h1>R2</h1>
        <a href="/r1">click here</a>
        <Link to="/r1">click here link</Link>
      </div>
    );
  }
}
