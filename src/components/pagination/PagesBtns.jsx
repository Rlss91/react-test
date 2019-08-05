import React, { Component } from "react";

export default class PagesBtns extends Component {
  pages = 0;
  calcPages = () => {
    let { showitems, data } = this.props;
    let i = 0;
    let arr = [];
    this.pages = Math.ceil(data.length / showitems);
    // console.log(this.pages);
    for (; i < this.pages; i++) {
      let ti = i;
      arr = [
        ...arr,
        <button
          key={i}
          onClick={() => {
            this.props.onClickPage(ti);
          }}
        >
          {i + 1}
        </button>
      ];
    }
    return arr;
  };
  render() {
    return <div>{this.calcPages()}</div>;
  }
}
