import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import T1 from './T1'
import T2 from './T2'
import T3 from './T3'

class App extends Component{
  state = {
    tf: true
  }
  handleClick = () => {
    // let state = {...this.state}
    // let {tf} = state
    // tf = !tf
    let tf = !this.state.tf
    // this.state.tf = !this.state.tf
    this.setState({tf})
  }
    render(){
      // console.log(this)
      return(
        <div className="App">
          <T3 name='alex' src={[1,2,3]} />
          <button onClick={this.handleClick}>click me</button>
          {this.state.tf?<T1 />:<T2 />}
        </div>)
    }
}

export default App;
