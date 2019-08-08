import React, { Component } from "react";

export default class Online extends Component {
  f1 = () => {
    let i = 0,
      l = 5;
    let arr = [],
      arr2 = [],
      arrr = [];
    for (i = 0; i < 5; i++) {
      arr = [...arr, <p key={i}>{i}</p>];
      arr2 = [...arr2, <p key={i + 5}>{i + "0"}</p>];
    }
    for (i = 0; i < 5; i++) {
      arrr = [...arrr, arr[i]];
      arrr = [...arrr, arr2[i]];
    }
    return arrr;
  };
  render() {
    return (
      <div>
        {this.f1()}
        <h1>On line</h1>
      </div>
    );
  }
}
