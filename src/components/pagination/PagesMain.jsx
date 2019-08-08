import React, { Component } from "react";
import PagesComponent from "./PagesComponent";
import PagesBtns from "./PagesBtns";

export default class PagesMain extends Component {
  state = {
    data: [
      { name: "Lion king", duration: "1:30", rating: "9" },
      { name: "Aldin", duration: "1:30", rating: "2" },
      { name: "Pocahontas", duration: "1:30", rating: "1" },
      { name: "Gamby", duration: "1:30", rating: "10" },
      { name: "Anamels", duration: "1:30", rating: "5" },
      { name: "Molan", duration: "1:30", rating: "3" },
      { name: "Btb", duration: "1:30", rating: "7" },
      { name: "Cars", duration: "1:30", rating: "4" },
      { name: "Toy story", duration: "1:30", rating: "10" }
    ],
    startidx: 0,
    showitems: 4
  };
  handleClickPage = idx => {
    let { startidx, showitems } = this.state;
    startidx = idx * showitems;
    this.setState({ startidx });
  };
  filterArray = () => {
    let idx = 0;
    let arr = [];
    for (let item of this.state.data) {
      if (
        idx >= this.state.startidx &&
        idx < this.state.startidx + this.state.showitems
      ) {
        arr = [...arr, <PagesComponent key={idx} {...item} />];
      }
      idx++;
    }
    return arr;
  };
  render() {
    return (
      <div>
        <table>
          <tbody>{this.filterArray()}</tbody>
        </table>
        <PagesBtns {...this.state} onClickPage={this.handleClickPage} />
      </div>
    );
  }
}
