import React, { Component } from "react";
import logo from "./logo.svg";
import CounterFather from "./components/CounterFather";
import "./App.css";

class App extends Component {
  state = {
    ps: "123"
  };

  handlePsChange = event => {
    // console.log(event.target.value)
    // let state = {...this.state}
    // let {ps} = state
    // ps = event.target.value
    this.setState({ ps: event.target.value });
  };

  render() {
    // console.log(this)
    return (
      <div className="App">
        <input
          type="text"
          name="ps"
          value={this.state.ps}
          onChange={this.handlePsChange}
        />
        <CounterFather />
      </div>
    );
  }
}

export default App;
