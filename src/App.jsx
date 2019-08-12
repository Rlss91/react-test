import React, { Component } from "react";
import PagesMain from "./components/pagination/PagesMain";
import Online from "./components/Online";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import "./App.css";
import R1 from "./components/routes/R1";
import R2 from "./components/routes/R2";
import RHome from "./components/routes/RHome";
import R3 from "./components/routes/R3";
import R404 from "./components/routes/R404";

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
        <Switch>
          <Route path="/r1" component={R1} />
          <Route path="/r2" component={R2} />
          <Route path="/param/:userid" component={R3} />
          {/* <Route path="/" exact component={RHome} /> */}
          <Route path="/404" component={R404} />
          <Redirect from="/r3" to="/r1" />
          <Redirect to="/404" />
        </Switch>
        <Link to={"/param/"+this.state.ps}>Click to send</Link>
        <form>
          <input
            type="text"
            name="ps"
            value={this.state.ps}
            onChange={this.handlePsChange}
          />
          <input
            type="text"
            name="ps2"
            value={this.state.ps2}
            onChange={this.handlePsChange}
          />
        </form>
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
