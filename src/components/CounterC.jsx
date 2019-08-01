import React, { Component } from "react";

export default class CounterC extends Component {
  // state={
  //     counter:0
  // }
  // constructor(props){
  //     super(props)
  //     // console.log(props.startval)
  //     this.state.counter = props.startval
  // }

  // handleAdd = ()=>{
  //     this.setState({counter:(this.state.counter-1)})
  // }

  // handleSub = ()=>{
  //     this.setState({counter:(this.state.counter+1)})
  // }

  render() {
    // console.log(this.props.aindex)
    return (
      <div>
        <button
          onClick={() => {
            this.props.onAddClick(this.props.aindex);
          }}
        >
          add
        </button>
        <div>{this.props.startval}</div>
      </div>
    );
  }
}
