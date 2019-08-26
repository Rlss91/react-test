import React, { Component } from "react";
import "./App.css";
import HomeLogin from "./components/register/HomeLogin"

class App extends Component {
  state = {
    ps: "123",
    ps2: "111"
  };
//event -> target -> 
  handlePsChange = ({target: input}) => {
    let state = {...this.state}
    // let {ps} = state
    // ps = input.value
    state[input.name] = input.value
    // this.setState({ ps: input.value });
    this.setState({ ...state });
  };

  render() {
    // console.log(this)
    return (
      <div className="App">
        {/* <Switch>
          <Route path="/r1" component={R1} />
          <Route path="/r2" component={R2} />
          <Route path="/param/:userid" component={R3} /> */}
          {/* <Route path="/" exact component={RHome} /> */}
          {/* <Route path="/404" component={R404} />
          <Redirect from="/r3" to="/r1" />
          <Redirect to="/404" />
        </Switch> */}
        {/* <input
          type="text"
          name="ps"
          value={this.state.ps}
          onChange={this.handlePsChange}
        /> */}
        <HomeLogin />
        {/* <CounterFather /> */}
        {/* <HookComponent /> */}
        {/* <Main /> */}
        {/* <PagesMain /> */}
        {/* <Online /> */}
      </div>
    );
  }
}

export default App;
