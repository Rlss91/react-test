import React, { Component } from "react";
import PagesMain from "./components/pagination/PagesMain";
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
        {/* <input
          type="text"
          name="ps"
          value={this.state.ps}
          onChange={this.handlePsChange}
        />
        <CounterFather />
        <HookComponent /> */}
        {/* <Main /> */}
        <PagesMain />
      </div>
    );
  }
}

export default App;
