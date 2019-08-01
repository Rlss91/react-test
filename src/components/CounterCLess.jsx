import React, { Component } from "react";

const CounterCLess = props => {
  return (
    <div>
      <button
        onClick={() => {
          props.onAddClick(props.aindex);
        }}
      >
        add
      </button>
      <div>{props.startval}</div>
    </div>
  );
};

export default CounterCLess;
